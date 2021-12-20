import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Profile = ({ profile }) => {

  const location = useLocation()
  const [profileInfo, setProfileInfo] = useState(location.state)



  console.log("this is a profile", profileInfo)

  return (
    <main>
      <h1>{profileInfo.name}'s profile</h1>


      {/* add in a place for user photo */}

      {/* add in a bio form */}

      {/* add in a place to show favorite place eventually? */}
    </main>
  )
}

export default Profile