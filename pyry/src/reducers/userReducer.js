import loginService from '../services/login'
import clientService from '../services/clients'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data
    case 'LOGOUT_USER':
      return null
    default:
      return state
  }
}

export const loginUser = (user) => {
  return async dispatch => {
    const loggedUser = await loginService.login(user)
    clientService.setToken(loggedUser.token)
    window.localStorage.setItem('loggedPyryUser', JSON.stringify(loggedUser))
    dispatch({
      type: 'SET_USER',
      data: loggedUser
    })
  }
}

export const logoutUser = () => {
  window.localStorage.removeItem('loggedPyryUser')
  return {
    type: 'LOGOUT_USER'
  }
}

export const setUserFromLocalStorage = (user) => {
  return {
    type: 'SET_USER',
    data: user
  }
}

export default userReducer