import React from 'react'
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
    dispatch(createWork({
      hours: hours.value,
      trip: trip.value,
      purchases: purchases.value,
      date: date.value,
      client: client.value
    }))
    dispatch(setNotification(`Lisätty työtiedot päivälle ${date.value}`))
  }
  
  return (
    <div>
      <form onSubmit={handleWorkSubmit}>
        <label htmlFor='hours'>Työtunnit</label>
        <input {...hours} id='hours' placeholder='0' />
        <label htmlFor='trip'>Työmatkat</label>
        <input {...trip} id='trip' placeholder='0' />
        <label htmlFor='purchases'>Hankinnat</label>
        <input {...purchases} id='purchases' placeholder='0' />
        <label htmlFor='date'>Päivämäärä</label>
        <input {...date} id='date' />
        <label htmlFor="clients">Asiakas</label>
        <select {...client} id='clients' >
          {clients.map(client => 
            <option key={client.id}>{client.name}</option>
          )}
        </select>
      <button type='submit'>Tallenna</button>
      </form>
    </div>
  )
}

export default Work