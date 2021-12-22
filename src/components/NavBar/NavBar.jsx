import { Link } from 'react-router-dom'
import './Nav.css'



const NavBar = ({ user, handleLogout, userProfile }) => {
  return (
    <>
      {user ?
    <nav className="navbar">

        <div className='welcome-message'>
        <p id="welcome">Welcome, {user.name}</p>
        </div>
        <div className='outer-container'>
        <div className='nav-route'>
          <p><Link to="/">Home</Link></p>
        <p> 
          <div className="dropdown">
              <button className="dropbtn">Topics of Interest
              </button>
            <div className="dropdown-content">
              <Link to="/bar">Bars</Link>
              <Link to="/restaurant">Restaurants</Link>
              <Link to="/retail">Retail Spaces</Link>
              <Link to="/event">Events</Link>
            </div>
          </div> 
        </p>
            <p><Link to="/profiles">Profiles</Link></p>
            <p><Link to="/profile" state={userProfile}>My Profile</Link></p>
            <p><Link to="/chat">Community Chat</Link></p>
            <p><Link to="" onClick={handleLogout}>Log Out</Link></p>
            </div>
      </div>
<nav role="navigation">
  <div id="menuToggle"> 
    <input name="toggle" type="checkbox" />
    <label for="toggle">
      <span>menu</span>

      <div></div>
      <div></div>
      <div></div>
    </label>
    <ul id="menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/profiles">Profiles</Link></li>
      <li><Link to="/profile" state={userProfile}>My Profile</Link></li>
      <li><Link to="/chat">Community Chat</Link></li>
      <Link to="/bar">Bars</Link>
      <Link to="/restaurant">Restaurants</Link>
      <Link to="/retail">Retail Spaces</Link>
       <Link to="/event">Events</Link>
      <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
    </ul>
  </div>
</nav>
          
        </nav>
      :
      !user && 

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
