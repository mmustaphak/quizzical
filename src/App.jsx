import { useState, useEffect } from "react"
import Landing from "./components/Landing.jsx"
import SecondScreen from "./components/SecondScreen.jsx"

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [questions,setQuestions] = useState([])


  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(data => data.json())
        .then(questions => setQuestions(questions.results))
        .catch(error => console.log(error))
},[])

  

  function startGame(){
    setIsStarted(true)
  }

  return (
    <>
      {
        isStarted ? <SecondScreen questions={questions}/>:<Landing startGame={startGame}/>
      }
    </>
  )
}

export default App
