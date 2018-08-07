import React from 'react'
import { Route } from 'react-router-dom'

// @see https://simonsmith.io/reusing-layouts-in-react-router-4/
const PageLayout = ({ component: Component, ...rest }) => (
  <Route {...rest} render={matchProps => <Component {...matchProps} />} />
)

export default PageLayout
