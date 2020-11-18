import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { useField } from '../hooks/hooks'
import InvoicePDF from './InvoicePDF'

const Invoices = () => {
  const clients = useSelector(state => state.clients)
  const beginningDate = useField('date')
  const endingDate = useField('date')
  const client = useField('text')
  const testText = useField('text')
  
  const handleInvoiceQuery = () => {
    console.log('pieru pörisee')
  }
  
  return (
    <div className='container'>
      <Form onSubmit={handleInvoiceQuery}>
        <Form.Label htmlFor='date'>Aikaväli</Form.Label>
        <Form.Control {...beginningDate} id='date' />
        <Form.Control {...endingDate} id='date' />
        <Form.Label htmlFor="clients">Asiakas</Form.Label>
        <Form.Control as='select' {...client} id='clients' >
          {clients.map(client => 
            <option key={client.id}>{client.name}</option>
          )}
        </Form.Control>
        <Form.Control {...testText} id='test-text'></Form.Control>
      </Form>
      <PDFViewer>
        <InvoicePDF />
      </PDFViewer>
    </div>
  )
}

export default Invoices