import { useState } from "react"
import Landing from "./components/Landing.jsx"
import Questions from "./components/Questions.jsx"

function App() {
  const [isStarted, setIsStarted] = useState(false)

  function startGame(){
    setIsStarted(true)
  }
  return (
    <>
      {isStarted ? <Questions/> : <Landing startGame={startGame}/>}
    </>
  )
}

/*
  Next to do

  make next screen

initialise state to called isStarted. use state to conditionally render landing page and next screen */
export default App
