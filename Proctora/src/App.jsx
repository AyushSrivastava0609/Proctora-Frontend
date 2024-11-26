import { useState } from 'react'
import Home from "./componnent/Home/Home.jsx"
import './App.css'
import About from './componnent/About/About.jsx'
import Login from './componnent/Login/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Home/>
    </>
  )
}

export default App
