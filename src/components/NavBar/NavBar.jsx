import { Link } from 'react-router-dom'
import './Nav.css'
import '../../pages/Landing/Landing.module.css'


const NavBar = ({ user, handleLogout, userProfile }) => {
  return (
    <>
      {user ?
      <nav className="navbar">
          <ul>
            <div className='welcome-message'>
            <li>Welcome, {user.name}</li>
            </div>
            <div className='nav-route'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="/profile" state={userProfile}>My Profile</Link></li>
            <li><Link to="/chat">Community Chat</Link></li>
            <li><Link to="" onClick={handleLogout}>Log Out</Link></li></div>
          </ul>
          
            <div className="dropdown">
          <button className="dropbtn">Topics of Interest &#8623;
          </button>
        <div className="dropdown-content">
          <Link to="/bar">Bars</Link>
          <Link to="/restaurant">Restaurants</Link>
          <Link to="/retail">Retail Spaces</Link>
          <Link to="/event">Events</Link>
        </div>
      </div> 
        </nav>
      :
        <nav>
          <ul className='login-box'>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
