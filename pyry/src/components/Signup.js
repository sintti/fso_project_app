import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

import { useField } from '../hooks/hooks'
import { setNotification } from '../reducers/notificationReducer'
import { setError } from '../reducers/errorReducer'
import Footer from '../components/Footer'
import signupService from '../services/signup'

const Signup = () => {
  const dispatch = useDispatch()
  const username = useField('text')
  const email = useField('email')
  const password = useField('password')
  const passwordCheck = useField('password')
  
  const handleSignup = async (e) => {
    e.preventDefault()
    if (password !== passwordCheck) {
      dispatch(setError('Syöttämäsi salasanat eivät vastaa toisiaan.'))
    }
    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value
    }
    
    try {
      await signupService.signup(newUser)
      dispatch(setNotification(`Tervetuloa Pyryn käyttäjäksi ${username.value}!`))
    } catch (error) {
      dispatch(setError(`Virhe rekisteröitymisessä. Tarkista antamasi tiedot.`))
    }
  }
  
  return (
    <div className='container'>
      <div>
        <h1>PYRY</h1>
      </div>
      <Form onSubmit={handleSignup}>
        <Form.Group>
          <Form.Label htmlFor='email'>Sähköposti</Form.Label>
          <Form.Control {...email} id='email' />
          <Form.Label htmlFor='username'>Käyttäjätunnus</Form.Label>
          <Form.Control {...username} id='username' />
          <Form.Label htmlFor='password'>Salasana</Form.Label>
          <Form.Control {...password} id='password' />
          <Form.Label htmlFor='password'>Salasana uudelleen</Form.Label>
          <Form.Control {...passwordCheck} id='passwordCheck' />
          <Button type='submit'>Rekisteröidy</Button>
        </Form.Group>
      </Form>
      <div>
        Onko sinulla jo tunnus? <Link to='/' href='#' >Kirjaudu</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Signup