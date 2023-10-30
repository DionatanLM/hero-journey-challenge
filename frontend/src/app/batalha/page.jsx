import React from 'react'
import HeroList from '@/views/HeroList'
import heroService from '@/services/hero.service'
import Header from '@/components/organisms/Header'

async function Battle() {
  const heroes = await heroService.getAllHeroes()

  return (
    <>
      <HeroList heroes={heroes} />
    </>
  )
}

export default Battle
