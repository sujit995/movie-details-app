import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import logo from "./logo.png";

const FEATURED_API =
  "https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=32d46701c43c33c47c60a37408186fb3&page=2";
const SEARCH_API =
  "https://api.themoviedb.org/4/search/movie?&api_key=32d46701c43c33c47c60a37408186fb3&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getMovies(SEARCH_API + searchTerm);
    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header>
        <div className="logoContainer">
          <img src={logo} alt="Logo" />
        </div>
        <div className="searchContainer">
          <form onSubmit={handleOnSubmit}>
            <input
              className="search"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </div>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} data={movie} />)}
      </div>
      <footer>
        <span>
          Created By{" "}
          <a
            href="https://www.linkedin.com/in/sujit-mishra-3b9365188/"
            className="tmdb"
          >
            Sujit Mishra
          </a>
          , Powered By TMDB
        </span>
      </footer>
    </>
  );
};

export default App;
