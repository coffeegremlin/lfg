import mongoose from 'mongoose'

const Schema = mongoose.Schema

const retailSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    image_url: {
      type: String,
      required: false
    },
    review_count: {
      type: Number,
      required: true
    },
    rating:{
      type: Number,
      required: true
    },
    price:{
      type: String,
      required: true
    },
    address:{
      type: String,
      required: true
    },
    city:{
      type: String,
      required: true
    },
    zip_code:{
      type: String,
      required: true
    },
    state:{
      type: String,
      required: true
    },
    phone:{
      type: String,
      required: true
    },
  }
)

const Retail = mongoose.model('Retail', retailSchema)

export {
  Retail
}