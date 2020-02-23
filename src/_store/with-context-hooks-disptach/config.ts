import { Action } from '.';
import { _exampleReducer, _ExampleState, _exampleInitialState } from './_example';
import { AuthState, authState } from '../auth';
import {} from './state';

export type State = {
  _example: _ExampleState,
  auth: AuthState,
}

export const initialState: State = {
  _example: _exampleInitialState,
  auth: authState,
};

export const rootReducer = (state: State = initialState, action: Action) => {
  // middleware goes here, i.e calling analytics service, etc.
  // const a = dispatchMiddleware(action)
  return {
    _example: _exampleReducer(state._example, action),
    auth: state.auth,
  };
};
