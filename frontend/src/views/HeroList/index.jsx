'use client'
import React, { useState } from 'react'
import {
  Alert,
  Box,
  Divider,
  Fade,
  Grow,
  Pagination,
  Skeleton,
  Snackbar,
  Typography,
  useMediaQuery
} from '@mui/material'
import styles from './HeroList.module.scss'
import Header from '@/components/organisms/Header'
import HeroCard from '@/components/molecules/HeroCard'
import { useHero } from '@/store/hero.store'
import BattleModal from '@/components/organisms/BattleModal'
import HeroIcon from '@/icons/HeroIcon'
import Footer from '@/components/organisms/Footer'

const ITEMS_PER_PAGE = 30

const HeroList = ({ heroes }) => {
  const [search, setSearch] = useState('')
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [selectedHeroName, setSelectedHeroName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [lastValidPage, setLastValidPage] = useState(1)

  const { selectedHeroes, winner, selectHero } = useHero()
  const [opponent1, opponent2] = selectedHeroes

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleHeroClick = hero => {
    if (selectedHeroes.length < 2) {
      if (hero.id === opponent1?.id || hero.id === opponent2?.id) return
      selectHero(hero)
      setSelectedHeroName(hero.name)
      setSnackBarOpen(true)
    }
  }

  const handleSnackBarClose = () => {
    setSnackBarOpen(false)
  }

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const lastFilteredPage = Math.ceil(filteredHeroes.length / ITEMS_PER_PAGE)
  if (lastValidPage > lastFilteredPage) {
    setLastValidPage(lastFilteredPage)
  }

  const validatedPage =
    currentPage > lastFilteredPage ? lastFilteredPage : currentPage

  const firstIndex = (validatedPage - 1) * ITEMS_PER_PAGE
  const lastIndex = validatedPage * ITEMS_PER_PAGE
  const currentHeroes = filteredHeroes.slice(firstIndex, lastIndex)
  const isMobile = useMediaQuery('(max-width:900px)')

  return (
    <>
      <div className={styles.container}>
        <Header search={setSearch} />
        <Fade in={true} timeout={200}>
          <Box className={styles.page}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography className={styles.actionText}>
                <HeroIcon /> Escolha seus heróis e entre na arena!
              </Typography>

              <Typography className={styles.actionText}>1 vs 1</Typography>
            </Box>
            <Divider
              sx={{
                background: '#ffffff1f',
                margin: '20px 0',
                marginBottom: '30px'
              }}
            />

            <Box className={styles.listContainer}>
              {currentHeroes.length > 0 ? (
                currentHeroes.map((hero, index) => (
                  <Grow in={true} timeout={300 * (index + 1)} key={hero.id}>
                    <Box style={{ transformOrigin: '0 0 0' }}>
                      <HeroCard
                        id={hero.id}
                        name={hero.name}
                        powerstats={hero.powerstats}
                        image={isMobile ? hero.images.sm : hero.images.lg}
                        onClick={() => handleHeroClick(hero)}
                      />
                    </Box>
                  </Grow>
                ))
              ) : (
                <Typography
                  sx={{ width: '100%', textAlign: 'center', marginTop: 5 }}
                >
                  Nenhum resultado encontrado com esse nome
                </Typography>
              )}
            </Box>

            <Box
              sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}
            >
              <Pagination
                count={Math.ceil(filteredHeroes.length / ITEMS_PER_PAGE)}
                page={currentPage}
                onChange={handleChangePage}
                variant="outlined"
                color="primary"
              />
            </Box>
          </Box>
        </Fade>
        <Footer />
      </div>
      <BattleModal
        winner={winner}
        opponent1={opponent1}
        opponent2={opponent2}
      />

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={2000}
        onClose={handleSnackBarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackBarClose} severity="success">
          {selectedHeroName} foi convocado para batalha!
        </Alert>
      </Snackbar>
    </>
  )
}

export default HeroList
