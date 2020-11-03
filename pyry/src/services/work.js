import axios from 'axios'

const baseUrl = 'http://localhost:3001/work'

const getWork = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const createWork = async (workObject) => {
  const response = await axios.post(baseUrl, workObject)
  return response.data
}

const getAllWork = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getWork, createWork, getAllWork}