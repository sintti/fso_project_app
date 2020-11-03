import axios from 'axios'

const baseUrl = 'http://localhost:3001/clients'

const getClient = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const getAllClients = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createClient = async (clientObject) => {
  const response = await axios.post(baseUrl, clientObject)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getClient, createClient, getAllClients}