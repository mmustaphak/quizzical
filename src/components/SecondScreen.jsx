import Questions from "./Questions.jsx"

const secondScreen = ({questions} = questions)=>{
    console.log(typeof(questions))
    const questionsArr = questions.map(item => {
        return <Questions key={item.question} {...item}/>
    })

    return(
        <div className="wrapper">
            {questionsArr}
            <button className="submit">Check Answers</button>
        </div>
    )
}

export default secondScreen