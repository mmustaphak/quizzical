import { useEffect, useRef, useState } from "react"

const Options = ({correct_answer, incorrect_answers,setSum,isShown}) => {

    const [shuffledOptions, setShuffledOptions] = useState([])
    const [isCorrect,setIsCorrect] = useState(false)
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

    const handleTally = (e)=>{
        const {innerText} = e.target
        
        if(innerText === correct_answer){
            setSum(oldSum => isCorrect ? oldSum-1 : oldSum+1 )
            setIsCorrect(oldIsCorrect => !oldIsCorrect)
        }else if(isCorrect && innerText != correct_answer){
            setSum(oldSum => oldSum - 1)
            setIsCorrect(oldIsCorrect => !oldIsCorrect)
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
        if(!isShown){
            handleToggle(e)
            handleTally(e)
        }
    }

    const options = shuffledOptions.map((option, index) => {

        let className = isClicked[`option${index+1}`] ? "clicked" : ""
        if(isShown){
            if(option === correct_answer){
                className = "correct"
            }else if(isClicked[`option${index+1}`] && !isCorrect){
                className = "incorrect"
            }else{
                className = "notClicked"
            }
        }
        
        return(
            <button
                key={option}
                name={`option${index+1}`}
                onClick={(e)=> handleClick(e)}
                className={className} 
            >
                {option.replaceAll("&#039;s","").replaceAll("&oacute;","").replaceAll("&amp;","")}
            </button>
        )
    })
    
    return (
        <>
            <div className="options">
                {options}
            </div>
        </>
    )
}

export default Options