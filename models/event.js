import mongoose from 'mongoose'

const Schema = mongoose.Schema 

const eventSchema = new Schema(
  {
    
  }
)















const Event = mongoose.model("Bar", eventSchema)

export {
  Event
}