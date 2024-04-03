import axios from 'axios'

const cartApi = axios.create({ baseURL: 'http://localhost:3000' })

export default cartApi
