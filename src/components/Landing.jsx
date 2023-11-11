const Landing = ({startGame})=>{
    return(
        <div className="landing">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button
                onClick={()=>startGame(true)}
            >Start game</button>
        </div>
    )
}
export default Landing