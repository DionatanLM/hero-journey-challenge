import React from 'react'
import { Box, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import styles from '../../organisms/BattleModal/BattleModal.module.scss'

const StatComparison = ({ opponent1, opponent2 }) => (
  <Box className={styles.modalPowerStats}>
    <Box>
      {opponent1 &&
        Object.keys(opponent1.powerstats).map(stat => (
          <Typography variant="h5" key={stat} sx={{ textAlign: 'center' }}>
            {opponent1.powerstats[stat]}{' '}
            {opponent1.powerstats[stat] > opponent2.powerstats[stat] ? (
              <ArrowDropUpIcon sx={{ color: 'green' }} />
            ) : opponent1.powerstats[stat] < opponent2.powerstats[stat] ? (
              <ArrowDropDownIcon sx={{ color: 'red' }} />
            ) : (
              <FiberManualRecordIcon sx={{ color: '#ece400', fontSize: 12 }} /> 
            )}
          </Typography>
        ))}
    </Box>
    <Box>
      {opponent1 &&
        Object.keys(opponent1.powerstats).map(stat => (
          <Typography
            variant="h5"
            fontWeight={600}
            fontSize={20}
            sx={{ textAlign: 'center', marginBottom: '5px' }}
            key={stat}
          >
            {stat.charAt(0).toUpperCase() + stat.slice(1)}
          </Typography>
        ))}
    </Box>
    <Box>
      {opponent2 &&
        Object.keys(opponent2.powerstats).map(stat => (
          <Typography variant="h5" key={stat} sx={{ textAlign: 'center' }}>
            {opponent2.powerstats[stat] > opponent1.powerstats[stat] ? (
              <ArrowDropUpIcon sx={{ color: 'green' }} />
            ) : opponent2.powerstats[stat] < opponent1.powerstats[stat] ? (
              <ArrowDropDownIcon sx={{ color: 'red' }} />
            ) : (
              <FiberManualRecordIcon sx={{ color: '#ece400', fontSize: 12 }} />
            )}{' '}
            {opponent2.powerstats[stat]}
          </Typography>
        ))}
    </Box>
  </Box>
)

export default StatComparison
