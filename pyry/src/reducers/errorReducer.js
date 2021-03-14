import { timeoutCollection } from 'time-events-manager'

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.data
    case 'HIDE_ERROR':
      return state = null
    default:
      return state
  }
}

export const hideError = () => {
  return dispatch => {
    dispatch({
      type: 'HIDE_ERROR'
    })
  }
}

export const setError = error => {
  return dispatch => {
    dispatch({
      type: 'SET_ERROR',
      data: error
    })
    timeoutCollection.removeAll()
    setTimeout(() => {
      dispatch({
        type: 'HIDE_ERROR'
      })
    }, 5000)
  }
}

export default errorReducer