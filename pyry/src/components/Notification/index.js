import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { hideNotification } from '../../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(true)
  const notification = useSelector(state => state.notification)
  
  const showNotification = { display: visible ? '' : 'none' }
  
  if (!notification) {
    return null
  }
  
  const handleClose = () => {
    setVisible(false)
    dispatch(hideNotification())
  }
  
  return (
    <Alert style={showNotification} variant="success" onClose={() => handleClose()} dismissible >
      <p className="mb-0">
        {notification}
      </p>
    </Alert>
  )
}

export default Notification