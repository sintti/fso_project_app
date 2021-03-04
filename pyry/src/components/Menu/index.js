import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../reducers/loginReducer'
import FeatherIcon from 'feather-icons-react'

const Menu = () => {
  const dispatch = useDispatch()
  
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logoutUser())
  }

  return (
    <Navbar collapseOnSelect expand='md'>
      <Nav.Link to='/' href='#' as={Link}>
          <h1>Pyry</h1>
        </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='mr-auto'>
          <NavDropdown title='Työaika' id='basic-nav-dropdown'>
            <Nav.Link className='menu-text' to='/hours' href='#' as={Link}>
              Työaika ja kulut
            </Nav.Link>
          </NavDropdown>
          <NavDropdown title='Asiakkaat' id='basic-nav-dropdown'>
            <Nav.Link className='menu-text' to='/clients' href='#' as={Link}>
              Asiakkaat
            </Nav.Link>
          </NavDropdown>
          <NavDropdown title='Laskut' id='basic-nav-dropdown'>
            <Nav.Link className='menu-text' to='/invoices' href='#' as={Link}>
              Laskut
            </Nav.Link>
          </NavDropdown>
          <NavDropdown title='Asetukset' id='basic-nav-dropdown'>
            <Nav.Link to='/settings' href='#' as={Link}>
              Käyttäjätiedot
            </Nav.Link>
          </NavDropdown>
        </Nav>
        <Nav.Link onClick={handleLogout} href='#'>
            <FeatherIcon icon='log-out' />  
          </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu