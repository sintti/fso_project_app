import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import clientReducer from './reducers/clientReducer'
import workReducer from './reducers/workReducer'
import notificationReducer from './reducers/notificationReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
  user: loginReducer,
  clients: clientReducer,
  work: workReducer,
  notifications: notificationReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store