import React, { useState, useEffect } from 'react';
import Header from './Header'
import Detail from './Detail'
import MovieList from './MovieList'

const App = () => {
  const [movies, setMovies] = useState([])
  const [text, setText] = useState('')

  return (
    <div style={{backgroundColor: '#191A19', height: '100%'}}>
      <Header setMovies={setMovies} setText={setText}/>
      <div>
        <Detail text={text}/>
        <MovieList movies={movies}/>
      </div>
    </div>
  )
}

export default App;