import axios from 'axios'

const PokedexApi = axios.create({
    url: "https://pokeapi.co/api/v2/pokemon/"
})

export default PokedexApi;