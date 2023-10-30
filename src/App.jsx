import Landing from "./components/Landing.jsx"
import { useState, useEffect } from "react"
function App() {
  
  const [isStarted,setIsStarted] = useState(false)
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then(data => data.json()).then(result => setQuestions(result.results))
  },[])


  return(
    <>
    <div className="question">
      <div>
        <h2>How would one say goodbye in Spanish?</h2>
        <button>Adiós</button>
          <button>Hola</button>
        <button>Au Revoir</button>
        <button>Salir</button>
        <hr />
      </div>
        <div>
          <h2>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</h2>
          <button>Cabbage Patch Kids</button>
          <button>Transformers</button>
          <button>Care Bears</button>
          <button>Rubik’s Cube</button>
          <hr />
        </div>
        <div>
          <h2>What is the hottest planet in our Solar System?</h2>
          <button>Mercury</button>
          <button>Venus</button
          ><button>Mars</button>
          <button>Saturn</button>
          <hr />
        </div>
        <div>
          <h2>In which country was the caesar salad invented?</h2>
          <button>Italy</button>
          <button>Portugal</button>
          <button>Mexico</button>
          <button>France</button>
          <hr />
        </div>
        <div>
          <h2>How Many Hearts Does An Octopus Have?</h2>
          <button>One</button>
          <button>Two</button>
          <button>Three</button>
          <button>Four</button>
          <hr />
        </div>
    </div>
      {/* {isStarted ? "Test" : <Landing startGame={setIsStarted}/>} */}
    </>
  )
}

export default App
