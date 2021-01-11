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

export const setNotification = notification => {
  return dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: notification
    })
    setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, 10000);
  }
}

export default notificationReducer