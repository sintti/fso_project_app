import clientService from '../services/clients'

const clientReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_CLIENT':
      return [...state, action.data]
    case 'INIT_CLIENTS':
      return action.data
    default:
      return state
  }
}

export const initializeClients = () => {
  return async dispatch => {
    const clients = await clientService.getAllClients()
    dispatch({
      type: 'INIT_CLIENTS',
      data: clients
    })
  }
}

export const createClient = client => {
  return async dispatch => {
    const newClient = await clientService.createClient()
    dispatch({
      type: 'NEW_CLIENT',
      data: newClient
    }) 
  }
} 

export default clientReducer