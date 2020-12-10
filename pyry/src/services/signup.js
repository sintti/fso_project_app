import axios from 'axios'

const baseUrl = '/api/users'

const signup = async (user) => {
  const response = await axios.post(baseUrl, user)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { signup }