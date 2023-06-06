import React from "react";
import Favorites from "../Favorites";

const FavsPage = ({ favorites, handleAddAndDeleteFromFavorites }) => {
  return (
    <div>
      <h1 className="Favoriti">Favorites</h1>
      <Favorites
        favorites={favorites}
        handleAddAndDeleteFromFavorites={handleAddAndDeleteFromFavorites}
      />
    </div>
  );
};

export default FavsPage;
