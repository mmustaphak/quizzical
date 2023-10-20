import { useEffect, useState } from "react"

const Questions = ()=>{

    const [questions,setQuestions] = useState([])

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5")
            .then(data => data.json())
            .then(questions => setQuestions(questions.results))
            .catch(erro => console.log(erro))
    },[])


    return(
        <div className="questions">
            <h2>How does one say goodbye in spanish ?</h2>
            <div className="options">
            <span>Adiós</span>
            <span>Hola</span>
            <span>Au Revoir</span>
            <span>Salir</span>
            </div>
            <hr />
        </div>
    )
}

export default Questions