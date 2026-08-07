"use client";

import { useEffect, useState, useCallback } from "react";
import { PackageData } from '@/packagedata/packagedata';
import PhoneInput from "react-phone-number-input";


const TOURS = PackageData.map((tour) => tour.title);


const STORAGE_KEY = "tourInquiryPopup:dismissed";
const SHOW_DELAY_MS = 2200;

type FormState = {
  name: string;
  phone: string;
  email: string;
  tour: string;
};

const initialForm: FormState = { name: "", phone: "", email: "", tour: "" };

export default function TourInquiryPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  // Decide whether to show, once per visit (tab/browser session), on mount.
  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (dismissed) return;
    } catch {
      // sessionStorage unavailable (SSR / privacy mode) — just skip silently.
      return;
    }
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll while open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const dismissForNow = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setOpen(false);
  }, []);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismissForNow();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismissForNow]);

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Enter your name";
    if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email";
    if (!form.tour) next.tour = "Pick a tour";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    try {
      // Same-origin call to our own Next.js API route, which handles the
      // actual write to Google Sheets server-side.
      const res = await fetch("/api/tour-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          tour: form.tour,
          source: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      setTimeout(() => setOpen(false), 1800);
    } catch {
      setStatus("idle");
      alert("Something went wrong sending your request. Please try again.");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-popup-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={dismissForNow}
        className="absolute inset-0 bg-[#0B1B23]/70 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
      />

      {/* Ticket card — scrolls internally on short/mobile viewports instead
          of getting clipped by the screen edge. */}
      <div className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-[20px] animate-[popIn_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-[20px] bg-[#FFFDF9] shadow-[0_30px_80px_-20px_rgba(11,79,108,0.55)] md:grid-cols-[1.05fr_1.4fr]">
          {/* Close button */}
          <button
            onClick={dismissForNow}
            aria-label="Close popup"
            className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#0B4F6C] shadow-md transition hover:bg-white hover:scale-105"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2L14 14M14 2L2 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Left stub — the "boarding pass" side */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-linear-to-br from-[#0B4F6C] via-[#0E5C7A] to-[#123B4F] p-5 pr-12 text-[#F4E9D8] sm:p-7 md:p-8 md:pr-8">
            {/* Decorative flight path — hidden on the smallest screens to
                save space and avoid crowding the text. */}
            <svg
              className="pointer-events-none absolute -bottom-10 -left-10 hidden opacity-20 sm:block"
              width="260"
              height="260"
              viewBox="0 0 260 260"
              fill="none"
            >
              <circle cx="130" cy="130" r="129" stroke="#F4E9D8" strokeDasharray="2 8" />
              <circle cx="130" cy="130" r="90" stroke="#F4E9D8" strokeDasharray="2 8" />
            </svg>

            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF6B4A]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FFB199] sm:text-[11px]">
                Boarding Pass
              </span>

              <h2
                id="tour-popup-title"
                className="mt-4 text-[24px] leading-[1.15] text-white sm:mt-5 sm:text-[28px] md:text-[32px]"
              >
                Where to,
                <br />
                traveler?
              </h2>
              <p className="mt-2.5 max-w-[30ch] text-[13.5px] leading-relaxed text-[#CFE3EA] sm:mt-3 sm:max-w-[26ch] sm:text-[14px]">
                Tell us your dream trip. Our travel desk will call you back
                with a custom itinerary — no obligation.
              </p>
            </div>

            <div className="mt-6 flex gap-4 border-t border-dashed border-[#F4E9D8]/30 pt-4 sm:mt-8 sm:block sm:space-y-3 sm:pt-5">
              <Row label="From" value="Your City" />
              <Row label="To" value="Anywhere" />
              <Row label="Gate" value="Open Now" accent />
            </div>
          </div>

          {/* Perforation divider (desktop only) */}
          <div className="pointer-events-none absolute left-[42%] top-0 hidden h-full md:block">
            <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-[#0B1B23]/70" />
            <div className="h-full border-l-2 border-dashed border-[#0B4F6C]/20" />
            <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-[#0B1B23]/70" />
          </div>

          {/* Right side — the form */}
          <div className="p-5 sm:p-7 md:p-8">
            {status === "success" ? (
              <div className="flex h-full min-h-55 flex-col items-center justify-center text-center sm:min-h-70">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0B4F6C]/10 text-[#0B4F6C]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl text-[#14213D]">
                  Enquiry has been sent!
                </h3>
                <p className="mt-2 max-w-[30ch] text-sm text-[#5B6B75]">
                  Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Our
                  team will reach out shortly to plan your trip.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-lg text-[#14213D]">
                  Get a free custom itinerary
                </h3>
                <p className="mt-1 text-[13px] text-[#5B6B75]">
                  Fill this in — takes 20 seconds.
                </p>

                <div className="mt-5 space-y-4">
                  <Field label="Full name" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Aarav Sharma"
                      className={inputClasses(!!errors.name)}
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Phone number" error={errors.phone}>
                      <PhoneInput
                        international
                        defaultCountry="NZ"
                        value={form.phone}
                        onChange={(value) =>
                          setForm((f) => ({ ...f, phone: value || "" }))
                        }
                        placeholder="Enter phone number"
                        className={`tour-phone-input ${
                          errors.phone ? "tour-phone-input--error" : ""
                        }`}
                      />
                    </Field>

                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        className={inputClasses(!!errors.email)}
                      />
                    </Field>
                  </div>

                  <Field label="Which tour interests you?" error={errors.tour}>
                    <select
                      value={form.tour}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, tour: e.target.value }))
                      }
                      className={inputClasses(!!errors.tour)}
                    >
                      <option value="" disabled>
                        Select a tour
                      </option>
                      {TOURS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FF6B4A] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_10px_25px_-8px_rgba(255,107,74,0.65)] transition hover:bg-[#FF5A36] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Enquiry
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 12h16m0 0l-6-6m6 6l-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-[11px] text-[#9AA7AE]">
                  No spam. We'll only contact you about your trip.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes popIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
         .tour-phone-input.PhoneInput {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          border: 1px solid #dde6e9;
          border-radius: 0.5rem;
          background: #fff;
          padding: 0 0.6rem;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .tour-phone-input.PhoneInput:focus-within {
          border-color: #0b4f6c;
          box-shadow: 0 0 0 3px rgba(11, 79, 108, 0.12);
        }
        .tour-phone-input--error.PhoneInput {
          border-color: #e5484d;
        }
        .tour-phone-input--error.PhoneInput:focus-within {
          box-shadow: 0 0 0 3px rgba(229, 72, 77, 0.15);
        }
        .tour-phone-input .PhoneInputCountry {
          margin-right: 4px;
        }
        .tour-phone-input .PhoneInputCountrySelect {
          font-size: 14px;
        }
        .tour-phone-input .PhoneInputInput {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          padding: 0.625rem 0.1rem;
          font-size: 14px;
          color: #14213d;
        }
        .tour-phone-input .PhoneInputInput::placeholder {
          color: #b5c0c6;
        }
      `}</style>
    </div>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5 text-[11px] sm:flex-row sm:items-center sm:justify-between sm:text-[12px]">
      <span className="uppercase tracking-[0.12em] text-[#CFE3EA]/70">
        {label}
      </span>
      <span
        className={
          accent
            ? "font-semibold text-[#FFB199]"
            : "font-medium text-[#F4E9D8]"
        }
      >
        {value}
      </span>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12.5px] font-medium text-[#14213D]">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-[11.5px] text-[#E5484D]">
          {error}
        </span>
      )}
    </label>
  );
}

function inputClasses(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-white px-3.5 py-2.5 text-[14px] text-[#14213D] outline-none transition",
    "placeholder:text-[#B5C0C6]",
    hasError
      ? "border-[#E5484D] focus:border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]/15"
      : "border-[#DDE6E9] focus:border-[#0B4F6C] focus:ring-2 focus:ring-[#0B4F6C]/12",
  ].join(" ");
}