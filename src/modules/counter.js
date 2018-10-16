// Constants
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

// Thunks
export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

// Action handlers
const ACTION_HANDLERS = {
  [INCREMENT_REQUESTED]: (state, action) => {
    return {
      ...state,
      isIncrementing: true
    }
  },
  [INCREMENT]: (state, action) => {
    return {
      ...state,
      count: state.count + 1,
      isIncrementing: !state.isIncrementing
    }
  },
  [DECREMENT_REQUESTED]: (state, action) => {
    return {
      ...state,
      isDecrementing: true
    }
  },
  [DECREMENT]: (state, action) => {
    return {
      ...state,
      count: state.count - 1,
      isDecrementing: !state.isDecrementing
    }
  }
}

// Reducer
const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
