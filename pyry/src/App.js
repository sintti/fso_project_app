import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      
    </div>
  )
}

const Invoices = () => {
  return (
    <div>
      
    </div>
  )
}

const Clients = () => {
  return (
    <div>
      
    </div>
  )
}

const clientModel = {
  id: Number,
  name: String,
  address: String,
  phone: String,
  email: String
}

const workdayModel = {
  id: Number,
  hours: Number,
  trip: Number,
  date: Date,
  client: String
}

const useField = (type) => {
  const [value, setValue] = useState('')
  
  const onChange = (event) => {
    setValue(event.target.value)
  }
  
  return {
    type,
    value,
    onChange
  }
}

const HoursAndExpenses = (props) => {
  const hours = useField('number')
  const trip = useField('number')
  const purchases = useField('number')
  const date = useField('date')
  const client = useField('text')
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Button clicked', e.target)
  }
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='hours'>Työtunnit</label>
        <input {...hours} id='hours' />
        <label htmlFor='trip'>Työmatkat</label>
        <input {...trip} id='trip' /> km
        <label htmlFor='purchases'>Hankinnat</label>
        <input {...purchases} id='purchases' />
        <label htmlFor='date'>Päivämäärä</label>
        <input {...date} id='date' />
        <label htmlFor="clients">Asiakas</label>
        <select {...client} id='clients'>
          {props.clients.map(client => 
            <option key={client.id}>{client.name}</option>
          )}
        </select>
      <button type='submit'>Tallenna</button>
      </form>
      {hours.value}{trip.value}{purchases.value}{date.value}{client.value}
    </div>
  )
}

const Notification = ({ notification }) => {
  return (
    <div className='notification'>
      {notification}
    </div>
  )
}

const App = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'roope ankka',
      address: 'Ankkalinnanmäki 1, 00100 Ankkalinna',
      phone: '04012345678',
      email: 'roope@ankkafirmat.fi',
    },
    {
      id: 2,
      name: 'aku ankka',
      address: 'Laiskatie 2, 00123 Ankkalinna',
      phone: '0451235648',
      email: 'aku.ankka@jippikaijei.com',
    },
    {
      id: 3,
      name: 'mikki hiiri',
      address: 'Poliisitalo 1, 00300 Ankkalinna',
      phone: '020456987',
      email: 'mikki.hiiri@ankkapoliisi.fi',
    },
  ])
  const [work, setWork] = useState([
    {
      id: 1,
      hours: 8,
      trip: 15,
      date: new Date(),
      client: 'roope ankka'
    }
  ])
  const [notification, setNotification] = useState('')
  
  const addNewCLient = client => {
    const newId = Math.random() * 10000
    const newClient = {...client, id: newId}
    setClients(clients.concat(newClient))
    setNotification(`Lisätty uusi asiakas ${newClient.name}`)
    setTimeout(() => {
      setNotification('')
    }, 3000);
  }
  
  const addNewWork = workInfo => {
    const newId = Math.random() * 10000
    const newWork = {...workInfo, id: newId}
    setWork(work.concat(newWork))
    setNotification(`Lisätty työtiedot päivälle ${newWork.date}`)
  }
  
  const menuItems =  (
    <div>
      <h1>PYRY</h1>
      <ul>
        <Link to='/hours'><li>Työaika ja kulut</li></Link>
        <Link to='/clients'><li>Asiakkaat</li></Link>
        <Link to='/invoices'><li>Laskut</li></Link>
        <Link to='/login'><li>Kirjautuminen</li></Link>
      </ul>
    </div>
  )
  
  return (
    <Router>
      {menuItems}
      <Switch>
        <Route path='/hours'>
          <HoursAndExpenses clients={clients} />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
        <Route path='/invoices'>
          <Invoices />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
      <Notification notification={notification} />
      
    </Router>
  )
}

export default App