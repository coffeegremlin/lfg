import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProfileForm from '../../components/Profile/ProfileForm'
import { getUser } from '../../services/authService'
import { getAllProfiles, getUserProfile } from '../../services/profileService'
import './Profile.css'

const Profile = ({ profile, user }) => {

  const location = useLocation()
  const [profileInfo, setProfileInfo] = useState(location.state)

  const selectInfoToUpdate = (profile) => {
    setProfileInfo(profile)
  }

  console.log('this is profile', getUserProfile(profile))
  console.log('this is profileinfo', profileInfo._id)
  const userProfileId = getUserProfile(profile);
  console.log("Userprofile", userProfileId)

  return (
    <main>
      <div className='profile-card'>
        <h1 className='profile-header'>{profileInfo.name}'s profile</h1>
        <img className='profile-avatar' src={profileInfo.avatar} alt={`${profileInfo.name}'s avatar`} />
        <div className='profile-info'>
          {profileInfo._id === userProfileId
          ? 
            <>
              <ProfileForm setProfileInfo={setProfileInfo} profile={profileInfo}/>
              <h3 className='bio-header'> Bio:
                <p className='bio-body' state={profileInfo}>Start: {profileInfo.bio}</p>
              </h3>
            </>
            :
            <>
              <h3 className='bio-header'> Bio:
                <p className='bio-body' state={profileInfo}>Start: {profileInfo.bio}</p>
              </h3>
            </>
          }
        </div>
      </div>
    </main>
  )
}

export default Profile