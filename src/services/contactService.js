import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then((response) => response.data)

const create = (newObject) =>
  axios.post(baseUrl, newObject).then((response) => response.data)

const remove = (id) =>
  axios
    .delete(`${baseUrl}/${id}`)
    .then(() => console.log(`deleted contact ${id}`))

const update = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject).then((response) => response.data)

const contactService = {
  getAll,
  create,
  remove,
  update,
}

export default contactService
