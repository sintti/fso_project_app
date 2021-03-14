import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

import { useField } from '../../hooks'
import { setNotification } from '../../reducers/notificationReducer'
import { setError } from '../../reducers/errorReducer'
import Footer from '../Footer'
import signupService from '../../services/signup'

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
    <div>
      <Link to='/' href='#' as={Link}>
        <h1>Pyry</h1>
      </Link>
      <div className="row justify-content-center">
        <div className='card p-5'>
        <Form onSubmit={handleSignup}>
          <Form.Group className='input-group-lg' >
            <Form.Label className='small mb-2 mt-2' htmlFor='email'>Sähköposti</Form.Label>
            <Form.Control {...email} id='email' />
            <Form.Label className='small mb-2 mt-2' htmlFor='username'>Käyttäjätunnus</Form.Label>
            <Form.Control {...username} id='username' />
            <Form.Label className='small mb-2 mt-2' htmlFor='password'>Salasana</Form.Label>
            <Form.Control {...password} id='password' />
            <Form.Label className='small mb-2 mt-2' htmlFor='password'>Salasana uudelleen</Form.Label>
            <Form.Control {...passwordCheck} id='passwordCheck' />
            <div className='row justify-content-end mt-3 px-3 pt-3' >
              <Button type='submit'>Rekisteröidy</Button>
            </div>
          </Form.Group>
        </Form>
        <div className='mb-4 row justify-content-center' >
          <span>Onko sinulla jo tunnus?<Link to='/' href='#' > Kirjaudu</Link></span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup