import React from 'react'
import './info.css'

const Info = () => {
  return (
    <div>
      <h2>Mikä on Pyry?</h2>
      <p className='info-text' >
        Pyry on pienyrittäjälle suunniteltu laskutuksen ja työaikaseurannan 
        apuväline. Se on suunniteltu helpottamaan kiireisen yrittäjän arkea. 
        Pyry automatisoi laskutusta ja muita tylsiä, mutta 
        pakollisia tehtäviä, joihin yrittäjän ei monestikaan tekisi mieli 
        kuluttaa kallista aikaansa eikä varsinkaan vapaa-aikaansa.
      </p>
      <h3>Kuinka käytän sovellusta?</h3>
      <p className='info-text' >
        Syötä ensin omat tietosi asetukset -osion kautta. Sen jälkeen voit lisätä
        asiakkaan tiedot ja alkaa tallettaa päivittäiset työajat sekä -kulut valitsemallesi asiakkaalle.
      </p>
      <p className='info-text' >
        Pyry on toteutettu Helsingin Yliopiston Fullstack Open -kurssin henkilökohtaisena harjoitustyönä.
        Tekijä Erkka Karjalainen: <a href="mailto:erkka.karjalainen@gmail.com">erkka.karjalainen@gmail.com</a>
      </p>
    </div>
  )
}

export default Info