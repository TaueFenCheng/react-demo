import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAtom } from 'jotai'
import { state1, state2, ProviderComp } from './state/state'
import Demo from './demo'


function App() {
  const [stateAt, setStateAt] = useAtom(state1)
  const [stateAt1, setStateAt2] = useAtom(state2)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setStateAt(prevstate => prevstate + 1)}>{stateAt}</button>
        <button onClick={() => setStateAt2(prevstate => prevstate - 1)}>{stateAt1}</button>
        <Suspense fallback={<>loading error</>}>
          {ProviderComp(Demo)}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
