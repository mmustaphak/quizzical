import { useState } from "react";
import Options from "./Options";

const Questions = ({questions})=>{

    const [sum,setSum] = useState(0)

    console.log(sum)

    const renderedQuestions = questions.map(question => {
        return (
            <div key={question.question}>
            <h2>{question.question}</h2>
            <div className="options">
                <Options
                    correct_answer={question.correct_answer}
                    incorrect_answers={question.incorrect_answers}
                    setSum={setSum}
                />
            </div>
            <hr />
        </div>
        )
    })
    return (
        <>
            <div className="questions">
                {renderedQuestions}
            </div>
            <div className="bottom">
                <strong className="score">You scored {sum}/3 answers</strong>
                <button className="submit">Check answers</button>
            </div>
        </>
    );
}
export default Questions