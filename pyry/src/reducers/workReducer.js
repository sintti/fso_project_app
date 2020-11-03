import workService from '../services/work'

const workReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_WORK':
      return [...state, action.data]
    case 'INIT_WORK':
      return action.data
    default:
      return state
  }
}

export const intializeWork = () => {
  return async dispatch => {
    const initialWork = await workService.getAllWork()
    dispatch({
      type: 'INIT_WORK',
      data: initialWork
    })
  }
}

export const createWork = work => {
  return async dispatch => {
    const newWork = await workService.createWork(work)
    dispatch({
      type: 'NEW_WORK',
      data: newWork
    })
  }
}

export default workReducer