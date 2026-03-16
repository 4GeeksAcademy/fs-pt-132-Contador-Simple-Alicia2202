import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let timer = 0
let intervalId = null


const root = ReactDOM.createRoot(document.getElementById('root'))

const stop = () => {
  clearInterval(intervalId)
  intervalId = null
};

const resume = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      timer == 1000000 ? timer = 0 : timer ++
      root.render(
        <React.StrictMode>
          <Home
            seconds={timer}
            stop={stop}
            resume={resume}
            reset={reset}
          />
        </React.StrictMode>
      )
    }, 1000)
  }
}

const reset = () => {
  clearInterval(intervalId)
  intervalId = null
  timer = 0

  root.render(
    <React.StrictMode>
      <Home
        seconds={timer}
        stop={stop}
        resume={resume}
        reset={reset}
      />
    </React.StrictMode>
  )

  resume()
}

resume()


