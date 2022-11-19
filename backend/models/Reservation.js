import mongoose from "mongoose";
const {Schema} = mongoose;

const reservationSchema = new Schema({
  hotel: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true
  },

  date: {
    type: Date,
    required: true
  }
},
{timestamps: true}
)

export default mongoose.model("Reservation", reservationSchema);