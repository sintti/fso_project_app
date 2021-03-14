import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)
  
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }
  
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  
  return (
    <div className='' >
      <div className='row' style={hideWhenVisible}>
        <Button onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div className='row justify-content-around' style={showWhenVisible}>
        {props.children}
        <Button onClick={toggleVisibility}>Piilota</Button>
      </div>
    </div>
  )
}

export default Togglable