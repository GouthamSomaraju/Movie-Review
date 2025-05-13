import React, { useEffect, useState } from 'react'
import './mainPage.css'
import { Movies } from './data'
import { Link, useNavigate } from 'react-router-dom'
import like from './assets/like.png'
import dislike from './assets/dislike.png'

const MainPage = () => {
    let navigate=useNavigate()
   const [reactions, setReactions] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userReactions = JSON.parse(localStorage.getItem('userReactions')) || {};
    if (user && userReactions[user]) {
      setReactions(userReactions[user]);
    }
  }, []);

  const handleReactions = (movieId, movieReaction) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('Login First');
      return;
    }

    if (!reactions[movieId]) {
      const newReactions = { ...reactions, [movieId]: movieReaction };
      setReactions(newReactions);

      const allUserReactions = JSON.parse(localStorage.getItem('userReactions')) || {};
      allUserReactions[user] = newReactions;
      localStorage.setItem('userReactions', JSON.stringify(allUserReactions));
    }
  };

  let handleLogout=()=>{
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div>
        <div className='home-head'>
        <h1>Movies</h1>
        <div>
            <button onClick={()=>navigate('/liked')} className='like'>Likes 👍</button>
            <button onClick={()=>navigate('/disliked')} className='dislike'>Dislikes 👎</button>
            <button onClick={handleLogout}><Link to={'/login'}>Logout</Link></button>

        </div>
        </div>
            
        <div className="main">
            {Movies.map(movie=>{
                let userReacted=reactions[movie.id]
                return(
                    <div key={movie.id} className='card'>
                        <img src={movie.image} alt={movie.title} width={150} height={300}/>
                        <h3>{movie.title}</h3>
                        <div className="btns">
                        <button onClick={()=>handleReactions(movie.id,'like')} disabled={userReacted?true:false}><img src={like} /></button>
                        <button onClick={()=>handleReactions(movie.id,'dislike')} disabled={userReacted?true:false}><img src={dislike} /></button>
                        </div>
                        <img src={movie.rating} className='rating' />
                        <p className='review'>{movie.review}</p>
                        {userReacted && <p>You have {userReacted}d this movie</p>}
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default MainPage
