import { createReducer } from '@reduxjs/toolkit'
import cloneDeep from 'lodash/cloneDeep'

const initialState = {
  walletsById: {
    '1': {
      balance: 200
    },
    '2': {
      balance: 300
    },
    '3': {
      balance: 400
    }
  }
}

const rootReducer = createReducer(initialState, {
  ['ADD_MONEY']: (state, action) => {
    const { id } = action.payload
    const newState = cloneDeep(state)
    newState.walletsById[id].balance += 100

    return newState
  }
})

export default rootReducer
