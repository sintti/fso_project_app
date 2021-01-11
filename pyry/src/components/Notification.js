import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  
  console.log(notification)
  
  if (notification === null) {
    return null
  }
  
  return (
    <Alert variant="success" dismissible>
      <p className="mb-0">
        {notification}
      </p>
    </Alert>
  )
}

export default Notification