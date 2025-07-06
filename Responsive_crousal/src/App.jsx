import { useState } from 'react'
import Crousal from './Crousal'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Crousal />
    </>
  )
}

export default App
