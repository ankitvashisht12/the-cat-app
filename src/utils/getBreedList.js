import axios from 'axios'


export const getBreedList = () => {
  return axios.get('/breeds')
}
