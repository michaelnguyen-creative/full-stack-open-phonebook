import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>
// you must return the value to collect it
  axios.get(baseUrl).then((response) => response.data)

const create = (newObject) =>
// add return here
  axios.post(baseUrl, newObject).then((response) => response.data)

const remove = (id) => axios.delete(`${baseUrl}/${id}`).then(() => console.log(`deleted contact ${id}`))

const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject).then((response) => response.data)

export const contactService = {
  getAll, create, remove, update,
}
