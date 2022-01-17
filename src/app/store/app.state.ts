import { createAction, createReducer, on } from "@ngrx/store"

export interface IAppState {
  counter: number
}

export const appInitialState: IAppState = {
  counter: 0
}

export const Increment = createAction('[App] Aumenta contador');
export const Decrement = createAction('[App] Diminui contador');

export const appReducer = createReducer(
  appInitialState,
  on(Increment, (state: IAppState) => {
    state = { ...state, counter: state.counter + 1 }
    return state;
  }),
  on(Decrement, (state: IAppState) => {
    state = { ...state, counter: state.counter - 1 }
    return state;
  })
)
