import { takeLeading, put } from 'redux-saga/effects'

export function* setupDashboard({ payload }) {
  console.log('Setup Dashboard', payload)
  yield put({ type: 'dashboard/setupDone', payload: { data: 'Setup Done' } })
}

export default function* () {
  yield takeLeading('dashboard/setup', setupDashboard)
}
