import { cardStyles, styleBoxShadowColor } from '@/constants/StyleConstant'
import SwordIcon from '@/icons/SwordIcon'
import { useHero } from '@/store/hero.store'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const HeroCard = ({ id, name, powerstats, image, ...rest }) => {
  const { selectedHeroes } = useHero()
  const isSelected = selectedHeroes.find(hero => hero?.id === id) !== undefined

  function calculatePowerstatsTotal(powerstats) {
    let total = 0
    for (const stat in powerstats) {
      total += powerstats[stat]
    }
    return total
  }

  const totalPowerstats = calculatePowerstatsTotal(powerstats)
  const boxShadowColor = styleBoxShadowColor(totalPowerstats)

  return (
    <Card {...rest} sx={cardStyles(boxShadowColor, isSelected)}>
      <CardMedia
        sx={{
          height: 200,
          borderRadius: 2,
          boxShadow: `0px 2px 5px 0px ${boxShadowColor}, 0 10px 200px 0px ${boxShadowColor}59, 0 10px 100px 0px ${boxShadowColor}59, inset 0px 0px 2px 0px ${boxShadowColor}`
        }}
        image={image}
        title={name}
      />
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          color={'#fff'}
          sx={{
            textAlign: 'center',
            width: '157px',
            fontFamily: 'Roboto, sans serif'
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color={'#fff'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Roboto, sans serif'
          }}
        >
          <SwordIcon /> {totalPowerstats}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default HeroCard
