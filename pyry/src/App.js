import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { initializeClients } from './reducers/clientReducer'
import clientService from './services/clients'
import workService from './services/work'

import Notification from './components/Notification'
import Work from './components/Work'
import Invoices from './components/Invoices'
import Login from './components/Login'
import Clients from './components/Clients'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { setUserFromLocalStorage } from './reducers/userReducer'


const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
  useEffect(() => {
    dispatch(initializeClients())
  }, [dispatch])
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPyryUser')
    if (loggedUserJSON) {
      const userToSave = JSON.parse(loggedUserJSON)
      dispatch(setUserFromLocalStorage(userToSave))
      clientService.setToken(userToSave.token)
      workService.setToken(userToSave.token)
    }
  }, [dispatch])
  
  if (!user) {
    return (
      <Router>
        <Notification />
        <Login />
      </Router>
    )
  }
  
  return (
   <div className='container'>
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
   </div>
  )
}

export default App