import React, { useState } from 'react';
import * as profileService from '../../services/profileService'

const ProfileForm = (props) => {
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    location: '',
  })

  const handleUpdate = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newProfile = await profileService.updateProfile(profileData)
    console.log("this is new profile", newProfile)
    props.setProfileInfo(newProfile)
  }

  return (
    <form classname="profile-form" onSubmit={handleSubmit}>
      <input 
      type="text"
      name="bio"
      autoComplete='off'
      placeholder='Bio'
      value={profileData.bio}
      onChange={handleUpdate}
      />
      <button type="submit">Update My Bio</button>
    </form>
  )
}

export default ProfileForm