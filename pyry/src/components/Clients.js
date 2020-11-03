import React from 'react'
import { useField } from '../hooks/hooks'
import clientService from '../services/clients'

const Clients = () => {
  const name = useField('text')
  const address = useField('text')
  const phone = useField('text')
  const email = useField('email')
  
  const handleClientSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await clientService.createClient({
        name: name.value,
        address: address.value,
        phone: phone.value,
        email: email.value
      })
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <div>
      <form onSubmit={handleClientSubmit}>
        <label htmlFor='name'>Asiakkaan nimi</label>
        <input {...name} id='name' />
        <label htmlFor='address'>Osoite</label>
        <input {...address} id='address' />
        <label htmlFor='phone'>Puhelinnumero</label>
        <input {...phone} id='phone' />
        <label htmlFor='email'>Sähköposti</label>
        <input {...email} id='email' />
        <button type='submit'>Tallenna</button>
      </form>
    </div>
  )
}

export default Clients