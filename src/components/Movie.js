import React from 'react'
import {Card, Button} from 'react-bootstrap'
const IMG_URL = 'https://image.tmdb.org/t/p/w1280'
const MOVIE_LINK = 'https://www.themoviedb.org/movie'

const Movie = ({title, overview, imgPath, rating, id}) => {
  const style = {
    color: 'white', 
    backgroundColor: '#04293A', 
    width: '18rem', 
    margin: '1rem',
    boxShadow: '0 4px 5px rgba(0, 0, 0, 0.2)'
  };

  return (
    <Card style={style}>
      <Card.Img variant="top" src={`${IMG_URL}${imgPath}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{rating}</Card.Text>
        {/* <Card.Text>
          {overview}
        </Card.Text> */}
        <Button onClick={() => window.open(`${MOVIE_LINK}/${id}`, "_blank")} variant="primary">Open in TheMovieDB</Button>
      </Card.Body>
    </Card>
    // <div>

    //   <img style={{width:'20%'}} src={`${IMG_URL}${imgPath}`} />
    //   <h3>{title}</h3>
    // </div>
  )
  
}

export default Movie;