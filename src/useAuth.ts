import { useState, createContext, useContext } from "react";
const [b, setB] = useState('');
const a = {
  lol: 1,
};
const se = () => {
  a.lol = 2;
}
const ctx = createContext({a, se});

const useAuth = () => {
  // const [state, setGlobal] = useState({value: 1});
  // const getState = () => global;
  const state = useContext(ctx);
  const actions = {
    action1: () => {
      state.se();
      // setGlobal({value: state.value + 1});
    }
  }
  return {
    state: state.a, actions,
  }
}

export default useAuth;
