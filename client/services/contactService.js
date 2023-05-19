import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL || '/api/persons'
const api = axios.create({ baseURL })

const getAll = () => api.get('/api/persons').then((response) => response.data)

const create = (newObject) =>
  api.post('/api/persons', newObject).then((response) => response.data)

const remove = (id) =>
  api
    .delete(`/api/persons/${id}`)
    .then(() => console.log(`deleted contact ${id}`))

const update = (id, newObject) =>
  axios.put(`/api/persons/${id}`, newObject).then((response) => response.data)

export default {
  getAll,
  create,
  remove,
  update,
}
