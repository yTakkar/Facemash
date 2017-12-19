import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import User from './reducers/user-r'
import Facemash from './reducers/facemash-r'
import TopUsers from './reducers/topUsers-r'

const reducers = combineReducers({
  User,
  Facemash,
  TopUsers,
})

const middlewares = applyMiddleware(promise(), thunk, logger)

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middlewares
)

export default store
