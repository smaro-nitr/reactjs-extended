import { DEFAULT_ACTION } from './XXXAction'

const initialState = {
  loading: false
}

export function XXXReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return { ...state }
  }
  return state
}
