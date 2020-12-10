import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { useField } from '../hooks/hooks'
import InvoicePDF from './InvoicePDF'

const Invoices = () => {
  const clients = useSelector(state => state.clients)
  const user = useSelector(state => state.user)
  
  const beginningDate = useField('date')
  const endingDate = useField('date')
  const client = useField('text')
  
  const handleInvoiceQuery = (e) => {
    e.preventDefault()
    console.log('clientin nimi', client.value)
  }
  
  return (
    <div className='container'>
      <h2>Lasku</h2>
      <p>Luo lasku valitsemalla aikaväli ja asiakas.</p>
      <Form onSubmit={handleInvoiceQuery}>
        <Form.Label htmlFor='date'>Aikaväli</Form.Label>
        <Form.Control {...beginningDate} id='date' />
        <Form.Control {...endingDate} id='date' />
        <Form.Label htmlFor="clients">Asiakas</Form.Label>
        <Form.Control as='select' {...client} id='clients' placeholder='' >
          <option selected value='' >Valitse asiakas</option>
          {clients.map(client => 
            <option key={client.id}>{client.name}</option>
          )}
        </Form.Control>
        <Button type='submit'>Luo lasku</Button>
      </Form>
      <PDFViewer>
        <InvoicePDF user={user} />
      </PDFViewer>
    </div>
  )
}

export default Invoices