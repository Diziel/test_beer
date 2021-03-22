import axios from 'axios'

const instance = axios.create({baseURL: 'https://api.punkapi.com/v2'})

export const Beer = {
  getAll() {
    return instance
      .get('/beers')
      .then((response) => response)
  }
}