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
  1.get questions from api
  2. style options when selected
  4. Add button to check answers
  3. add dynamic styling for when answers are checked
  4. randomly organise the options to render in random order
*/
export default App
