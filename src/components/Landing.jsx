const Landing  = (props)=>{
    return(
        <div className="landing">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={props.startGame}>Start game</button>
        </div>
    )
}
export default Landing