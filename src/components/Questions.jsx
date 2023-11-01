const Questions = ()=>{
    return (
        <div className="questions">
            <div>
                <h2>How would one say goodbye in Spanish?</h2>
                <div className="options">
                    <button>Adiós</button>
                    <button>Hola</button>
                    <button>Au Revoir</button>
                    <button>Salir</button>
                </div>
                <hr />
            </div>
            <div>
                <h2>
                    Which best selling toy of 1983 caused hysteria, resulting in riots
                    breaking in stores?
                </h2>
                <div className="options">
                    <button>Cabbage Patch Kids</button>
                    <button>Transformers</button>
                    <button>Care Bears</button>
                    <button>Rubik’s Cube</button>
                </div>
                <hr />
            </div>
            <div>
                <h2>What is the hottest planet in our Solar System?</h2>
                <div className="options">
                    <button>Mercury</button>
                    <button>Venus</button>
                    <button>Mars</button>
                    <button>Saturn</button>
                </div>
                <hr />
            </div>
            <div>
                <h2>In which country was the caesar salad invented?</h2>
                <div className="options">
                    <button>Italy</button>
                    <button>Portugal</button>
                    <button>Mexico</button>
                    <button>France</button>
                </div>
                <hr />
            </div>
            <div>
                <h2>How Many Hearts Does An Octopus Have?</h2>
                <div className="options">
                    <button>One</button>
                    <button>Two</button>
                    <button>Three</button>
                    <button>Four</button>
                </div>
                <hr />
            </div>
            <button className="submit">Check answers</button>
        </div>
    );
}
export default Questions