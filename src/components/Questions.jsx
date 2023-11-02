import Options from "./Options";

const Questions = ({questions})=>{
    const renderedQuestions = questions.map(question => {
        return (
            <div key={question.question}>
            <h2>{question.question}</h2>
            <div className="options">
                <Options/>
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