import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { middleware as apiMiddleware } from 'redux-api-call'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

const middleware = [
  ...getDefaultMiddleware(),
  routerMiddleware(history),
  apiMiddleware,
  sagaMiddleware,
]

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

sagaMiddleware.run(rootSaga)

export default store
