import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  location: String,
  country: String,
  price: Number,
  duration: String,
  description: String,
  bookings: Number,
  image: String,
  reviwesCount: Number,
  rating: Number, 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Tour || mongoose.model("Tour", TourSchema);