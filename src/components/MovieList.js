import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies }) => {

  const style = {
    display: 'inline-flex', 
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    margin: '20px',
    marginTop: '30px',
  }

  const renderedMovies = movies.map(({ title, overview, poster_path, vote_average, id}) => {
      return (
        <Movie key={title} title={title} overview={overview} imgPath={poster_path} rating={vote_average} id={id}/>
      )
    })
  
  return (
    <div style={style}>
      {renderedMovies}
    </div>
  )
}

export default MovieList;