import React from 'react'
import { Movies } from './data'
import './yourmovies.css'
import { useNavigate } from 'react-router-dom'

const Likes = () => {
        let navigate=useNavigate()
      const userMovies = JSON.parse(localStorage.getItem("userReactions")) || {};
      const user = JSON.parse(localStorage.getItem("user"));
    
      const reactions = userMovies[user] || {};
    
      const likedMovies = Movies.filter((movie) => reactions[movie.id] === "like");
      
      let handleLogout=()=>{
        localStorage.removeItem('user')
        navigate('/login')
      }
    
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
                <img src={movie.rating} className='rating' />
                <p className='review'>{movie.review}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No liked movies yet.</p>
        )}
      </div>
      
    </div>
  )
}

export default Likes
