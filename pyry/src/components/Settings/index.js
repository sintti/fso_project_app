import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { User } from 'react-feather'

import { useField } from '../../hooks'
import userService from '../../services/user'

const Settings = () => {
  const { user } = useSelector(state => state.user)
  const name  = useField('text')
  const company = useField('text')
  const yTunnus = useField('text')
  const address = useField('text')
  const phone = useField('text')
  
  // Do something with user input here
  // updating user works in backend. Try to get it working here too.
  const handleSettings = async (e) => {
    e.preventDefault()

    const updatedUser = await userService.updateUserInfo({
      id: user.id,
      name: name.value,
      company: company.value,
      yTunnus: yTunnus.value,
      address: address.value,
      phone: phone.value
    })
    
    console.log({ updatedUser })
  }
  
  return (
    <div>
      <h2><User size={40} /> Käyttäjäsetukset </h2>
        <div className='p-4'>
          <Form onSubmit={handleSettings} className='' >
            <Form.Group className='input-group-lg' >
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
              <Form.Label className='small mt-2' >Puhelin</Form.Label>
              <Form.Control {...phone} className='' placeholder={user.phone ? user.phone : 'Puhelin'} />
              <Form.Label className='small mt-2' >Osoite</Form.Label>
              <Form.Control {...address} className='' placeholder={user.address ? user.address : 'Osoite'} />
              <div className='row justify-content-end mt-3 px-3 pt-3' >
                <Button type='submit' >Tallenna</Button>
              </div>
            </Form.Group>
          </Form>
        </div>
    </div>
  )
}

export default Settings
