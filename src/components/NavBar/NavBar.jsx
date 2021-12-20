import { Link } from 'react-router-dom'
import './Nav.css'
import '../../pages/Landing/Landing.module.css'

const NavBar = ({ user, handleLogout }) => {
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
            <li><Link to="/myprofile">My Profile</Link></li>
            <li><Link to="/chat">Community Chat</Link></li>
            <li><Link to="" onClick={handleLogout}>Log Out</Link></li></div>
          </ul>
          
            <div class="dropdown">
          <button class="dropbtn">Topics of Interest
          </button>
        <div class="dropdown-content">
          <Link to="/bar">Bars</Link>
          <Link to="/restaurant">Restaurants</Link>
          <Link to="/retail">Retail Spaces</Link>
          <a href="#">Events</a>
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

