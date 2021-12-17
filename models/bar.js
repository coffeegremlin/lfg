import mongoose from 'mongoose'

const Schema = mongoose.Schema 

const barSchema = new Schema(
  {

  }
)

const Bar = mongoose.model("Bar", barSchema)

export {
  Bar
}