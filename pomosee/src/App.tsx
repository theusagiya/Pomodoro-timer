import { useState } from 'react'
import './App.css'
import { activateLasers } from './timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        
      </div>
      <h1>PomoSee</h1>
      <div className="card">
        <button onClick={activateLasers}>
          Ativar lasers
        </button>
       
      </div>
      
    </div>
  )
}

export default App
