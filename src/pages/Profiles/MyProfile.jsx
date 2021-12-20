import React, { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'


const Profile = ({ user }) => {
  const [profileInfo, setProfileInfo] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfileInfo(profiles))
  }, [])

  return (
    <main>
      <h1>{user.name}'s profile</h1>
      {/* add profile.name in h1 */}

      {/* add in a place for user photo */}

      {/* add in a bio form */}

      {/* add in a place to show favorite place eventually? */}
    </main>
  )
}

export default Profile