import React from "react";
import MovieList from "../MovieList";
import SearchIcon from "../search.svg";

const Home = ({
  searchQuery,
  handleInputChange,
  searchMovies,
  movies,
  favorites,
  handleAddAndDeleteFromFavorites,
}) => {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchQuery)}
        />
      </div>
      <MovieList
        movies={movies}
        favorites={favorites}
        handleAddAndDeleteFromFavorites={handleAddAndDeleteFromFavorites}
      />
    </div>
  );
};

export default Home;
