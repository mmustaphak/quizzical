import Landing from "./components/Landing.jsx"
import Questions from "./components/Questions.jsx"
import { useState, useEffect } from "react"
function App() {
  
  const [isStarted,setIsStarted] = useState(false)
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    if(isStarted){
      fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then(data => data.json()).then(result => setQuestions(result.results))
      .catch(error => console.log(error))
    }
  },[isStarted])


  return(
    <>
      {
        isStarted ? <Questions questions={questions} setIsStared={setIsStarted}/> : <Landing startGame={setIsStarted}/>
      }
    </>
  )
}

export default App
