import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Error = () => {
  const error = useSelector(state => state.error)
  
  if (error === null) {
    return null
  }
  
  return (
    <Alert variant="danger" dismissible>
      <p className="mb-0">
        {error}
      </p>
    </Alert>
  )
}

export default Error