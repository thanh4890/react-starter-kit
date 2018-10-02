import React from 'react'
import ReactDOM from 'react-dom'
import App from './index'
import store, { history } from '../../store'
import routes from '../../routes'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App store={store} history={history} routes={routes} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
