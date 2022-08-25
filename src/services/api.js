import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8040/',
})

export default api
