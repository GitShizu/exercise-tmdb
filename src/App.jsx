import { useEffect, useState } from 'react'
import './App.scss'
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => response.json())
      .then(obj => {
        setMovies(obj.results)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <section id='container'>
      <SearchBar
        onSearch={(newValue) => { setValue(newValue) }} // *asks
        inputValue={value}
      />
      <section id='results'>
        {movies.map(m => {
          return (
            <MovieCard
              key={m.id}
              title={m.title}
              releaseYear={m.release_date.substring(0, 4)}
              overview={m.overview}
              poster={m.poster_path}
              popularity={m.popularity}
            />
          )
        }
        )}
      </section>
    </section>
  )
}

export default App

