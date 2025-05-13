import React from "react";
import { Movies } from "./data";
import "./DisLike.css";
import { useNavigate } from "react-router-dom";

const Disliked = () => {
  let navigate = useNavigate();
  const userMovies = JSON.parse(localStorage.getItem("userReactions")) || {};
  const user = JSON.parse(localStorage.getItem("user"));

  const reactions = userMovies[user] || {};

  const dislikedMovies = Movies.filter(
    (movie) => reactions[movie.id] === "dislike"
  );

  let handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

    return (
  <div className="page-container">
    <div className="head">
      <button onClick={() => navigate("/home")}>Back</button>
      <h2>Disliked Movies</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>

    <div className="disliked-movies">
      {dislikedMovies.length > 0 ? (
        <div className="main">
          {dislikedMovies.map((movie) => (
            <div key={movie.id} className="card">
              <img src={movie.image} alt={movie.title} />
              <h1>{movie.title}</h1>
              <img src={movie.rating} className='rating' />
              <p className='review'>{movie.review}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No disliked movies yet.</p>
      )}
    </div>
  </div>
);

};

export default Disliked;
