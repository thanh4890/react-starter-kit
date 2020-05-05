import { makeFetchAction } from 'redux-api-call'

export const getShows = makeFetchAction('getShows', (show) => ({
  endpoint: `https://api.tvmaze.com/search/shows?q=${show}`,
}))

export default {
  getShows,
}
