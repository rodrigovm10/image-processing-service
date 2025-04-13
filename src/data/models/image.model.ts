import mongoose, { Schema } from 'mongoose'

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, 'Url is required'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

export const ImageModel = mongoose.model('Image', imageSchema)
