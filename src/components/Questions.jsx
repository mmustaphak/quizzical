import { useEffect, useRef, useState, } from "react"

const Questions = (props)=>{

    const {correct_answer,incorrect_answers,question} = props.item
    const {setSum,isShown} = props


    const [options,setOptions] = useState([])
    const [isClicked,setIsClicked] = useState(
        {
            option1: false,
            option2: false, 
            option3: false,
            option4: false
        }
    )
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
        if(!isShown){
            outerText === correct_answer ? setIsCorrect(oldIsCorrect => !oldIsCorrect) : null
        }
    }

    const handleToggle = (option)=>{
        if(!isShown){
            setIsClicked(oldISClicked => {
                const reset = {
                    option1: false,
                    option2: false, 
                    option3: false,
                    option4: false
                } 
                return {...reset,[option] : !oldISClicked[option]}
            })
        }
    }

    const handleShuffle = (arr)=>{
        return arr.sort(()=>Math.random() - 0.5)
    }

    const handleStyles = (index)=>{
        let styles = ""
        if(isClicked[`option${index}`]){
            styles = "clicked"
            if(isShown){
                styles = isCorrect ? "correct" : "incorrect"
            }
        }else if(isClicked[`option${index}`] === false && isShown){
            styles = "unselected"
        }
        console.log(styles)
        return styles
    }

    console.log(isClicked)

    const displayedOptions = options.map((option, index) => {
        return (
            <span
                key={option}
                onClick={(event)=>{handleToggle(`option${index+1}`); checkIsCorrect(event)}}
                className={handleStyles(index+1)}
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