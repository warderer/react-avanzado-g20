import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
},
(error) => {
  return Promise.reject(error)
})

const getSingleItem = (id) => axios.get(`${BASE_URL}/items/${id}`)
const getAllItems = () => axios.get(`${BASE_URL}/items`)
const createItem = (data) => axios.post(`${BASE_URL}/items`, data)

export {
  getSingleItem,
  getAllItems,
  createItem
}
