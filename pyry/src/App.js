import React, { useState } from 'react'

const Login = () => {
  
}

const Invoices = () => {
  
}

const Clients = () => {
  
}

const useField = (type) => {
  const [value, setValue] = useState('')
  
  const onChange = (event) => {
    setValue(event.target.value)
  }
  
  return {
    type,
    value,
    setValue
  }
}

const HoursAndExpenses = (props) => {
  const hours = useField('number')
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label for='hours'>Työtunnit</label>
        <input type='number' id='hours' />
        <label for='trip'>Työmatkat</label>
        <input type='number' id='trip' /> km
        <label for='purchases'>Hankinnat</label>
        <input type='number' id='purchases' /> eur
        <label for='date'>Päivämäärä</label>
        <input type='date' id='date' />
        <label for="clients">Asiakas</label>
        <select id='clients'>
          {props.clients.map(client => 
            <option key={client.id}>{client.name}</option>
          )}
        </select>
      <button type='submit'>Tallenna</button>
      </form>
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
  
  const menuItems =  (
    <div>
      <h1>PYRY</h1>
      <ul>
        <li>Työaika ja kulut</li>
        <li>Asiakkaat</li>
        <li>Laskut</li>
        <li>Kirjaudu ulos</li>
      </ul>
    </div>
  )
  return (
    <div>
      {menuItems}
      <HoursAndExpenses clients={clients}/>
    </div>
  )
}

export default App