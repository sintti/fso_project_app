import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Error = () => {
  const [visible, setVisible] = useState(true)
  const error = useSelector(state => state.error)
  const showNotification = { display: visible ? '' : 'none' }
  
  if (error === null) {
    return null
  }
  
  return (
    <Alert  style={showNotification} variant="danger" onClose={() => setVisible(false)} dismissible >
      <p className="mb-0">
        {error}
      </p>
    </Alert>
  )
}

export default Error