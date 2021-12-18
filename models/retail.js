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
    address1:{ //do we need all this listed here or can we pull this from yelp? as "location"?
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

const RetailModel = mongoose.model('RetailModel', retailSchema)

export {
  RetailModel
}