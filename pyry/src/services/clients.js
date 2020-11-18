import axios from 'axios'

const baseUrl = '/api/clients'
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getClient = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const getAllClients = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createClient = async clientObject => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, clientObject, config)
  return response.data
}

const deleteClient = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.status
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getClient, createClient, getAllClients, deleteClient, setToken}