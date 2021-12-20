import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from "react-router-dom"


const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>Current Active Members</h1>
      <main>

      {profiles.length ? 
        <>
          {profiles.map(profile=>
            <p><Link class="user-name" key={profile._id} state={profile} to="/profile">{profile.name}</Link></p>
          )}
        
        </>
      :
        <p>No profiles yet</p>
      }
    </main>
    </>
  )
}

export default Profiles