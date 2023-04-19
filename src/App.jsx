import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* change this to my own logo for the currency converter  */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Currency Converter</h1>
      <div>
      <label>
        Amount:
        <input type="number" />
      </label>
      <label>
        From:
        <select>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* add more currencies here */}
        </select>
      </label>
      <label>
        To:
        <select>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="SSP">SSP</option>
          <option value="UGX">UGX</option>
          {/* add more currencies here */}
        </select>
      </label>
      <div>
        Converted Amount:
      </div>
    </div>

    </div>
  )
}

export default App
