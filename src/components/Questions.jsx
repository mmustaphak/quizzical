const Questions = ({questions})=>{
    const renderedQuestions = questions.map(question => {
        return (
            <div key={question.question}>
            <h2>{question.question}</h2>
            <div className="options">
                <button>{question.correct_answer}</button>
                <button>{question.incorrect_answers[0]}</button>
                <button>{question.incorrect_answers[1]}</button>
                <button>{question.incorrect_answers[2]}</button>
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