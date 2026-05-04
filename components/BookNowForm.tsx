'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  User,
  MapPin,
  ChevronRight,
  Users,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
} from "lucide-react";
import axios from "axios";
import { PackageData } from "@/packagedata/packagedata";
import Link from "next/link";

const BookNow = () => {
  const {name} = useParams();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  console.log('steps  :', step);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    destination: "",
    pickupLocation: "",
    dropoffLocation: "",
    Date: "",
    departureDate: "",
    returnDate: "",
    adults: "1",
    children: "0",
    specialRequests: "",
  });

    const getTour = ()=> {
      const tour = PackageData.find((p)=> p.slug == name);
      setForm({...form, destination: tour?.title || ''})
    } 
    useEffect(()=>{
      getTour();
    },[])

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async() => {
    setLoading(true);
    const response = await axios.post('/api/bookings',form);
    if(response.status == 200){
      setStep(3); 
      console.log(response.data);
      setLoading(false);
    }
    setLoading(false);
  };

  const canProceedStep1 = form.name && form.email && form.phone;
  // const canProceedStep2 = form.destination && form.departureDate && form.returnDate;

  const steps = [
    { num: 1, label: "Personal Info", icon: User },
    { num: 2, label: "Trip Details", icon: MapPin },
    // { num: 3, label: "Booking Details", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-background">

      <div className="pt-14 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Book Your Dream Trip
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Book your transfer or tour in just a few simple steps.
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-0 mb-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = step === s.num;
              const isDone = step > s.num;
              return (
                <div key={s.num} className="flex items-center">
                  <button
                    onClick={() => { if (isDone) setStep(s.num); }}
                    className={`"flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all" 
                      ${isActive && "bg-main text-primary shadow-md flex"}
                      ${isDone && "bg-main text-primary cursor-pointer flex"}
                      ${!isActive && !isDone && "bg-muted text-muted-foreground flex"}`}
                  >
                    {isDone ? <CheckCircle2 size={16} /> : <Icon size={16} />}
                    <span className="hidden sm:inline">{s.label}</span>
                    <span className="sm:hidden">{s.num}</span>
                  </button>
                  {i < steps.length - 1 && (
                    <ChevronRight size={18} className="mx-1 text-muted-foreground" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="border border-gray-300 rounded-lg p-6 shadow-lg">
              <div>
                <div className="flex items-center gap-2 text-xl">
                  <User size={20} className="txt-main" />
                  Personal Information
                </div>
              </div>
              <div className="space-y-6 mt-4">
                <div className="grid grid-cols-1 gap-5">
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="firstName">Name *</label>
                    <input className="border py-2 px-2 rounded-lg" id="firstName" placeholder="John" value={form.name} onChange={(e) => updateForm("name", e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="email">Email Address *</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input id="email" type="email" placeholder="john@example.com" className="pl-10 border w-full p-2 rounded-lg" value={form.email} onChange={(e) => updateForm("email", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="phone">Phone Number *</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input id="phone" type="tel" placeholder="+1 234 567 890" className="pl-10 p-2 border w-full rounded-lg" value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="nationality">Nationality</label>
                    <div className="relative">
                      <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input id="nationality" placeholder="United States" className="pl-10 p-2 border w-full rounded-lg" value={form.nationality} onChange={(e) => updateForm("nationality", e.target.value)} />
                    </div>
                  </div>
                  {/* <div className="space-y-2 flex flex-col">
                    <label htmlFor="passportNo">Passport Number</label>
                    <input className="border p-2 rounded-lg" id="passportNo" placeholder="AB1234567" value={form.passportNo} onChange={(e) => updateForm("passportNo", e.target.value)} />
                  </div> */}
                </div>

                <div className="flex justify-end pt-4">
                  <button onClick={() => setStep(2)} disabled={!canProceedStep1} className="flex items-center text-white cursor-pointer bg-main py-2 rounded-full px-6">
                    Continue to Trip Details
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Trip Details */}
          {step === 2 && (
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <div>
                <div className="flex items-center gap-2 text-xl">
                  <MapPin size={20} className="txt-main" />
                  Trip Details
                </div>
              </div>
              <div className="space-y-6 mt-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 flex flex-col">
                    <label>Pickup Location *</label>
                    <input value={form.pickupLocation} onChange={(v)=> setForm({...form, pickupLocation: v.target.value})} type="text" className="border p-2 rounded-lg" />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label>Drop-off Location *</label>
                    <input value={form.dropoffLocation} onChange={(v)=> setForm({...form, dropoffLocation: v.target.value})} type="text" className="border p-2 rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 flex flex-col">
                    <label>Departure Date *</label>
                    <input value={form.departureDate} onChange={(v)=> setForm({...form, departureDate: v.target.value})} type="date" className="border p-2 rounded-lg" />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label>Return Date *</label>
                    <input value={form.returnDate} onChange={(v)=> setForm({...form, returnDate: v.target.value})} type="date" className="border p-2 rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 flex flex-col">
                    <label className="flex items-center gap-1.5"><Users size={14} /> Adults *</label>
                    <select className="border p-2 rounded-lg" value={form.adults} onChange={(v) => setForm({...form, adults: v.target.value})}>
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={String(n)}>{n} Adult{n > 1 ? "s" : ""}</option>
                        ))}
                    </select>
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label className="flex items-center gap-1.5"><Users size={14} /> Children</label>
                    <select className="border p-2 rounded-lg" value={form.children} onChange={(v) => setForm({...form, children: v.target.value})}>
                        {[0, 1, 2, 3, 4].map((n) => (
                          <option key={n} value={String(n)}>{n} Child{n !== 1 ? "ren" : ""}</option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="specialRequests">Special Requests</label>
                  <textarea className="border py-2 px-2 rounded-lg h-28" id="specialRequests" placeholder="Any dietary requirements, accessibility needs, or special occasions..." value={form.specialRequests} onChange={(e) => updateForm("specialRequests", e.target.value)} />
                </div>

                <div className="flex justify-between pt-4">
                  <button onClick={() => setStep(1)} className="rounded-full border cursor-pointer px-6">Back</button>
                  <button disabled={loading} onClick={() => {handleSubmit()}} className="rounded-full px-4 cursor-pointer flex items-center bg-main py-2">
                    {loading ? 'Booking...' : 'Book Now'}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
  <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

    {/* Top Success Banner */}
    <div className="bg-linear-to-r from-green-500 to-emerald-600 py-10 flex flex-col items-center justify-center text-white relative">

      {/* Success Icon */}
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-4xl font-bold">
        Booking Confirmed!
      </h1>

      <p className="mt-3 text-green-100 text-sm md:text-base">
        Your package has been booked successfully.
      </p>
    </div>

    {/* Content */}
    <div className="p-8 text-center">

      <p className="text-gray-600 leading-relaxed">
        Thank you for choosing us. We have received your booking
        request and our team will contact you shortly with the
        complete details.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

        <Link
          href={`/${name}`}
          className="bg-main hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium shadow-md"
        >
          Back to Package
        </Link>

        <Link
          href="/"
          className="border border-gray-300 hover:bg-gray-100 transition-all duration-300 px-6 py-3 rounded-xl font-medium text-gray-700"
        >
          Go to Home
        </Link>

      </div>
    </div>
  </div>
</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookNow;
