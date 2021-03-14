import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { useField } from '../../hooks'
import Togglable from '../TogglableComponent'
import { setNotification } from '../../reducers/notificationReducer'
import { createClient, deleteClient } from '../../reducers/clientReducer'
import { setError } from '../../reducers/errorReducer'

const Clients = () => {
  const name = useField('text')
  const address = useField('text')
  const phone = useField('text')
  const email = useField('email')
  
  const dispatch = useDispatch()
  const clients = useSelector(state => state.clients)
  const work = useSelector(state => state.work)
  
  const handleClientSubmit = (e) => {
    e.preventDefault()
    try {
      dispatch(createClient({
        name: name.value,
        address: address.value,
        phone: phone.value,
        email: email.value
      }))
      dispatch(setNotification(`Asiakas "${name.value}" lisätty`))
    } catch (e) {
      dispatch(setError(`Virhe lisättäessä asiakasta: ${e}`))
    } finally {
      name.reset.resetForm()
      address.reset.resetForm()
      phone.reset.resetForm()
      email.reset.resetForm()
    }
  }
  
  const handleDeleteClient = (id) => {
    const clientToDelete = clients.find(c => c.id === id)
    try {
      if (window.confirm(`Delete ${clientToDelete.name}?`))
      dispatch(deleteClient(id))
      dispatch(setNotification(`Asiakas ${clientToDelete.name} poistettu`))
    } catch (e) {
      dispatch(setError(`Virhe poistettaessa asiakasta: ${e}`))
    }
  }
  
  const handleBilling = (id) => {
    const workForCurrentClient = work.filter(w => w.client === id)
    
  }
  
  return (
    <div>
      <h2>Asiakkaat</h2>
      <Form onSubmit={handleClientSubmit}>
        <Form.Group className='input-group-lg'>
          <Form.Label className='small mb-2 mt-2' htmlFor='name'>Nimi</Form.Label>
          <Form.Control {...name} id='name' placeholder='Nimi'/>
          <Form.Label className='small mb-2 mt-2' htmlFor='address'>Osoite</Form.Label>
          <Form.Control {...address} id='address' placeholder='Osoite'/>
          <Form.Label className='small mb-2 mt-2' htmlFor='phone'>Puhelinnumero</Form.Label>
          <Form.Control {...phone} id='phone' placeholder='Puhelinnumero'/>
          <Form.Label className='small mb-2 mt-2' htmlFor='email'>Sähköposti</Form.Label>
          <Form.Control {...email} id='email' placeholder='Sähköposti' />
          <div className='row justify-content-end p-4'>
            <Button type='submit'>Tallenna</Button>
          </div>
        </Form.Group>
      </Form>
      
      <div id='clients-container'>
        {clients.map(client =>
          <div  className='p-4' key={client.id}>
            <div>
              <h3>
                {client.name}
              </h3>
            </div>
            <div>
              <Togglable buttonLabel='Näytä'>
                <div id='clients wrapper'>
                  <div id='client-info'>
                    <p>Osoite: {client.address} </p>
                    <p>Puhelinnumero: {client.phone}</p>
                    <p>Sähköposti: {client.email}</p>
                  </div>
                  {work
                  .filter(w => w.client === client.id)
                  .map(w =>
                    <div key={w.id} id='work-info'>
                      <p>{w.date}: {w.hours} tuntia</p>
                    </div>
                  )}
                </div>
                <div className='row justify-content-end p-4'>
                  <Button className='mr-3' onClick={() => handleBilling(client.id)}>Laskuta</Button>
                  <Button onClick={() => handleDeleteClient(client.id)}>Poista</Button>
                </div>
              </Togglable>
            </div> 
          </div>
        )}
      </div>
    </div>
  )
}

export default Clients