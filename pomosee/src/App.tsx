import { useState } from 'react'
import './App.css'
import '../public/animation.css'
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
          <button  id = "pomo" className="ani " onClick={activateLasers}>start</button>
          <button  id = "short" className="ani show" onClick={activateLasers}>stop</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
