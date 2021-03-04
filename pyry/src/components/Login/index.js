import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useField } from '../../hooks'
import { loginUser } from '../../reducers/loginReducer'

import { setNotification } from '../../reducers/notificationReducer'
import { setError } from '../../reducers/errorReducer'

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
      username.reset.resetForm()
      password.reset.resetForm()
      dispatch(setNotification(`Tervetuloa ${username.value}`))
    } catch (e) {
      console.log('perkele',e)
      dispatch(setError(`Käyttäjätunnus tai salasana väärin.`))
      username.reset.resetForm()
      password.reset.resetForm()
    }
  }
  
  return (
    <div className='container'>
      <h1>PYRY</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group>
        <Form.Label className='small mb-2 mt-2' htmlFor='username'>Käyttäjätunnus</Form.Label>
        <Form.Control {...username} id='username' placeholder='käyttäjätunnus' />
        <Form.Label className='small mt-2' htmlFor='password'>Salasana</Form.Label>
        <Form.Control {...password} id='password' placeholder='salasana' />
        <div className='row justify-content-end mt-3 px-3 pt-3' >
          <Button type='submit'>Kirjaudu</Button>
        </div>
        </Form.Group>
      </Form>
      <div className='mb-4 row justify-content-center' >
        Ei vielä tunnusta? <Link to='/signup' href='#' >Rekisteröidy</Link>
      </div>
    </div>
  )
}

export default Login