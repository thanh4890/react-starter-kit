import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducers as apiReducers } from 'redux-api-call'
import counter from './counter'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    ...apiReducers,
    counter,
  })
