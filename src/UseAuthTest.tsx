import React from 'react';
import useAuth from './useAuth';
import RenderLogger from './components/render-logger/RenderLogger';

const Component1 = () => {
  const { state, actions } = useAuth();
  return (
    <div style={{background: 'red'}}>
      component 1
      <p>
        {
          state.lol
        }
      </p>
      <button onClick={actions.action1}>Button 1</button>
    </div>
  );
}

const Component2 = () => {
  const { state, actions } = useAuth();
  return (
    <div style={{background: 'blue'}}>
      component 2
      <p>
        {
          state.lol
        }
      </p>
      <button onClick={actions.action1}>Button 2</button>
    </div>
  );
}

function App() {
  return (
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
        <Component2 />
      </div>
      <div>
        <RenderLogger text='dummy' />
        <button onClick={() => console.log('click')}>Dummy</button>
      </div>
    </div>
  );
}

export default App;
