import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

import { hideError } from '../../reducers/errorReducer'

const Error = () => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(true)
  const error = useSelector(state => state.error)
  const showNotification = { display: visible ? '' : 'none' }
  
  if (!error) {
    return null
  }
  
  const handleClose = () => {
    setVisible(false)
    dispatch(hideError())
  }
  
  return (
    <Alert  style={showNotification} variant="danger" onClose={() => handleClose()} dismissible >
      <p className="mb-0">
        {error}
      </p>
    </Alert>
  )
}

export default Error