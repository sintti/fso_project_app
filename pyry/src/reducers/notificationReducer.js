import { timeoutCollection } from 'time-events-manager'

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'HIDE_NOTIFICATION':
      return state = null
    default:
      return state
  }
}

export const hideNotification = () => {
  return dispatch => {
    dispatch({
      type: 'HIDE_NOTIFICATION'
    })
  }
}

export const setNotification = notification => {
  return dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: notification
    })
    timeoutCollection.removeAll()
    setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, 5000)
  }
}

export default notificationReducer