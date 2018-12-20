import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'

/**
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 * but don't use extends for now because it causes re-render <Component/> when redux state changes
 */
const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <React.Fragment>
        <Header />
        <Component {...matchProps} />
      </React.Fragment>
    )}
  />
)

export default DefaultLayout
