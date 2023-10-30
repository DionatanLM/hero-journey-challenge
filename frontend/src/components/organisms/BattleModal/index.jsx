import React from 'react'
import {
  Box,
  Button,
  Grid,
  Fade,
  Modal,
  Typography,
  useMediaQuery
} from '@mui/material'
import styles from './BattleModal.module.scss'
import { useHero } from '@/store/hero.store'
import ImageWithStats from '@/components/molecules/ImageWithStats'
import StatComparison from '@/components/molecules/StatComparison'

const BattleModal = () => {
  const { openModal, closeAndResetModal, selectedHeroes, winner } = useHero()
  const isMobile = useMediaQuery('(max-width:900px)')
  const [opponent1, opponent2] = selectedHeroes

  return (
    <Modal open={openModal} onClose={closeAndResetModal}>
      <Box className={styles.modal}>
        <Fade in={openModal} timeout={900}>
          <Grid container spacing={2} width={'10c0%'}>
            <Grid item sm={12} md={12} xs={12}>
              <Typography variant="h4" className={styles.modalTitle}>
                <Typography
                  className={
                    winner?.name
                      ? styles.modalTitleGreen
                      : styles.modalTitleYellow
                  }
                >
                  {winner?.name ? 'Winner' : 'Tie'}
                </Typography>
                {winner?.name}
              </Typography>
            </Grid>
            {isMobile ? (
              <>
                <Grid item sm={12} md={12} xs={12}>
                  <StatComparison opponent1={opponent1} opponent2={opponent2} />
                </Grid>
                <Grid item sm={6} md={6} xs={6}>
                  <ImageWithStats
                    opponent={opponent1}
                    winnerId={winner?.id}
                    left
                  />
                </Grid>
                <Grid item sm={6} md={6} xs={6}>
                  <ImageWithStats opponent={opponent2} winnerId={winner?.id} />
                </Grid>
              </>
            ) : (
              <>
                <Grid item sm={12} md={3} xs={2}>
                  <ImageWithStats
                    opponent={opponent1}
                    winnerId={winner?.id}
                    left
                  />
                </Grid>
                <Grid item sm={12} md={6} xs={8}>
                  <StatComparison opponent1={opponent1} opponent2={opponent2} />
                </Grid>
                <Grid item sm={12} md={3} xs={2}>
                  <ImageWithStats opponent={opponent2} winnerId={winner?.id} />
                </Grid>
              </>
            )}
            <Grid item sm={12} md={12} xs={12} sx={{ textAlign: 'center' }}>
              <Button variant="outlined" onClick={closeAndResetModal}>
                FECHAR
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </Box>
    </Modal>
  )
}

export default BattleModal
