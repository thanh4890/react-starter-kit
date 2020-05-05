import { put } from 'redux-saga/effects'
import { setupDashboard } from './index'

describe('test setup dashboard', () => {
  const iter = setupDashboard({ payload: 'hello dashboard' })
  it('should put data', () => {
    expect(iter.next().value).toEqual(
      put({ type: 'dashboard/setupDone', payload: { data: 'Setup Done' } })
    )
  })
  it('should finished', () => {
    expect(iter.next().done).toBe(true)
  })
})
