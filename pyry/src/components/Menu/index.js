import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './menu.css'

import { logoutUser } from '../../reducers/loginReducer'
import { Clock, DollarSign, Users, Tool, LogOut } from 'react-feather'

const Menu = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log({ user })
  
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logoutUser())
  }

  return (
    <div className='menu' >
      <Navbar collapseOnSelect expand='md' >
      <Nav.Link to='/' href='#' as={Link}>
          <h1>Pyry</h1>
        </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='mr-auto'>
          <Nav.Link className='menu-text' to='/hours' href='#' as={Link}>
            <span><Clock /> Työaika</span>
          </Nav.Link>
          <Nav.Link className='menu-text' to='/clients' href='#' as={Link}>
            <span><Users /> Asiakkaat</span>
          </Nav.Link>
          <Nav.Link className='menu-text' to='/invoices' href='#' as={Link}>
            <span><DollarSign /> Laskut</span>
          </Nav.Link>
          <Nav.Link to='/settings' href='#' as={Link}>
            <span><Tool /> Asetukset</span>
          </Nav.Link>
          <Nav.Link onClick={handleLogout} href='#'>
            <span><LogOut /> Kirjaudu ulos </span>
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

export default Menu