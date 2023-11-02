const Options = ({correct_answer, incorrect_answers}) => {
    console.log(correct_answer)
    return (
        <>
            <button>{correct_answer}</button>
            <button>{incorrect_answers[0]}</button>
            <button>{incorrect_answers[1]}</button>
            <button>{incorrect_answers[2]}</button>
        </>
    )
}

export default Options