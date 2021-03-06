import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

const middleware = [...getDefaultMiddleware(), routerMiddleware(history)]

const store = configureStore({
  reducer: createRootReducer(history),
  middleware,
})

// @see https://redux.js.org/recipes/configuring-your-store#hot-reloading
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(createRootReducer(history))
  })
}

export default store
