import React from 'react'
import { render } from '@testing-library/react'

import App from './index'
import store, { history } from '../../store'
import routes from '../../routes'

test('renders app name', () => {
  const { getByTestId } = render(
    <App store={store} routes={routes} history={history} />
  )
  const app = getByTestId('app')
  expect(app).toBeInTheDocument()
})
