import { useState } from "react"

const Questions = ({question,correct_answer,incorrect_answers})=>{


    const [isClicked, setIsClicked] = useState({
        correct: false,
        incorrect1: false,
        incorrect2: false,
        incorrect3: false
    })

    const handleShuffle = ()=>{
        let arr = [...incorrect_answers]
        arr = arr.map((choice,index) => {
            return (
                <span 
                    key={choice}
                    id={`incorrect${index+1}`}
                    style={isClicked.incorrect1 ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                    {choice}
                </span>
            )
        })
        arr.push(
                <span 
                    id="correct"
                    style={isClicked.correct ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                    {correct_answer}
                </span>
        )
        const shuffle = arr.sort(()=>Math.random()-0.5)
        console.log(shuffle)
    }


    function handleToggle(event){
        const {id} = event.target
        setIsClicked( oldIsClicked => {
            return {...!oldIsClicked, [id]: ! oldIsClicked[id]}
        })
    }

    return(
        <div key={question} className="questions">
            <h2>{question}</h2>
            <div className="options">
                <span 
                    id="correct"
                    style={isClicked.correct ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                    {correct_answer}
                </span>

                <span 
                    id="incorrect1"
                    style={isClicked.incorrect1 ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                    {incorrect_answers[0]}
                </span>

                <span 
                    id="incorrect2"
                    style={isClicked.incorrect2 ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                    {incorrect_answers[1]}
                </span>

                <span
                    id="incorrect3"
                    style={isClicked.incorrect3 ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                        {incorrect_answers[2]}
                </span>
            </div>
            <hr />
        </div>
    )
}

export default Questions