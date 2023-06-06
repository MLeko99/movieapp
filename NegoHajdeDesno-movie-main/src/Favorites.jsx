import React from "react";
import MovieItem from "./MovieItem";
import { useEffect, useState } from "react";

const Favorites = ({ favorites, handleAddAndDeleteFromFavorites }) => {
  return (
    <div className="container">
      {favorites &&
        favorites.map((movie, index) => (
          <MovieItem
            key={index}
            movie={movie}
            handleAddAndDeleteFromFavorites={handleAddAndDeleteFromFavorites}
            favorites={favorites}
          />
        ))}
    </div>
  );
};

export default Favorites;
