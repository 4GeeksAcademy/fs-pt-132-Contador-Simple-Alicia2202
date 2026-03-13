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

const root =ReactDOM.createRoot(document.getElementById('root'))

setInterval(() => {
  timer ++
  timer == 1000000 ? timer = 0 : timer ++
  root.render(
    <React.StrictMode>
    <Home seconds={timer}/>
  </React.StrictMode>,
)
},1000)
