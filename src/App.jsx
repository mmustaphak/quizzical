import { useState, useEffect } from "react"
import Landing from "./components/Landing.jsx"
import Questions from "./components/Questions.jsx"

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [questions,setQuestions] = useState([])


  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(data => data.json())
        .then(questions => setQuestions(questions.results))
        .catch(error => console.log(error))
},[])

  const questionsArr = questions.map(item => {
    return <Questions key={item.question} {...item}/>
  })

  function startGame(){
    setIsStarted(true)
  }
  return (
    <>
      {
        isStarted ? 
        <div className="questions_wrapper">{questionsArr}</div>:
        <Landing startGame={startGame}/>
      }
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
