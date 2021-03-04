import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { initializeClients } from './reducers/clientReducer'
import { setUserFromLocalStorage } from './reducers/loginReducer'
import { setError } from './reducers/errorReducer'
import clientService from './services/clients'
import workService from './services/work'

import Error from './components/Error'
import Notification from './components/Notification'
import Work from './components/Work'
import Invoices from './components/Invoices'
import Login from './components/Login'
import Clients from './components/Clients'
import Info from './components/Info'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Settings from './components/Settings'
import Loading from './components/Loading'


const App = () => {
  const dispatch = useDispatch()
  const { user, loading } = useSelector(state => state.user)
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const loggedUserJSON = window.localStorage.getItem('loggedPyryUser')
        if (loggedUserJSON) {
          const userToSave = JSON.parse(loggedUserJSON)
          dispatch(setUserFromLocalStorage(userToSave.id))
          clientService.setToken(userToSave.token)
          workService.setToken(userToSave.token)
        }
      } catch (error) {
        dispatch(setError(`Kirjautuminen epäonnistui.`))
        console.error(error.message);
      }
    }
    fetchUserData()
  }, [dispatch])
  
  useEffect(() => {
    const fetchClients = () => {
      if (user) {
        try {
          dispatch(initializeClients())
        } catch (error) {
          setError(`Asiakkaiden nouto epäonnistui.`)
          console.error(error.message);
        }
      }
    }
    fetchClients()
  }, [user, dispatch])
  
  if (loading) {
    return (
      <Loading />
    )
  }
  
  if (!user && loading) {
    return (
      <div className='container'>
        <Router>
          <Notification />
          <Error />
          <Switch>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/'>
            <Login />
            </Route>
          </Switch>       
        </Router>
      </div>
    )
  }
  
  if (user && !loading) {
    return (
      <div className='container'>
         <Router>
         <Menu />
         <Notification />
         <Error />
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
           <Route path='/settings'>
             <Settings />
           </Route>
           <Route path='/'>
             <Info />
           </Route>
         </Switch>
         <Footer />
       </Router>
      </div>
     )
  }
}

export default App