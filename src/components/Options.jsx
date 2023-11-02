import { useState } from "react"

const Options = ({correct_answer, incorrect_answers}) => {

    const [isClicked, seIsClicked] = useState({
        option1: false,
        options: false,
        option3: false,
        option4: false
    })
    
    return (
        <>
            <button
                name="option1"
                className={isClicked.option1 ? "clicked" : ""} 
            >
                {correct_answer}</button>
            <button
                name="option2"
                className={isClicked.option2 ? "clicked" : ""}
            >
                {incorrect_answers[0]}</button>
            <button
                name="option3"
                className={isClicked.option3 ? "clicked" : ""}
            >
                {incorrect_answers[1]}</button>
            <button
                name="option4"
                className={isClicked.option4 ? "clicked" : ""}
            >
                {incorrect_answers[2]}</button>
        </>
    )
}

export default Options