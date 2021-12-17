import mongoose from 'mongoose'

const Schema = mongoose.Schema

const restarauntSchema = new Schema(
  {
    name: {

    },
    image_url: {

    },
    review_count: {

    },
    rating:{

    },
    price:{

    },
    location:{

    },
    phone:{

    },
  }
)

const Restaraunt = mongoose.model('Restaraunt', restarauntSchema)

export {
  Restaraunt
}