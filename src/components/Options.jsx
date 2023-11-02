import { useState } from "react"

const Options = ({correct_answer, incorrect_answers}) => {

    const [isClicked, setIsClicked] = useState({
        option1: false,
        options: false,
        option3: false,
        option4: false
    })

    const handdleToggle = (e)=>{
        const {name} = e.target
        setIsClicked(oldIsClicked => {
            const reset = {option1: false, option2: false, option3: false, option4: false}
            return {...reset,[name]: !oldIsClicked[name]}
        })
    }
    
    return (
        <>
            <button
                name="option1"
                onClick={(e)=>handdleToggle(e)}
                className={isClicked.option1 ? "clicked" : ""} 
            >
                {correct_answer}</button>
            <button
                name="option2"
                onClick={(e)=>handdleToggle(e)}
                className={isClicked.option2 ? "clicked" : ""}
            >
                {incorrect_answers[0]}</button>
            <button
                name="option3"
                onClick={(e)=>handdleToggle(e)}
                className={isClicked.option3 ? "clicked" : ""}
            >
                {incorrect_answers[1]}</button>
            <button
                name="option4"
                onClick={(e)=>handdleToggle(e)}
                className={isClicked.option4 ? "clicked" : ""}
            >
                {incorrect_answers[2]}</button>
        </>
    )
}

export default Options