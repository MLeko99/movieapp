import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import FavsPage from "./pages/FavsPage";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import * as React from "react";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import SignUp from "./pages/Signup";

const API_URL = "https://dummyapi.online/api/movies";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleAddAndDeleteFromFavorites = (item) => {
    if (!favorites.some((favorites) => favorites.id === item.id)) {
      setFavorites((favorites) => [...favorites, item]);
    } else {
      setFavorites((favorites) =>
        favorites.filter((favorites) => favorites.id !== item.id)
      );
    }
  };
  const isItemFavorite = (itemId) => {
    return favorites.some((item) => item.id === itemId);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchMovies = async () => {
    const response = await axios.get(API_URL);
    const data = response.data;

    setMovies(data);
  };
  const searchmovies = movies.filter((item) => {
    return item.movie.toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    searchMovies();
  }, []);
  console.log(favorites);
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchQuery={searchQuery}
                handleInputChange={handleInputChange}
                searchMovies={searchMovies}
                movies={searchmovies}
                favorites={favorites}
                handleAddAndDeleteFromFavorites={
                  handleAddAndDeleteFromFavorites
                }
              />
            }
          />
          <Route
            path="/FavsPage"
            element={
              <FavsPage
                favorites={favorites}
                handleAddAndDeleteFromFavorites={
                  handleAddAndDeleteFromFavorites
                }
              />
            }
          />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Details/:id" element={<Details movies={movies} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

            
      <footer className="footer">
      <h3>@Globalsoft 2023. All rights reserved.</h3>
          <div className="social-container">
            <a
              href="https://www.youtube.com/"
               target="_blank"className="youtube social"
             
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com"  target="_blank" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
      </footer>
    </div>
  );
};

export default App;
