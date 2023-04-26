import React from "react";
import { directors } from "../data";

function Directors() {
  return(
   <div>{/*{code here}*/}
    
      <h1>Directors Page</h1>
      {
        /*{code here}*/
        directors.map((director, index) => (
          <div key={index}>
            <h2>{director.name}</h2>
            <ul>
              Movies:
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  

  );
}

export default Directors;
