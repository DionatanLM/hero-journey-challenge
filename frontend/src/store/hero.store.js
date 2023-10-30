import { create } from 'zustand'

export const useHero = create((set, get) => ({
  loadingHeroes: false,
  heroes: [],
  hero: null,
  selectedHeroes: [],
  winner: null,
  openModal: false,

  selectHero: hero => {
    set(state => ({
      loadingHeroes: true,
      selectedHeroes: [...state.selectedHeroes, hero]
    }))

    const state = useHero.getState()

    if (state.selectedHeroes.length === 2) {
      const hero1 = state.selectedHeroes[0]
      const hero2 = state.selectedHeroes[1]

      const calculateTotalPowerstats = hero => {
        return Object.values(hero.powerstats).reduce(
          (total, stat) => total + parseInt(stat),
          0
        )
      }

      const totalPowerstatsHero1 = calculateTotalPowerstats(hero1)
      const totalPowerstatsHero2 = calculateTotalPowerstats(hero2)

      let winner = null

      if (totalPowerstatsHero1 > totalPowerstatsHero2) {
        winner = hero1
      } else if (totalPowerstatsHero2 > totalPowerstatsHero1) {
        winner = hero2
      } else {
        winner = 'Empate'
      }

      setTimeout(() => {
        set(() => ({
          winner,
          openModal: true,
          loadingHeroes: false
        }))
      }, 500)
    }
  },

  closeAndResetModal: () => {
    set(() => ({
      selectedHeroes: [],
      winner: null,
      openModal: false
    }))
  }
}))
