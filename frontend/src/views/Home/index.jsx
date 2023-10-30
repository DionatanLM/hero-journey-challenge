import React from 'react'
import styles from './Home.module.scss'
import { Box, Button, Fade, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
const HomePage = () => {
  return (
    <div className={styles.background}>
      <Fade in={true} timeout={300}>
        <Box className={styles.container}>
          <Typography className={styles.title}>
            Bem-vindo à Super Arena de Heróis! 🦸
          </Typography>
          <Typography className={styles.subtitle}>
            Prepare-se para a emocionante competição de super-heróis! Escolha
            seus lutadores e descubra quem é o mais poderoso. A batalha está
            prestes a começar!
          </Typography>

          <Button
            variant="contained"
            centerRipple
            endIcon={<ArrowForwardIosIcon />}
            className={styles.button}
            href="/batalha"
          >
            Ir para a Lista de Heróis
          </Button>
        </Box>
      </Fade>
    </div>
  )
}

export default HomePage
