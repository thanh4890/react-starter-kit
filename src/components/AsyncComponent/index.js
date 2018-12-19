import React, { Suspense } from 'react'

export default function asyncComponent(importComponent) {
  const C = React.lazy(importComponent)

  // use lazy loading https://reactjs.org/blog/2018/10/23/react-v-16-6.html
  const AsyncComponent = props => (
    <Suspense fallback={<div>Loading...</div>}>
      <C {...props} />
    </Suspense>
  )

  return AsyncComponent
}
