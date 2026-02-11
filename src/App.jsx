import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  return (
    <>
      <MovieCard movie={{title: "Harry Potter", release_date: "2016"}}/>
      <MovieCard movie={{title: "Harry Potter 2", release_date: "2017"}}/>
    </>
  )
}

export default App
