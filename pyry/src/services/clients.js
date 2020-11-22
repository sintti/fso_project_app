import axios from 'axios'

const baseUrl = '/api/clients'
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getClient = async (id) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(`${baseUrl}/${id}`, config)
  return response.data
}

const getAllClients = async () => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(baseUrl, config)
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
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.status
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getClient, createClient, getAllClients, deleteClient, setToken}