const getAllHeroes = async () => {
  try {
    const response = await fetch(
      'http://homologacao3.azapfy.com.br/api/ps/metahumans'
    )

    if (!response.ok) {
      throw new Error('Erro ao obter os heróis')
    }

    const data = await response.json()
    return data
  } catch (error) {
    // Trate os erros aqui conforme necessário
    console.error('Erro ao obter os heróis:', error)
    throw error
  }
}

const heroService = {
  getAllHeroes
}

export default heroService
