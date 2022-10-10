import axios from 'axios'

const initialURL = 'https://api.themoviedb.org/3'
const API_KEY = '21f1c5308d9a3f2d3f95a98963bbca81'
const TMDB = axios.create({
  params: {
    api_key: API_KEY,
    language: 'en-US'
  }
})

export const POPULAR = TMDB.create({
  baseURL: `${initialURL}/discover/movie`,
  params: {
    sort_by: 'popularity.desc',
  }
})

export const TOP_RATED = TMDB.create({
  baseURL: `${initialURL}/movie/top_rated`,
})

export const UPCOMING = TMDB.create({
  baseURL: `${initialURL}/movie/upcoming`,
})

export const SEARCH = TMDB.create({
  baseURL:`${initialURL}/search/movie`, 
})

