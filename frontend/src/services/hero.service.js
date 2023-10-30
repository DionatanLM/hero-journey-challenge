import axios from 'axios'

const getAllHeroes = async () => {
  const result = await axios.get(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans'
  )

  return result.data
}

const heroService = {
  getAllHeroes
}

export default heroService
