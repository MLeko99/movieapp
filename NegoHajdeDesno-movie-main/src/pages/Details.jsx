import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ movies }) => {
  const { id } = useParams();
  console.log(movies, id);
  return (
    <div>
      {movies.map((movie, index) => {
        if (movie.id === id * 1) {
          return (
            <div key={index}>
              <div className="movie_card" id="bright">
                <div className="info_section">
                <img
                      className="locandina"
                      src={require("../kum.jpg")}
                      alt={movie.Title}
                    />
                  <div className="movie_header">
                    <h1 className="detailsH1">{movie.movie}</h1>
                    <h4 className="detailsH2">IMDb rating: {movie.rating}</h4>
                    <h3 className="type">Type : Action</h3>
                    <br />
                    <h3 className="minutes">Duration: 117 min</h3>
                    <h3 className="IMDbLink">
                      IMDb url:{" "}
                      <a
                        className="linkCSS"
                        href={movie.imdb_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {movie.imdb_url}
                      </a>
                    </h3>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <div className="movie_desc">
                    <p className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                <iframe width="1024" height="576" src="https://www.youtube.com/embed/NmzuHjWmXOc" title="The Shawshank Redemption (1994) Official Trailer #1 - Morgan Freeman Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="blur_back bright_back"></div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Details;
