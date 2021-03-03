import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = () => {
  const [visible, setVisible] = useState(true)
  const notification = useSelector(state => state.notification)
  
  const showNotification = { display: visible ? '' : 'none' }
  
  if (notification === null) {
    return null
  }
  
  return (
    <Alert style={showNotification} variant="success" onClose={() => setVisible(false)} dismissible >
      <p className="mb-0">
        {notification}
      </p>
    </Alert>
  )
}

export default Notification