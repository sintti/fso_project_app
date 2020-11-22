import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useField } from '../hooks/hooks'
import { loginUser } from '../reducers/userReducer'
import Footer from '../components/Footer'

const Login = () => {
  const password = useField('password')
  const username = useField('text')
  
  const dispatch = useDispatch()
  
  
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      dispatch(loginUser({
        username: username.value,
        password: password.value
      }))
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <div className='container'>
      <h1>PYRY</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group>
        <Form.Label htmlFor='username'>Käyttäjätunnus</Form.Label>
        <Form.Control {...username} id='username' />
        <Form.Label htmlFor='password'>Salasana</Form.Label>
        <Form.Control {...password} id='password' />
        <Button type='submit'>Kirjaudu</Button>
        </Form.Group>
      </Form>
      <div>
        Ei vielä tunnusta? <Link to='/signup' href='#' >Rekisteröidy</Link>
      </div>
      <Footer /> 
    </div>
  )
}

export default Login