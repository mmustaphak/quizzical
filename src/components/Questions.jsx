import { useEffect, useState } from "react"

const Questions = ()=>{

    const [questions,setQuestions] = useState([])

    const [isClicked, setIsClicked] = useState({
        correct: false,
        incorrect1: false,
        incorrect2: false,
        incorrect3: false
    })

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(data => data.json())
            .then(questions => setQuestions(questions.results))
            .catch(error => console.log(error))
    },[])

    function handleToggle(event){
        const {id} = event.target
        setIsClicked( oldIsClicked => {
           return {...oldIsClicked, [id]: ! oldIsClicked[id]}
        })
    }

    const questionsArr = questions.map(item => {
        return (
            <div key={item.question} className="questions">
                <h2>{item.question}</h2>
                <div className="options">
                <span id="correct" onClick={(event) => handleToggle(event)}>
                    {item.correct_answer}
                </span>
                <span id="incorrect1" onClick={(event) => handleToggle(event)}>
                    {item.incorrect_answers[0]}
                </span>
                <span id="incorrect2" onClick={(event) => handleToggle(event)}>
                    {item.incorrect_answers[1]}
                </span>
                <span id="incorrect3" onClick={(event) => handleToggle(event)}>
                    {item.incorrect_answers[2]}
                </span>
                </div>
            <hr />
        </div>
        )
    })

    return(
        <>
            {questionsArr}
        </>
    )
}

export default Questions