import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import clientReducer from './reducers/clientReducer'
import workReducer from './reducers/workReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  clients: clientReducer,
  work: workReducer,
  notifications: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store