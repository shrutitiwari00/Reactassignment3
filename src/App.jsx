import { useState } from 'react'
import './App.css'
import Submitform from './Submitform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Submitform/>
    </>
  )
}

export default App
