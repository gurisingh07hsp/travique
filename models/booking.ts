import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
  },
  nationality: String,
  destination: {
    type: String,
    required: true
  },
  pickupLocation: {
    type: String,
  },
  dropoffLocation: {
    type: String,
  },
  departureDate: {
    type: Date,
    required: true
  },
  returnDate: {
    type: Date,
    required: true
  },
  adults: {
    type: Number,
    required: true,
  },
  children: {
    type: Number,
    required: true,
  },
  specialRequests: String,
  payment: {
    type: String,
    default: 'pending',
    enum: ['pending','done'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);