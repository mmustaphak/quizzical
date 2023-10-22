import { useState } from "react"

const Questions = ({question,correct_answer,incorrect_answers})=>{


    const [isClicked, setIsClicked] = useState({
        correct: false,
        incorrect1: false,
        incorrect2: false,
        incorrect3: false
    })

    const handleShuffle = ()=>{
        const arr = []
        const randomNum = Math.floor(Math.random()*3)
        for(let i=0;i<incorrect_answers.length; i++){
            if(randomNum === i){
                arr.push(correct_answer)
                arr.push(incorrect_answers[i])
            }else{
                arr.push(incorrect_answers[i])
            }
        }
        console.log(arr)
    }

    handleShuffle()

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