import mongoose from 'mongoose'

const Schema = mongoose.Schema 

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    tournaments: {
      type: String,
      required: true
    },
    scheduledActivities: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    date:{
      type: String, 
      required: true
    },
    info:{
      type: String,
      required: true
    }
  }
)


const Event = mongoose.model("Event", eventSchema)

export {
  Event
}