import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
  
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Nav.Link href='#'>
          <Link to='/'><h1>PYRY</h1></Link>
        </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='mr-auto'>
          <Nav.Link href='#' as='span'>
            <Link to='/hours'>Työaika ja kulut</Link>
          </Nav.Link>
          <Nav.Link href='#' as='span'>
            <Link to='/clients'>Asiakkaat</Link>
          </Nav.Link>
          <Nav.Link href='#' as='span'>
            <Link to='/invoices'>Laskut</Link>
          </Nav.Link>
          <Nav.Link href='#' as='span'>
            <Link to='/login'>Kirjautuminen</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu