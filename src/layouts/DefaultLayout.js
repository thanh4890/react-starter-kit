import React from 'react'
import PageLayout from './PageLayout'
import Header from '../components/Header'

/**
 * @extends PageLayout
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 */
const DefaultLayout = ({ component: Component, ...rest }) => (
  <PageLayout
    {...rest}
    component={matchProps => (
      <React.Fragment>
        <Header />
        <Component {...matchProps} />
      </React.Fragment>
    )}
  />
)

export default DefaultLayout
