import { useEffect, useState } from "react"

const Questions = ({question, correct_answer, incorrect_answers})=>{

    const [options,setOptions] = useState([])
    const [isClicked,setIsClicked] = useState({})

    useEffect(()=>{
        if(options.length === 0){
            setOptions(handleShuffle([correct_answer,...incorrect_answers]))
        }
    },[])

    const handleToggle = (option)=>{
        setIsClicked(oldISClicked => {
            const flip = {...!isClicked} 
            return {...flip,[option] : !oldISClicked[option]}
        })
    }

    const handleShuffle = (arr)=>{
        return arr.sort(()=>Math.random() - 0.5)
    }

    console.log(isClicked)

    const displayedOptions = options.map((option, index) => {
        return (
            <spa
                key={option}
                onClick={()=>handleToggle(`option${index+1}`)}
                className={isClicked[`option${index+1}`] ? "clicked" : ""}
            >
                {option}
            </spa>
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