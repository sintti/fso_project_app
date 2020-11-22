import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

import { useField } from '../hooks/hooks'
import { setNotification } from '../reducers/notificationReducer'
import Footer from '../components/Footer'

const Signup = () => {
  const dispatch = useDispatch()
  const firstName = useField('text')
  const lastName = useField('text')
  const company = useField('text')
  const username = useField('text')
  const street = useField('text')
  const city = useField('text')
  const postnumber = useField('number')
  const email = useField('email')
  const phone = useField('text')
  const password = useField('password')
  const passwordCheck = useField('password')
  
  const handleSignup = (e) => {
    e.preventDefault()
    if (password !== passwordCheck) {
      dispatch(setNotification('Salasanojen tulee olla samanlaiset.'))
    }
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      company: company.value,
      username: username.value,
      address: `${street.value} ${postnumber.value} ${city.value}`,
      email: email.value,
      phone: phone.value,
      password: password.value
    }
    
    console.log('signup ', newUser)
  }
  
  return (
    <div className='container'>
      <div>
        <h1>PYRY</h1>
      </div>
      <Form onSubmit={handleSignup}>
        <Form.Group>
          <Form.Label htmlFor='firstName'>Etunimi</Form.Label>
          <Form.Control {...firstName} id='firstName' />
          <Form.Label htmlFor='lastName'>Sukunimi</Form.Label>
          <Form.Control {...lastName} id='lastName' />
          <Form.Label htmlFor='company'>Yritys</Form.Label>
          <Form.Control {...company} id='company' />
          <Form.Label htmlFor='street'>Katuosoite</Form.Label>
          <Form.Control {...street} id='street' />
          <Form.Label htmlFor='city'>Paikkakunta</Form.Label>
          <Form.Control {...city} id='city' />
          <Form.Label htmlFor='postnumber'>Postinumero</Form.Label>
          <Form.Control {...postnumber} id='postnumber' />
          <Form.Label htmlFor='email'>Sähköposti</Form.Label>
          <Form.Control {...email} id='email' />
          <Form.Label htmlFor='phone'>Puhelin</Form.Label>
          <Form.Control {...phone} id='phone' />
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