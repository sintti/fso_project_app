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

export const setError = error => {
  return dispatch => {
    dispatch({
      type: 'SET_ERROR',
      data: error
    })
    setTimeout(() => {
      dispatch({
        type: 'HIDE_ERROR'
      })
    }, 10000);
  }
}

export default errorReducer