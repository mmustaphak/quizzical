import Landing from "./components/Landing.jsx"
import { useState, useEffect } from "react"
function App() {
  
  const [isStarted,setIsStarted] = useState(false)
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then(data => data.json()).then(result => setQuestions(result.results))
  },[])


  return (
    <>
      {isStarted ? "Test" : <Landing startGame={setIsStarted}/>}
    </>
  )
}

export default App
