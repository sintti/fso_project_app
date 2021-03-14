import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { useField } from '../../hooks'
import InvoicePDF from './InvoicePDF'
import { DollarSign } from 'react-feather'

const Invoices = () => {
  const clients = useSelector(state => state.clients)
  const user = useSelector(state => state.user)
  const beginningDate = useField('date')
  const endingDate = useField('date')
  const client = useField('client')
  
  const handleInvoiceCreation = (e) => {
    e.preventDefault()
    if (client.value) {
      let chosenClient = clients.find(c => c.name === client.value)
      console.log('chosen ', chosenClient)
      console.log('aloituspäivä: ', beginningDate)
      console.log('lopetuspäivä: ', endingDate)
    } else {
      console.log('valitse asiakas')
    }
  }
  
  const showPdfDownload = () => {
    return (
      <div>
        <PDFDownloadLink document={<InvoicePDF user={user} />} fileName="invoice.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Rakennetaan laskua...' : 'Lataa lasku!')}
        </PDFDownloadLink>
      </div>
    )
  }
  

  return (
    <div>
      <h2><DollarSign size={40} /> Lasku</h2>
      <p>Luo lasku valitsemalla aikaväli ja asiakas.</p>
      <div className='p-4'>
        <Form onSubmit={handleInvoiceCreation}>
          <Form.Group className='input-group-lg'>
            <Form.Label  htmlFor='date'>Aikaväli</Form.Label>
            <Form.Control {...beginningDate} id='date' />
            <Form.Control {...endingDate} className='mt-2' id='date' />
            <Form.Label htmlFor="clients">Asiakas</Form.Label>
            <Form.Control as='select' {...client}>
              <option key='default' value={null} >Valitse asiakas</option>
              {clients.map(client => 
                <option key={client.id}>{client.name}</option>
              )}
            </Form.Control>
            <div className='row justify-content-end p-4'>
              <Button type='submit'>Luo lasku</Button>
            </div>
          </Form.Group>
        </Form>
      </div>
      {showPdfDownload()}
    </div>
  )
  }

export default Invoices