import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
      {
      
        movies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <h3>Time: {movie.time} mins</h3>
            <ul>
              Genres:
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
}

export default Movies;
