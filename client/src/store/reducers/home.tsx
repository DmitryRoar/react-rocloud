import {IAction} from '../interfaces'

interface IState {
  
}

export interface HomeReducer {
  state: IState
}

const initialState: IState = {

}

export const home = (state = initialState , action: IAction): IState => {
  switch(action.type) {
    default: 
      return state
  }
}