import { Link } from 'react-router-dom'
import './Nav.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <nav className="navbar">
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="/chat">Community Chat</Link></li>
            <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
          </ul>
            <div class="dropdown">
          <button class="dropbtn">Topics of Interest
          </button>
        <div class="dropdown-content">
          <Link to="/bar">Bars</Link>
          <a href="#">Restaurants</a>
          <Link to="/retail">Retail Spaces</Link>
          <a href="#">Events</a>
        </div>
      </div> 
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
