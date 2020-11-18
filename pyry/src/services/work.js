import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/work'
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getWork = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const createWork = async (workObject) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, workObject, config)
  return response.data
}

const getAllWork = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getWork, createWork, getAllWork, setToken }