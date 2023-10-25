import { useState } from "react"
import Questions from "./Questions.jsx"

const secondScreen = ({questions} = questions)=>{

    const [sum,setSum] = useState(0)

    console.log(sum)

    const questionsArr = questions.map(item => {
        return <Questions 
                    key={item.question} 
                    setSum={setSum}
                    {...item}
                />
    })

    return(
        <div className="wrapper">
            {questionsArr}
            <button className="submit">Check Answers</button>
        </div>
    )
}

export default secondScreen