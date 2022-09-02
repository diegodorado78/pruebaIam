import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Punto1 } from './components/Punto1';
import { Punto2 } from './components/Punto2';
import { Punto3 } from './components/Punto3';
import{
  Container
} from './components/AppStyles'
function App() {

  return (
    <>
      <Container>
        <Punto1 />
        <Punto2 />
        <Punto3 />
      </Container>
    </>
  );
}

export default App
 {
   /* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */
 }