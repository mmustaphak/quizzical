import { useState } from "react"

const Questions = (props)=>{


    const [isClicked, setIsClicked] = useState({
        correct: false,
        incorrect1: false,
        incorrect2: false,
        incorrect3: false
    })

    

    function handleToggle(event){
        const {id} = event.target
        setIsClicked( oldIsClicked => {
           return {...oldIsClicked, [id]: ! oldIsClicked[id]}
        })
    }

    console.log(isClicked.correct)

    return(
        <div key={props.question} className="questions">
            <h2>{props.question}</h2>
            <div className="options">
                <span 
                    id="correct"
                    style={isClicked.correct ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                    {props.correct_answer}
                </span>

                <span 
                    id="incorrect1"
                    style={isClicked.incorrect1 ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                    {props.incorrect_answers[0]}
                </span>

                <span 
                    id="incorrect2"
                    style={isClicked.incorrect2 ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                    {props.incorrect_answers[1]}
                </span>

                <span
                    id="incorrect3"
                    style={isClicked.incorrect3 ? {backgroundColor: "#D6DBF5",border: "none"} : {}}
                    onClick={(event) => handleToggle(event)}
                >
                        {props.incorrect_answers[2]}
                </span>
            </div>
            <hr />
        </div>
    )
}

export default Questions