import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Profile = ({ profile }) => {

  const location = useLocation()
  const [profileInfo, setProfileInfo] = useState(location.state)

  return (
    <main>
      <h1>{profileInfo.name}'s profile</h1>
      <img src={profileInfo.avatar} alt={`${profileInfo.name}'s avatar`} />
      <div className='profile-info'>
        <h3>Bio:
          <p>{profileInfo.bio}</p>
        </h3>
      </div>
      {/* add in a place for user photo */}

      {/* add in a place to show favorite place eventually? */}
    </main>
  )
}

export default Profile