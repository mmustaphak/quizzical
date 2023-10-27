import { useState } from "react"
import Questions from "./Questions.jsx"

const SecondScreen = ({questions})=>{

    const [sum,setSum] = useState(0)

    console.log(sum)

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
            <span>You scored {sum}/5 Answers</span>
            <button className="submit">Check Answers</button>
        </div>
    )
}

export default SecondScreen