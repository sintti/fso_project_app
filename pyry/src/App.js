import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initializeClients } from './reducers/clientReducer'

import Notification from './components/Notification'
import Work from './components/Work'
import Invoices from './components/Invoices'
import Login from './components/Login'
import Clients from './components/Clients'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import Footer from './components/Footer'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeClients())
  }, [dispatch])
  
  return (
    <Router>
      <Menu />
      <Notification />
      <Switch>
        <Route path='/hours'>
          <Work />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
        <Route path='/invoices'>
          <Invoices />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App