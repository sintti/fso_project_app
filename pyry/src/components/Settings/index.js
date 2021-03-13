import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { User } from 'react-feather'

import { useField } from '../../hooks'

const Settings = () => {
  const { user } = useSelector(state => state.user)
  const name  = useField('text')
  const company = useField('text')
  const yTunnus = useField('text')
  const address = useField('text')
  
  // Do something with user input here
  // Make the API ready in backend first though....
  const handleSettings = (e) => {
    e.preventDefault()
    console.log('usersettings: ', name.value, company.value, yTunnus.value, address.value)
  }
  
  return (
    <div>
      <h2><User size={40} /> Käyttäjäsetukset </h2>
      <div>
        <div className='p-5'>
          <Form onSubmit={handleSettings} className='' >
            <Form.Group >
              <Form.Label className='small mb-2 mt-2' >Käyttäjätunnus</Form.Label>
              <Form.Control disabled className='' placeholder={user.username} />
              <Form.Label className='small mb-2 mt-2' >Sähköposti</Form.Label>
              <Form.Control disabled className='' placeholder={user.email} />
              <Form.Label className='small mb-2 mt-2' >Nimi</Form.Label>
              <Form.Control {...name} className='' placeholder={user.name ? user.name : 'Nimesi'} />
              <Form.Label className='small mt-2' >Yritys</Form.Label>
              <Form.Control {...company} className='' placeholder={user.company ? user.company : 'Yrityksen nimi'} />
              <Form.Label className='small mt-2' >Y-tunnus</Form.Label>
              <Form.Control {...yTunnus} className='' placeholder={user.yTunnus ? user.yTunnus : 'Y-tunnus'} />
              <Form.Label className='small mt-2' >Osoite</Form.Label>
              <Form.Control {...address} className='' placeholder={user.address ? user.address : 'Osoite'} />
              <div className='row justify-content-end mt-3 px-3 pt-3' >
                <Button type='submit' >Tallenna</Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Settings
