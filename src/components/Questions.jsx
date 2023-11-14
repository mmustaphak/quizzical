import { useState } from "react";
import Options from "./Options";
import Confetti from "react-confetti";

const Questions = ({questions,setIsStared})=>{

    const [sum,setSum] = useState(0)
    const [isShown,setIsShown] = useState(false)


    const renderedQuestions = questions.map(question => {
        return (
            <div key={question.question}>
                <h2>{question.question.replaceAll("quot;", '').replaceAll("#039;","").replaceAll("&",'"')}</h2>
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

    const playAgain = ()=>{
        setIsStared(false)
    }

    return (
        <>
            {
                questions.length === 0 ? <h1>Loading...</h1> :
                <>
                    {sum===5 && isShown && <Confetti/>}
                    <div className="questions">
                        {renderedQuestions}
                    </div>
                    
                    <div className="bottom">
                        {isShown && <strong className="score">You scored {sum}/5 answers</strong>}
                        <button className="submit" 
                            onClick={()=> isShown ? playAgain() : showScore()}
                        >{isShown ? "Play Again" : "Check answers"}</button>
                    </div>
                </>
            }
        </>
    );
}
export default Questions