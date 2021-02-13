import React, { createContext, useContext, useState } from 'react';
import './App.css';
import RenderLogger from './components/render-logger/RenderLogger';


const ctx = createContext({
  lol1: 0,
  rotfl: 123,
  lol2: () => {},
});

type LOL = {
  lol: number
  rotfl: number,
}
class AuthProvider extends React.Component<LOL> {
  state = {
    lol: 0,
    rotfl: 123,
  }

  go = () => {
    this.setState((prev: LOL) => ({lol: prev.lol + 1}));
    console.log('!')
  }

  render() {
    const { children } = this.props;
    const { state, go } = this;
    const { lol, rotfl } = state;
    return (
        <ctx.Provider value={{lol1: lol, rotfl, lol2: go}}>
          {children}
        </ctx.Provider>
    );
  }
}

const Component1 = () => {
  const cons = useContext(ctx);
  return (
    <div>
         <div>
          <span>1234567890</span>
          <br />
          <span>{cons.lol1}</span>
          <br />
          <span>1234567890</span>
          <br />
         <button onClick={() => cons.lol2()}>
           Click
         </button>
        </div>
    </div>
  )
}


const Component12 = () => {
  const cons = useContext(ctx);
  return (
    <div>
         <div>
          <span>1234567890</span>
          <br />
          <span>{cons.rotfl}</span>
          <br />
          <span>1234567890</span>
          <br />
         <button onClick={() => cons.lol2()}>
           Click
         </button>
        </div>
    </div>
  )
}

function App() {
  return (
    <AuthProvider lol={0} rotfl={1234}>
      <div className="App">
        <h1>Title</h1>
        <div>
          <h2>Header</h2>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <Component1 />
        </div>
        <div>
          <Component1 />
        </div>
        <div>
          <Component12 />
        </div>
        <div>
          <Component12 />
        </div>
        <div>
          <Component12 />
        </div>
        <div>
          <Component1 />
        </div>
        <div>
          <RenderLogger text='dummy' />
          <button onClick={() => console.log('click')}>Dummy</button>
        </div>
      </div>  
    </AuthProvider>
  );
}

export default App;
