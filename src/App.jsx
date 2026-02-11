import './App.css'

function App() {
  return (
    <>
      <Text display="HELLLOW 1"/>
      <Text display="HELLLOW 2"/>
    </>
  )
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
