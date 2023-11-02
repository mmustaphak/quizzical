import Options from "./Options";

const Questions = ({questions})=>{
    const renderedQuestions = questions.map(question => {
        return (
            <div key={question.question}>
            <h2>{question.question}</h2>
            <div className="options">
                <Options
                    correct_answer={question.correct_answer}
                    incorrect_answers={question.incorrect_answers}
                />
            </div>
            <hr />
        </div>
        )
    })
    return (
        <div className="questions">
            {renderedQuestions}
        </div>
    );
}
export default Questions