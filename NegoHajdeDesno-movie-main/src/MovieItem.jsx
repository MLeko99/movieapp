/*
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MovieItem = ({ movie, handleAddAndDeleteFromFavorites, favorites }) => {
  return (
    <div className="movie">
      <div>
        <p>{"IMDb rating: " + movie.rating}</p>
      </div>
      <div>
        <img src={require("./batman.jpg")} alt={movie.Title} />
        <FontAwesomeIcon
          className="icon-style"
          icon={faHeart}
          onClick={() => handleAddAndDeleteFromFavorites(movie)}
          style={{
            color: favorites.includes(movie) ? "red" : "black",
          }}
        />
      </div>
      <div>
        <span>{movie.movie}</span>
      </div>
    </div>
  );
};

export default MovieItem;
*/
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MovieItem = ({ movie, handleAddAndDeleteFromFavorites, favorites }) => {
  return (
    <div className="movie">
      <div>
        <p>{"IMDb rating: " + movie.rating}</p>
      </div>
      <div>
        <img src={require("./godfather.jpg")} alt={movie.Title} />
        <FontAwesomeIcon
          className="icon-style"
          icon={faHeart}
          onClick={() => handleAddAndDeleteFromFavorites(movie)}
          style={{
            color: favorites.includes(movie) ? "red" : "#f9d3b4",
          }}
        />
      </div>
      <div>
        <Link to={`/Details/${movie.id}`}>
          <span>{movie.movie}</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;
