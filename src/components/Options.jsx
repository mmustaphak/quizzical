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

    const options = [...incorrect_answers,correct_answer].map((option, index) => {
        return(
            <button
                key={option}
                name={`option${index+1}`}
                onClick={(e)=>handdleToggle(e)}
                className={isClicked[`option${index+1}`] ? "clicked" : ""} 
            >
                {option}
            </button>
        )
    })
    
    return (
        <>
            {options}
        </>
    )
}

export default Options