export interface ToursType {
  _id: string;
  title: string;
  location: string;
  country: string;
  price: number;
  duration: string;
  description: string;
  bookings: number;
  image: string;
  reviwesCount: number;
  rating: number;
  createdAt: Date;
}
export interface ToursType2 {
  title: string;
  image: string;
  duration: string;
  description: string;
  includes: string[];
  bestFor: string;
  buttonText: string;
  slug: string;
}

export interface BookingsType {
  _id: string,
  name: string,
  email: string,
  phone: string,
  nationality: string,
  passportNo: string,
  destination: string | ToursType,
  departureDate: Date,
  returnDate: Date,
  adults: number,
  children: number,
  specialRequests: string,
  payment: 'pending'|'done',
  createdAt: Date,
}