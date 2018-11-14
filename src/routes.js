import DefaultLayout from './layouts/DefaultLayout'
import asyncComponent from './components/LazyComponent'

const AsyncHome = asyncComponent(() => import('./containers/home'))
const AsyncAbout = asyncComponent(() => import('./containers/about'))

export default [
  {
    layout: DefaultLayout,
    routes: [
      {
        path: '/',
        component: AsyncHome,
        exact: true
      },
      {
        path: '/about',
        component: AsyncAbout,
        exact: true
      }
    ]
  }
]
