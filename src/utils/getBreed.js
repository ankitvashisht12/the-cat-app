import axios from 'axios';


export const getBreed = (id) => {
  return axios.get(`breeds/search?q=${id}`);
}
