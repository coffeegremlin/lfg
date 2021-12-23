import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Profile.css'

const Profile = ({ profile }) => {

  const location = useLocation()
  const [profileInfo] = useState(location.state)

  return (
    <main>
      <div className='profile-card'>
      <h1 className='profile-header'>{profileInfo.name}'s profile</h1>
      <img className='profile-avatar' src={profileInfo.avatar} alt={`${profileInfo.name}'s avatar`} />
      <div className='profile-info'>
        <h3 className='bio-header'> Bio:
          <p className='bio-body'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{profileInfo.bio}</p>
        </h3>
      </div>
      {/* add in a place for user photo */}

      {/* add in a place to show favorite place eventually? */}
      </div>
    </main>
  )
}

export default Profile