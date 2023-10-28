import { useState } from "react"
import Questions from "./Questions.jsx"

const SecondScreen = ({questions})=>{

    const [sum,setSum] = useState(0)
    const [isShown,setIsShown] = useState(false)

    function revealScore(){
        setIsShown(true)
    }

    const questionsArr = questions.map(item => {
        return <Questions 
                    key={item.question} 
                    setSum={setSum}
                    item={item}
                />
    })

    
    return(
        <div className="wrapper">
            {questionsArr}
            {isShown && <span>You scored {sum}/5 Answers</span>}
            <button className="submit" 
            onClick={()=>revealScore()}>Check Answers</button>
        </div>
    )
}

export default SecondScreen