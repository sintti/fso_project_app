import React from 'react'
import { useField } from '../hooks/hooks'
import { Form, Button } from 'react-bootstrap'
import loginService from '../services/login'

const Login = (props) => {
  const password = useField('password')
  const username = useField('text')
  
  
  const handleLogin = async (e) => {
    e.preventDefault()
    
    try {
      const loggedUser = await loginService.login({
        username: username.value,
        password: password.value
      })
      props.setUser(loggedUser)
      window.localStorage.setItem('loggedPyryUser', JSON.stringify(loggedUser))
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <div className='login'>
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