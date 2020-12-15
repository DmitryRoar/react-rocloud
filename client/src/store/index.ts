import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'

import {home} from './reducers/home'
import {auth} from './reducers/auth'

const rootReducer = combineReducers({
  home,
  auth
})

export default createStore(rootReducer, applyMiddleware(thunk))