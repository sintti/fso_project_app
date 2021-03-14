import axios from 'axios'

const baseUrl = '/api/users'

const getUserInfo = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const updateUserInfo = async (updated) => {
  console.log({ updated })
  const response = await axios.post(`${baseUrl}/${updated.id}`)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUserInfo, updateUserInfo }