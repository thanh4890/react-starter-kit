import React from 'react'
import { useEffectOnce } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'
import { getShows } from '../../modules/api'

const Shows = () => {
  const dispatch = useDispatch()
  const shows = useSelector(getShows.dataSelector)

  useEffectOnce(() => {
    dispatch(getShows.actionCreator('batman'))
  })

  return (
    <ul>
      {shows &&
        shows.map((show) => <li key={show.show.id}>{show.show.name}</li>)}
    </ul>
  )
}

export default Shows
