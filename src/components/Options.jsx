import { useEffect, useState } from "react"

const Options = ({correct_answer, incorrect_answers}) => {

    const [shuffledOptions, setShuffledOptions] = useState([])
    const [isClicked, setIsClicked] = useState({
        option1: false,
        options: false,
        option3: false,
        option4: false
    })

    useEffect(()=>{
        setShuffledOptions(scramble([...incorrect_answers,correct_answer]))
    },[])

    const scramble = (arr)=>{
        return arr.sort(()=>Math.random() - 0.5)
    }
    const handdleToggle = (e)=>{
        const {name} = e.target
        setIsClicked(oldIsClicked => {
            const reset = {option1: false, option2: false, option3: false, option4: false}
            return {...reset,[name]: !oldIsClicked[name]}
        })
    }

    const options = shuffledOptions.map((option, index) => {
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