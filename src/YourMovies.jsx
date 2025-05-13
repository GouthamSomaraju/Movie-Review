import React from "react";
import { Movies } from "./data";
import "./yourmovies.css";
import { useNavigate } from "react-router-dom";

const YourMovies = () => {
  let navigate = useNavigate();
  const userMovies = JSON.parse(localStorage.getItem("userReactions")) || {};
  const user = JSON.parse(localStorage.getItem("user"));

  const reactions = userMovies[user] || {};

  const likedMovies = Movies.filter((movie) => reactions[movie.id] === "like");
  const dislikedMovies = Movies.filter(
    (movie) => reactions[movie.id] === "dislike"
  );

  let handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <div className="head">
        <button onClick={() => navigate("/home")}>Back</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="liked-movies">
        <h2>Liked Movies</h2>
        {likedMovies.length > 0 ? (
          <div className="main">
            {likedMovies.map((movie) => (
              <div key={movie.id} className="card">
                <img src={movie.image} alt={movie.title} />
                <h1>{movie.title}</h1>
              </div>
            ))}
          </div>
        ) : (
          <p>No liked movies yet.</p>
        )}
      </div>

      <div className="disliked-movies" style={{ marginTop: "2rem" }}>
        <h2>Disliked Movies</h2>
        {dislikedMovies.length > 0 ? (
          <div>
            {dislikedMovies.map((movie) => (
              <div key={movie.id}>
                <img src={movie.image} alt={movie.title} />
                <h1>{movie.title}</h1>
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

export default YourMovies;
