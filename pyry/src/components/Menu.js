import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
  
  return (
    <div>
    <Link to='/'><h1>PYRY</h1></Link>
    <ul>
      <Link to='/hours'><li>Työaika ja kulut</li></Link>
      <Link to='/clients'><li>Asiakkaat</li></Link>
      <Link to='/invoices'><li>Laskut</li></Link>
      <Link to='/login'><li>Kirjautuminen</li></Link>
    </ul>
  </div>
  )
}

export default Menu