import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../reducers/loginReducer'

const Menu = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logoutUser())
  }

  return (
    <Navbar collapseOnSelect expand='lg'>
      <Nav.Link to='/' href='#' as={Link}>
          <h1>PYRY</h1>
        </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='mr-auto'>
          <p>Olet kirjautuneena käyttäjätunnuksella {user.username}</p>
          <Nav.Link to='/hours' href='#' as={Link}>
            Työaika ja kulut
          </Nav.Link>
          <Nav.Link to='/clients' href='#' as={Link}>
            Asiakkaat
          </Nav.Link>
          <Nav.Link to='/invoices' href='#' as={Link}>
            Laskut
          </Nav.Link>
          <Nav.Link onClick={handleLogout} href='#'>
            Kirjaudu ulos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu