import React from 'react'
import { useField } from '../hooks/hooks'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'

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
      <Form onSubmit={handleLogin}>
        <Form.Group>
        <Form.Label htmlFor='username'>Käyttäjätunnus</Form.Label>
        <Form.Control {...username} id='username' />
        <Form.Label htmlFor='password'>Salasana</Form.Label>
        <Form.Control {...password} id='password' />
        <Button type='submit'>Kirjaudu</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login