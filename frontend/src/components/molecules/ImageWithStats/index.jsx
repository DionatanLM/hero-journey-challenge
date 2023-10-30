import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import styles from '../../organisms/BattleModal/BattleModal.module.scss'

const ImageWithStats = ({ opponent, winnerId, left }) => {
  const isMobile = useMediaQuery('(max-width:900px)')
  return (
    <Box className={[styles.modalContent, left && styles.modalContentLeft]}>
      <Image
        src={isMobile ? opponent?.images?.sm : opponent?.images?.lg}
        width={176}
        height={304}
        objectFit="cover"
        style={{
          objectFit: 'cover',
          boxShadow:
            opponent?.id === winnerId &&
            '0 0 0px 2px #ffffffba, #00ec00 0px 0px 15px 1px'
        }}
        alt={opponent?.name + ' Image'}
        loading="lazy"
      />

      <Typography variant="h5" className={styles.modalText}>
        {opponent?.name}
      </Typography>
    </Box>
  )
}

export default ImageWithStats
