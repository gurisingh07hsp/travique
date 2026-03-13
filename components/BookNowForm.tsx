'use client'
import { useState } from "react";
import { useParams } from "next/navigation";
import {
  CalendarIcon,
  User,
  MapPin,
  CreditCard,
  Shield,
  ChevronRight,
  Users,
  Phone,
  Mail,
  Globe,
  Plane,
  Hotel,
  CheckCircle2,
} from "lucide-react";

const destinations = [
  "Bali, Indonesia",
  "Paris, France",
  "Colorado, USA",
  "Tokyo, Japan",
  "Maldives",
  "Dubai, UAE",
  "Santorini, Greece",
  "Swiss Alps, Switzerland",
];

const packages = [
  { id: "basic", name: "Basic Explorer", price: 320, features: ["Hotel", "Breakfast"] },
  { id: "standard", name: "Standard Voyager", price: 740, features: ["Hotel", "Breakfast", "Airport Transfer", "City Tour"] },
  { id: "premium", name: "Premium Elite", price: 1450, features: ["5-Star Hotel", "All Meals", "Airport Transfer", "Private Guide", "Spa Access"] },
];

const BookNow = () => {
//   const navigate = useNavigate();
  const searchParams = useParams();
//   const { toast } = useToast();

  const [step, setStep] = useState(1);
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [agreedTerms, setAgreedTerms] = useState(false);

  console.log('steps  :', step);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    passportNo: "",
    destination: "",
    adults: "2",
    children: "0",
    specialRequests: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const selectedPkg = packages.find((p) => p.id === selectedPackage)!;
  const adults = parseInt(form.adults) || 1;
  const children = parseInt(form.children) || 0;
  const subtotal = selectedPkg.price * adults + selectedPkg.price * 0.5 * children;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

//   const handleSubmit = () => {
//     toast({
//       title: "Booking Confirmed! 🎉",
//       description: `Your trip to ${form.destination || "your destination"} has been booked successfully. Confirmation sent to ${form.email}.`,
//     });
//     setTimeout(() => navigate("/"), 3000);
//   };

  const canProceedStep1 = form.firstName && form.lastName && form.email && form.phone;
  const canProceedStep2 = form.destination && departureDate && returnDate;
  const canProceedStep3 = agreedTerms && (paymentMethod !== "card" || (form.cardNumber && form.cardName && form.expiry && form.cvv));

  const steps = [
    { num: 1, label: "Personal Info", icon: User },
    { num: 2, label: "Trip Details", icon: MapPin },
    // { num: 3, label: "Payment", icon: CreditCard },
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
              Fill in the details below and we'll take care of the rest. Your adventure awaits!
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="firstName">First Name *</label>
                    <input className="border py-2 px-2 rounded-lg" id="firstName" placeholder="John" value={form.firstName} onChange={(e) => updateForm("firstName", e.target.value)} />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="lastName">Last Name *</label>
                    <input className="border p-2 rounded-lg" id="lastName" placeholder="Doe" value={form.lastName} onChange={(e) => updateForm("lastName", e.target.value)} />
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
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="passportNo">Passport Number</label>
                    <input className="border p-2 rounded-lg" id="passportNo" placeholder="AB1234567" value={form.passportNo} onChange={(e) => updateForm("passportNo", e.target.value)} />
                  </div>
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
                <div className="space-y-2 flex flex-col">
                  <label>Destination *</label>
                  <select className="border py-2 px-2 rounded-lg" value={form.destination} onChange={(v) => setForm({...form, destination: v.target.value})}>
                    <option disabled value="">Select your destination</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 flex flex-col">
                    <label>Departure Date *</label>
                    <input type="date" className="border p-2 rounded-lg" />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label>Return Date *</label>
                    <input type="date" className="border p-2 rounded-lg" />
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

                {/* Package Selection */}
                <div className="space-y-3">
                  <label>Select Package *</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`
                          "relative rounded-xl border-2 p-5 text-left transition-all"
                          ${selectedPackage === pkg.id
                            ? "border-yellow-600 bg-main text-white shadow-md cursor-pointer"
                            : "border-border hover:border-primary/40 cursor-pointer"}
                        `}
                      >
                        {selectedPackage === pkg.id && (
                          <CheckCircle2 size={18} className="absolute top-3 right-3 text-primary" />
                        )}
                        <div className="text-lg font-bold text-foreground">${pkg.price}</div>
                        <div className="text-sm font-semibold text-foreground mb-2">{pkg.name}</div>
                        <ul className="space-y-1">
                          {pkg.features.map((f) => (
                            <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                              <CheckCircle2 size={10} className="shrink-0" /> {f}
                            </li>
                          ))}
                        </ul>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="specialRequests">Special Requests</label>
                  <textarea className="border py-2 px-2 rounded-lg h-28" id="specialRequests" placeholder="Any dietary requirements, accessibility needs, or special occasions..." value={form.specialRequests} onChange={(e) => updateForm("specialRequests", e.target.value)} />
                </div>

                <div className="flex justify-between pt-4">
                  <button onClick={() => setStep(1)} className="rounded-full border cursor-pointer px-6">Back</button>
                  <button onClick={() => setStep(3)} disabled={!canProceedStep2} className="rounded-full px-4 cursor-pointer flex items-center bg-main py-2">
                    Book Now
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {/* {step === 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <Card className="lg:col-span-2 border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CreditCard size={20} className="text-primary" />
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Payment Method</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-3 gap-3">
                      {[
                        { value: "card", label: "Credit Card", icon: CreditCard },
                        { value: "bank", label: "Bank Transfer", icon: Hotel },
                        { value: "paypal", label: "PayPal", icon: Plane },
                      ].map((m) => {
                        const Icon = m.icon;
                        return (
                          <Label
                            key={m.value}
                            htmlFor={m.value}
                            className={cn(
                              "flex flex-col items-center gap-2 rounded-xl border-2 p-4 cursor-pointer transition-all",
                              paymentMethod === m.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                            )}
                          >
                            <RadioGroupItem value={m.value} id={m.value} className="sr-only" />
                            <Icon size={20} className={paymentMethod === m.value ? "text-primary" : "text-muted-foreground"} />
                            <span className="text-xs font-medium">{m.label}</span>
                          </Label>
                        );
                      })}
                    </RadioGroup>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" value={form.cardNumber} onChange={(e) => updateForm("cardNumber", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="John Doe" value={form.cardName} onChange={(e) => updateForm("cardName", e.target.value)} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" value={form.expiry} onChange={(e) => updateForm("expiry", e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" type="password" value={form.cvv} onChange={(e) => updateForm("cvv", e.target.value)} />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="rounded-xl bg-muted p-5 space-y-2">
                      <p className="text-sm font-semibold text-foreground">Bank Transfer Details</p>
                      <p className="text-sm text-muted-foreground">Bank: <span className="font-medium text-foreground">Travique International Bank</span></p>
                      <p className="text-sm text-muted-foreground">Account: <span className="font-medium text-foreground">1234-5678-9012</span></p>
                      <p className="text-sm text-muted-foreground">SWIFT: <span className="font-medium text-foreground">TRVQUS33</span></p>
                      <p className="text-xs text-muted-foreground mt-2">Please include your booking reference in the transfer description.</p>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="rounded-xl bg-muted p-5 text-center space-y-3">
                      <p className="text-sm text-muted-foreground">You will be redirected to PayPal to complete your payment securely.</p>
                      <Button variant="outline" className="rounded-full">
                        Connect PayPal
                      </Button>
                    </div>
                  )}

                  <Separator />

                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" checked={agreedTerms} onCheckedChange={(v) => setAgreedTerms(v === true)} />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to the <span className="text-primary font-medium">Terms & Conditions</span> and <span className="text-primary font-medium">Cancellation Policy</span>. I understand that my booking is subject to availability.
                    </Label>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted rounded-lg p-3">
                    <Shield size={16} className="text-primary shrink-0" />
                    Your payment information is encrypted and secure. We never store your card details.
                  </div>

                  <div className="flex justify-between pt-2">
                    <Button variant="outline" onClick={() => setStep(2)} className="rounded-full px-6">Back</Button>
                    <Button onClick={handleSubmit} disabled={!canProceedStep3} className="rounded-full px-8 text-base">
                      Confirm & Pay ${total.toFixed(2)}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              
              <Card className="border-border shadow-lg h-fit sticky top-28">
                <CardHeader>
                  <CardTitle className="text-lg">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {form.destination && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-foreground font-medium">{form.destination}</span>
                    </div>
                  )}
                  {departureDate && returnDate && (
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarIcon size={14} className="text-primary" />
                      <span className="text-muted-foreground">
                        {format(departureDate, "MMM d")} – {format(returnDate, "MMM d, yyyy")}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={14} className="text-primary" />
                    <span className="text-muted-foreground">{adults} Adult{adults > 1 ? "s" : ""}{children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}</span>
                  </div>

                  <Separator />

                  <div className="rounded-lg bg-primary/5 p-3">
                    <div className="text-sm font-semibold text-foreground">{selectedPkg.name}</div>
                    <div className="text-xs text-muted-foreground">${selectedPkg.price}/person</div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (10%)</span>
                      <span className="text-foreground">${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-base">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default BookNow;
