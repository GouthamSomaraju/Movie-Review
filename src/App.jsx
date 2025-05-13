
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import MainPage from './MainPage'
import YourMovies from './YourMovies'
import Likes from './Likes'
import Disliked from './DisLike'
// import MainPage from './MainPage'

function App() {

  return (
    <div>
      {/* <MainPage /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<SignUp />} />
        <Route path='/login'element={<Login />} />
        <Route path='/home' element={<MainPage />} />
        <Route path='/liked' element={<Likes />} />
        <Route path='/disliked' element={<Disliked />} />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
