import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, favorites, handleAddAndDeleteFromFavorites }) => {
  return (
    <div className="container">
      {movies && movies.length > 0 ? (
        movies.map((movie, index) => (
          <MovieItem
            key={index}
            movie={movie}
            handleAddAndDeleteFromFavorites={handleAddAndDeleteFromFavorites}
            favorites={favorites}
          />
        ))
      ) : (
        <h1>There are no movies found!</h1>
      )}
    </div>
  );
};

export default MovieList;
