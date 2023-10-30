import Landing from "./components/Landing.jsx"
import { useState } from "react"
function App() {
  
  const [isStarted,setIsStarted] = useState(false)

  return (
    <>
      {isStarted ? "Test" : <Landing startGame={setIsStarted}/>}
    </>
  )
}

export default App
