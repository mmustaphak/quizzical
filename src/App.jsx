import Landing from "./components/Landing.jsx"

function App() {
  return (
    <>
      {/* {<Landing/>} */}
      <div className="questions">
        <h2>How does one say goodbye in spanish ?</h2>
        <div className="options">
          <span>Adiós</span>
          <span>Hola</span>
          <span>Au Revoir</span>
          <span>Salir</span>
        </div>
        <hr />
      </div>
    </>
  )
}

/*
  Next to do

  make next screen

initialise state to called isStarted. use state to conditionally render landing page and next screen */
export default App
