import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import Retail from './components/Retail/Retail'
import Bar from './components/Bar/Bar'
import Restaurant from './components/Restaurant/Restaurant'
import Profile from './pages/Profiles/Profile'
import Event from './pages/Event/Event'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    if (user) {
      profileService.getUserProfile()
      .then(profile => setUserProfile(profile))
    } else {
      setUserProfile(null)
    }
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }
  

  return (
    <>
      <NavBar user={user} userProfile={userProfile} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/chat" element={<Chat user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  )
}

export default App
