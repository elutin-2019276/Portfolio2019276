import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount2] = useState(100)

  function aumentar() {
    setCount2(count + 1)
  }

  function restar() {
    setCount2(count - 1)
  }

  function aumentarOcho() {
    setCount2(count + 8)
  }

  function restarOcho() {
    setCount2(count - 8)
  }

  return (
    <>
      <div>
        <a href="https://vitejss.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={aumentar}>Aumentar + 1</button>
        <button onClick={aumentarOcho}>Aumentar + 8</button>
        
        <p>
          Contador: {count}
        </p>
        <button onClick={restarOcho}>Restar - 8</button>
        <button onClick={restar}>Restar + 1</button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App