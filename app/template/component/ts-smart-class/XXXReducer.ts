import { DEFAULT_ACTION } from './XXXAction'

export interface XXX {
  loading: boolean
}

const initialState: XXX = {
  loading: false
}

export function XXXReducer(state = initialState, action: any) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return { ...state }
  }
  return state
}
