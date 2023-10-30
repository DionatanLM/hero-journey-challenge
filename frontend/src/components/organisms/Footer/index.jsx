import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import styles from './Footer.module.scss'
import { GitHub, LinkedIn } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} className={styles.footer}>
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              🎖️ Feito por <LinkedIn fontSize="12" />
              <strong>
                <a
                  href="
                  https://www.linkedin.com/in/dionatanlm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {'  '} Dionatan
                </a>
              </strong>
            </Typography>
            <Button>
              <a
                href="
                  https://github.com/DionatanLM/hero-journey-challenge"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <GitHub />
                <Typography variant="body2">Repositório do Projeto</Typography>
              </a>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
