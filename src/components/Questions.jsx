import { useEffect, useRef, useState, } from "react"

const Questions = (props)=>{

    const {correct_answer,incorrect_answers,question} = props.item
    const {setSum} = props


    const [options,setOptions] = useState([])
    const [isClicked,setIsClicked] = useState({})
    const [isCorrect, setIsCorrect] = useState(false)


    useEffect(()=>{
        if(options.length === 0){
            setOptions(handleShuffle([correct_answer,...incorrect_answers]))
        }
    },[])

    const selected = useRef(false)
    useEffect(()=>{
        if(isCorrect){
            if(!selected.current){
                setSum(oldSum => oldSum + 1)
                selected.current = !selected.current
            }
        }else if(!isCorrect && selected.current){
            setSum(oldSum => oldSum - 1 )
            selected.current = !selected.current
        }
    },[isCorrect])

    const checkIsCorrect = (event)=>{
        const {outerText} = event.target 
        outerText === correct_answer ? setIsCorrect(oldIsCorrect => !oldIsCorrect) : null
    }

    const handleToggle = (option)=>{
        setIsClicked(oldISClicked => {
            const flip = {...!isClicked} 
            return {...flip,[option] : !oldISClicked[option]}
        })
    }

    const handleShuffle = (arr)=>{
        return arr.sort(()=>Math.random() - 0.5)
    }


    const displayedOptions = options.map((option, index) => {
        return (
            <span
                key={option}
                onClick={(event)=>{handleToggle(`option${index+1}`); checkIsCorrect(event)}}
                className={isClicked[`option${index+1}`] ? "clicked" : ""}
            >
                {option}
            </span>
        )
    })

    return(
        <div className="questions">
            <h2>{question}</h2>
            <div className="options">
                {displayedOptions}
            </div>
            <hr />
        </div>
    )
}

export default Questions