import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maincontext from './componenet/Maincontext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Maincontext/>
    </>
  )
}

export default App
