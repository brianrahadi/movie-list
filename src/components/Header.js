import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { POPULAR, SEARCH, TOP_RATED, UPCOMING} from "../apis/TMDB";
import GENRES from './genres'
import './Header.css'

const Header = ({ setMovies, setText }) => {
  const [term, setTerm] = useState("");
  const GENRE_TYPE = GENRES.GENRES

  useEffect(() => {
    findMovies(POPULAR);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    search(term);
    setText("Showing movies: " + term)
    setTerm("");
  };

  const search = async (term) => {
    const response = await SEARCH.get('', {
      params: {
        query: term,
      }
    });
    setMovies([]);
    setMovies(response.data.results);
  };


  const findMovies = async (func, text) => {
    const response = await func.get();
    setMovies([]);
    setText(text)
    setMovies(response.data.results);
  };

  const findByGenre = async genre => {
    const genreId = GENRE_TYPE[genre]
    const response = await TOP_RATED.get('', {
      params: {
        with_genres: genreId,
      }
    });
    setText(`${genre} Movies`)
    setMovies([]);
    setMovies(response.data.results);
  }


  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>The Movie Corner</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px"}}
            navbarScroll
          >
            <Nav.Link onClick={() => findMovies(POPULAR, "Popular Movies")}>Popular</Nav.Link> 
            <Nav.Link onClick={() => findMovies(TOP_RATED, "Top Rated Movies")}>
              Top Rated
            </Nav.Link>
            <Nav.Link onClick={() => findMovies(UPCOMING, "Upcoming Movies")}>Upcoming</Nav.Link>

            <NavDropdown title="Genres" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() =>findByGenre('Action')}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() =>findByGenre('Comedy')}>
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() =>findByGenre('Romance')}>
                Romance
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() =>findByGenre('Drama')}>
                Drama
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() =>findByGenre('Animation')}>
                Animation
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form onSubmit={onSubmit} className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
