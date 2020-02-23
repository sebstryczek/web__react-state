import React, {createContext, useContext, useReducer} from 'react';
import { State } from './config';

export interface Action {
  type: string;
  payload: any;
}

// https://stackoverflow.com/questions/54577865/react-createcontext-issue-in-typescript
type StateContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
}
export const StateContext = createContext({} as StateContextProps);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>,
  initialState: State,
}
export const StateProvider: React.FC<StateProviderProps> = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch
  };
  
  return (
    // https://gist.github.com/astoilkov/013c513e33fe95fa8846348038d8fe42
    // <StateContext.Provider value={dispatchMiddleware(state, dispatch)??}>
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

// const useState = function useStoreState<Result>(mapState: (state: State) => Result): Result {
//   return mapState(state);
// }
