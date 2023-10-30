'use client'
import React from 'react'
import { AppBar, Box, Fade, Toolbar, Typography, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import styles from './Header.module.scss'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from '@/constants/StyleConstant'

const Header = ({ search, filterByPowerStats }) => {
  const handleChange = event => {
    setTimeout(() => {
      search(event.target.value)
    }, 500)
  }

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 7 }}>
      <Fade in={true} timeout={200}>
        <AppBar
          position="fixed"
          sx={{
            background: 'rgb(10 20 50 / 44%)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                fontWeight: 600,
                italic: true,
                textShadow: '0px 1px 5px #379df089'
              }}
            >
              HERO JOURNEY
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar pelo nome do herói..."
                onChange={handleChange}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Fade>
    </Box>
  )
}

export default Header
