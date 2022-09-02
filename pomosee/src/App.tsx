import { useState } from 'react'
import './App.css'
import { activateLasers, stop } from './timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>PomoSee</h1>
        <div>
          <a>Pomo </a>
          <a>Break</a>
        </div> 
      </header>
      
      <div className="card"><div id = "timer">25:00</div></div>

      <footer>
        <button  id = "pomo" onClick={activateLasers}>START</button>
        <button  id = "short" className = "show" onClick={activateLasers}>stop</button>
      </footer>
      
    </div>
  )
}

export default App
