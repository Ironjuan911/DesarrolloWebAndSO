import axios from 'axios'

const BASE_URL = 'https://6921a1e0512fb4140be0d724.mockapi.io/api/'
const RESOURCE = `${BASE_URL}/products`

export default {
  getAllProducts() {
    return axios.get(RESOURCE)
  },

  getProductById(id) {
    return axios.get(`${RESOURCE}/${id}`)
  },

  createProduct(data) {
    return axios.post(RESOURCE, data)
  },

  updateProduct(id, data) {
    return axios.put(`${RESOURCE}/${id}`, data)
  },

  deleteProduct(id) {
    return axios.delete(`${RESOURCE}/${id}`)
  }
}