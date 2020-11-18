import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import clientReducer from './reducers/clientReducer'
import workReducer from './reducers/workReducer'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  user: userReducer,
  clients: clientReducer,
  work: workReducer,
  notifications: notificationReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store