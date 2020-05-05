import DefaultLayout from './layouts/DefaultLayout'
import asyncComponent from './components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('./containers/home'))
const AsyncAbout = asyncComponent(() => import('./containers/about'))
const AsyncShows = asyncComponent(() => import('./containers/shows'))

export default [
  {
    layout: DefaultLayout,
    routes: [
      {
        path: '/',
        component: AsyncHome,
        exact: true,
      },
      {
        path: '/about',
        component: AsyncAbout,
        exact: true,
      },
      {
        path: '/shows',
        component: AsyncShows,
        exact: true,
      },
    ],
  },
]
