import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useField } from '../hooks/hooks'
import { createWork } from '../reducers/workReducer'
import { setNotification } from '../reducers/notificationReducer'

const Work = () => {
  const hours = useField('number')
  const trip = useField('number')
  const purchases = useField('number')
  const date = useField('date')
  const client = useField('text')
  
  const dispatch = useDispatch()
  const clients = useSelector(state => state.clients)
  
  const handleWorkSubmit = (e) => {
    e.preventDefault()
    dispatch(setNotification(`Lisätty työtiedot päivälle ${date.value}`))
    dispatch(createWork({
      hours: hours.value,
      trip: trip.value,
      purchases: purchases.value,
      date: date.value,
      client: client.value
    }))
  }
  
  return (
    <div>
      <Form onSubmit={handleWorkSubmit}>
        <Form.Label htmlFor='hours'>Työtunnit</Form.Label>
        <Form.Control {...hours} id='hours' placeholder='0' />
        <Form.Label htmlFor='trip'>Työmatkat</Form.Label>
        <Form.Control {...trip} id='trip' placeholder='0' />
        <Form.Label htmlFor='purchases'>Hankinnat</Form.Label>
        <Form.Control {...purchases} id='purchases' placeholder='0' />
        <Form.Label htmlFor='date'>Päivämäärä</Form.Label>
        <Form.Control {...date} id='date' />
        <Form.Label htmlFor="clients">Asiakas</Form.Label>
        <Form.Control as='select' {...client} id='clients' >
          {clients.map(client => 
            <option key={client.id}>{client.name}</option>
          )}
        </Form.Control>
      <Button type='submit'>Tallenna</Button>
      </Form>
    </div>
  )
}

export default Work