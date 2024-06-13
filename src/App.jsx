import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
   <div>
    <h2>{count}</h2>
    <h1 onClick={()=>setCount(prev=>prev+1)}>Yonas is King</h1>
   </div>
  )
}

export default App
