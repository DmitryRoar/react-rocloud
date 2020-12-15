import { AUTH_DARKTHEME_TOGGLE } from '../types'

import { Theme } from '../../../../types'
import {IAction} from '../interfaces'

interface IState {
  theme: Theme
}

export interface AuthReducer {
  auth: IState
}

const initialState: IState = {
  theme: ''
}

export const auth = (state = initialState , action: IAction): IState => {
  switch(action.type) {
    case AUTH_DARKTHEME_TOGGLE:
      return {...state, theme: action.payload}
    default: 
      return state
  }
}