import { Link } from 'react-router-dom'
import './Nav.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <nav class="navbar">
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
          </ul>
           <div class="dropdown">
          <button class="dropbtn">Topics of Interest
         </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
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
