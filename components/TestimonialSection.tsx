"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Kevin Martine",
    company: "Google Inc",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and free.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Apple Inc",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and free.",
  },
  {
    id: 3,
    name: "Marcus Chen",
    company: "Meta",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and free.",
  },
  {
    id: 4,
    name: "Priya Nair",
    company: "Stripe",
    avatar: "https://i.pravatar.cc/150?img=56",
    rating: 5,
    text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and free.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 justify-center mt-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-blue-500" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  dimmed = false,
}: {
  testimonial: (typeof testimonials)[0];
  dimmed?: boolean;
}) {
  return (
    <div
      className={`relative bg-white rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 w-64 shrink-0 ${
        dimmed ? "opacity-100" : "opacity-100"
      }`}
      style={{
        boxShadow: dimmed
          ? "0 4px 20px rgba(0,0,0,0.05)"
          : "0 20px 60px rgba(0,0,0,0.10)",
      }}
    >
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-100"
      />
      <p className="font-bold text-gray-900 text-base leading-tight">
        {testimonial.name}
      </p>
      <p className="text-gray-400 text-sm mt-0.5">{testimonial.company}</p>

      {/* Quote icon */}
      <div className="mt-4 mb-2">
        <svg
          width="28"
          height="22"
          viewBox="0 0 30 24"
          fill="none"
          className="text-gray-300"
        >
          <path
            d="M0 24V14.6C0 10.7 1.01667 7.35 3.05 4.55C5.08333 1.81667 8.06667 0.15 12 0L13.8 3.05C11.2 3.65 9.25 4.85 7.95 6.65C6.78333 8.25 6.2 10.1 6.2 12.2H12.5V24H0ZM17.5 24V14.6C17.5 10.7 18.5167 7.35 20.55 4.55C22.5833 1.81667 25.5667 0.15 29.5 0L31.3 3.05C28.7 3.65 26.75 4.85 25.45 6.65C24.2833 8.25 23.7 10.1 23.7 12.2H30V24H17.5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed">{testimonial.text}</p>

      <StarRating count={testimonial.rating} />
    </div>
  );
}
const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);
    const prev = () =>
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    const visibleIndices = [
        current % testimonials.length,
        (current + 1) % testimonials.length,
    ];
  return (
       <section className="relative w-full min-h-105 bg-white overflow-hidden flex items-center py-20 px-6">
      {/* World map SVG background */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="w-[65%] h-full bg-[url('/worldmap.png')] bg-cover bg-center bg-no-repeat"/>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 min-w-65 max-w-sm">
          <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-3">
            Testimonial
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Don&apos;t Believe Me
            <br />
            Check What Client
            <br />
            Think Us
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Fermentum luctus convallis non lectus. Aliquam at ut viverra noniqu
            arcu massa laoreet commodo ac.
          </p>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-md"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Cards */}
{/* <div className="w-full h-full bg-[url('/worldmap.png')] bg-cover bg-center bg-no-repeat"> */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {visibleIndices.map((idx, pos) => (
              <TestimonialCard
                key={`${testimonials[idx].id}-${pos}`}
                testimonial={testimonials[idx]}
                dimmed={pos === 1}
              />
            ))}
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-blue-500 w-5" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
