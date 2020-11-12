import clientService from '../services/clients'

const clientReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_CLIENT':
      return [...state, action.data]
    case 'DELETE_CLIENT':
      return state.filter(client => client.id !== action.data)
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
    const newClient = await clientService.createClient(client)
    dispatch({
      type: 'NEW_CLIENT',
      data: newClient
    }) 
  }
}

export const deleteClient = id => {
  return async dispatch => {
    await clientService.deleteClient(id)
    dispatch({
      type: 'DELETE_CLIENT',
      data: id
    })
  }
}

export default clientReducer