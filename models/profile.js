import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
},{
    timestamps: true,
})

// add more attributes to the model later

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
