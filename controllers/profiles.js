import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function showLoggedInUserProfile(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => res.json(profile))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function updateUserProfile(req, res) {
  Profile.findByIdAndUpdate(req.user.profile, req.body, {new: true})
  .then(profile => res.status(200).json(profile))
  .catch(err => {
    console.log('profile update error', err)
    res.status(500).json(err)
  })
}

export { 
  index,
  showLoggedInUserProfile,
  updateUserProfile,
}
