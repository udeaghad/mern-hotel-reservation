import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new Schema({
  name:{
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },
  photos: {
    type: String
  },
  
  cheapest_price: {
    type: Number,
  },

  rooms: {
    type: [String]
  },

  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },

  featured: {
    type: Boolean,
    default: false
  },
  city: {
    type: String
  },
   desc: {
    type: String,
   }
  
});

export default mongoose.model("Hotel", HotelSchema);