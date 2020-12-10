import loginService from '../services/login'
import clientService from '../services/clients'
import userService from '../services/user'

const loginReducer = (state = null, action) => {
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
    const returnedUser = await loginService.login(user)
    const userToLocalStorage = {
      token: returnedUser.token,
      id: returnedUser.id
    }
    clientService.setToken(returnedUser.token)
    window.localStorage.setItem('loggedPyryUser', JSON.stringify(userToLocalStorage))
    dispatch({
      type: 'SET_USER',
      data: returnedUser
    })
  }
}

export const logoutUser = () => {
  window.localStorage.removeItem('loggedPyryUser')
  return {
    type: 'LOGOUT_USER'
  }
}

export const setUserFromLocalStorage = (id) => {
  return async dispatch => {
    const userInfo = await userService.getUserInfo(id)
    dispatch({
      type: 'SET_USER',
      data: userInfo
    })
  } 
}

export default loginReducer