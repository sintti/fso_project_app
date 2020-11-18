import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useField } from '../hooks/hooks'
import { createClient, deleteClient } from '../reducers/clientReducer'
import { Table, Form, Button } from 'react-bootstrap'

const Clients = () => {
  const name = useField('text')
  const address = useField('text')
  const phone = useField('text')
  const email = useField('email')
  
  const dispatch = useDispatch()
  const clients = useSelector(state => state.clients)
  
  const handleClientSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(createClient({
        name: name.value,
        address: address.value,
        phone: phone.value,
        email: email.value
      }))
    } catch (e) {
      console.log(e)
    } finally {
      name.reset.resetForm()
      address.reset.resetForm()
      phone.reset.resetForm()
      email.reset.resetForm()
    }
  }
  
  const handleDeleteClient = (id) => {
    try {
      dispatch(deleteClient(id))
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <div>
      <Form onSubmit={handleClientSubmit}>
        <Form.Group>
        <Form.Label htmlFor='name'>Asiakkaan nimi</Form.Label>
        <Form.Control {...name} id='name' />
        <Form.Label htmlFor='address'>Osoite</Form.Label>
        <Form.Control {...address} id='address' />
        <Form.Label htmlFor='phone'>Puhelinnumero</Form.Label>
        <Form.Control {...phone} id='phone' />
        <Form.Label htmlFor='email'>Sähköposti</Form.Label>
        <Form.Control {...email} id='email' />
        <Button type='submit'>Tallenna</Button>
        </Form.Group>
      </Form>
      
      <Table striped>
        <tbody>
          {clients.map(client =>
            <tr key={client.id}>
              <td>
                {client.name}
              </td>
              <td>
                {client.address}
              </td>
              <td>
                {client.phone}
              </td>
              <td>
                {client.email}
              </td>
              <td>
                <button onClick={() => handleDeleteClient(client.id)}>Delete</button>
              </td>
            </tr>)}
        </tbody>
      </Table>
    </div>
  )
}

export default Clients