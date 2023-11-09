import { useState } from "react";
import Options from "./Options";

const Questions = ({questions})=>{

    const [sum,setSum] = useState(0)
    const [isShown,setIsShown] = useState(false)


    const renderedQuestions = questions.map(question => {
        return (
            <div key={question.question}>
            <h2>{question.question}</h2>
                <Options
                    correct_answer={question.correct_answer}
                    incorrect_answers={question.incorrect_answers}
                    setSum={setSum}
                    isShown={isShown}
                />
            
            <hr />
        </div>
        )
    })

    const showScore = ()=>{
        setIsShown(true)
    }

    return (
        <>
            <div className="questions">
                {renderedQuestions}
            </div>
            <div className="bottom">
                {isShown && <strong className="score">You scored {sum}/5 answers</strong>}
                <button className="submit" 
                    onClick={showScore}
                >{isShown ? "Play Again" : "Check answers"}</button>
            </div>
        </>
    );
}
export default Questions