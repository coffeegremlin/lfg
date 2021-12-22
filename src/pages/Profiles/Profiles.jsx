import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from "react-router-dom"
import './Profiles.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1 className='current-members'>Current Active Members</h1>
      <main>
<div className='profiles-card'>
      {profiles.length ? 
        <>
          {profiles.map(profile=>
            <p className='profile-cards'><Link className="user-names" key={profile._id} state={profile} to="/profile">{profile.name}</Link><img className='profiles-avatar' src={profile.avatar} alt={`${profile.name}'s avatar`} /></p>
          )}
        
        </>
      :
        <p>No profiles yet</p>
      }
      </div>
    </main>
    </>
  )
}

export default Profiles