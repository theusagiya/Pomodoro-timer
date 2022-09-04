import { useState } from 'react'
import './App.css'
import { activateLasers } from './timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Container div */}
      <div id="container">
        <header>
          <h1>PomoSee</h1> 
        </header>
        
        {/* main div */}
        <div id="countdown">

          <div className='viewer'>
            <a>Pomo </a>
            <a>Break</a>
          </div>

          <div className="countdown-timer">25:00</div>
        </div>
        
        {/* botton section */}
        <div id="container-button">
          <button  id = "pomo" onClick={activateLasers}>START</button>
          <button  id = "short" className = "show" onClick={activateLasers}>stop</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
