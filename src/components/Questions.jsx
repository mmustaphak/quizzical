import { useEffect, useState } from "react"

const Questions = ()=>{

    const [questions,setQuestions] = useState([])

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(data => data.json())
            .then(questions => setQuestions(questions.results))
            .catch(error => console.log(error))
    },[])


    const questionsArr = questions.map(item => {
        return (
            <div key={item.question} className="questions">
                <h2>{item.question}</h2>
                <div className="options">
                <span>{item.correct_answer}</span>
                <span>{item.incorrect_answers[0]}</span>
                <span>{item.incorrect_answers[1]}</span>
                <span>{item.incorrect_answers[2]}</span>
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