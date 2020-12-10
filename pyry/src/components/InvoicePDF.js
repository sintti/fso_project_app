import React from 'react'
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer'
import { useSelector } from 'react-redux'

Font.register({ family: 'Roboto Condensed', src: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap' })

const styles = StyleSheet.create({
  page: {
    display: 'flex',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderColor: '#000000',
    borderWidth: 1
  },
  info: {
  },
  h1: {
  },
  section: {
    margin: 10,
    padding: 10,
    width: '45%',
    borderStyle: 'solid',
    borderColor: '#A9A9A9',
    borderWidth: 1
  },
  invoice: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    borderStyle: 'solid',
    borderColor: '#A9A9A9',
    borderWidth: 1
  }
})

const InvoicePDF = ({ user }) => {

  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.topContainer} id='top-container'>
        <View style={styles.section} id='client-info'>
          <Text>LASKU</Text>
          <Text>Asiakkaan nimi</Text>
          <Text>Osoite</Text>
          <Text>Postinro ja toimipaikka</Text>
          <Text>Puhelin</Text>
        </View>
        <View style={styles.section} id='company-info'>
          <Text>{user.company}</Text>
          <Text>{user.address}</Text>
          <Text>{user.phone}</Text>
          <Text>{user.email}</Text>
        </View>
      </View>
      <View id='invoice-info' style={styles.invoice}>
        <Text>Tänne tulee laskun tiedot:     </Text>
      </View>
    </Page>
  </Document>
  )
}

export default InvoicePDF