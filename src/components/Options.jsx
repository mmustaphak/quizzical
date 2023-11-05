import { useEffect, useRef, useState } from "react"

const Options = ({correct_answer, incorrect_answers,setSum}) => {

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

    const selected = useRef(false)
    const handleTally = (e)=>{
        const {innerText,name} = e.target
        if(innerText === correct_answer){
            if(selected.current){
                setSum(oldSum => oldSum - 1)
            }else{
                setSum(oldSum => oldSum + 1)
            }
            selected.current = !selected.current
        }else if(selected.current && innerText != correct_answer){
            setSum(oldSum => oldSum - 1)
            selected.current = !selected.current
        }
    }

    const handleToggle = (e)=>{
        const {name} = e.target
        setIsClicked(oldIsClicked => {
            const reset = {option1: false, option2: false, option3: false, option4: false}
            return {...reset,[name]: !oldIsClicked[name]}
        })
    }

    const handleClick = (e)=>{
        handleToggle(e)
        handleTally(e)
    }

    const options = shuffledOptions.map((option, index) => {
        return(
            <button
                key={option}
                name={`option${index+1}`}
                onClick={(e)=> handleClick(e)}
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