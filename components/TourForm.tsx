"use client";

import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────
interface TourFormData {
  title: string;
  location: string;
  country: string;
  price: number;
  duration: string;
  description: string;
  bookings: number;
  image: string;
  reviwesCount: number; // keeping the original schema typo
  rating: number;
}

interface TourFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TourFormData) => void;
  initialData?: Partial<TourFormData>;
  mode?: "create" | "edit";
}

const EMPTY_FORM: TourFormData = {
  title: "",
  location: "",
  country: "",
  price: 0,
  duration: "",
  description: "",
  bookings: 0,
  image: "",
  reviwesCount: 0,
  rating: 0,
};

const COUNTRIES = [
  "Indonesia", "India", "Thailand", "Japan", "France", "Italy",
  "Spain", "United Kingdom", "United States", "Australia",
  "Maldives", "Switzerland", "Greece", "Turkey", "UAE",
  "Singapore", "Malaysia", "Vietnam", "Nepal", "Sri Lanka",
];

// ─── Field Config ─────────────────────────────────────────────────
const fields = [
  { name: "title",       label: "Tour Title",       type: "text",   icon: "✈️",  placeholder: "e.g. Bali Paradise Package",  span: 2,  required: true },
  { name: "location",    label: "Location",         type: "text",   icon: "📍",  placeholder: "e.g. Ubud, Bali",             span: 1,  required: false },
  { name: "country",     label: "Country",          type: "select", icon: "🌍",  placeholder: "Select country",              span: 1,  required: false },
  { name: "price",       label: "Price (USD)",      type: "number", icon: "💵",  placeholder: "e.g. 742",                   span: 1,  required: false },
  { name: "duration",    label: "Duration",         type: "text",   icon: "🕐",  placeholder: "e.g. 4 Days 3 Nights",        span: 1,  required: false },
//   { name: "bookings",    label: "Bookings",         type: "number", icon: "🎫",  placeholder: "e.g. 128",                   span: 1,  required: false },
//   { name: "reviwesCount",label: "Reviews Count",    type: "number", icon: "💬",  placeholder: "e.g. 56",                    span: 1,  required: false },
//   { name: "rating",      label: "Rating (0–5)",     type: "number", icon: "⭐",  placeholder: "e.g. 4.8",                   span: 2,  required: false },
  { name: "image",       label: "Image URL",        type: "url",    icon: "🖼️",  placeholder: "https://...",                span: 2,  required: false },
  { name: "description", label: "Description",      type: "textarea",icon: "📝", placeholder: "Describe the tour package…", span: 2,  required: false },
] as const;

type FieldName = typeof fields[number]["name"];

// ─── Modal Component ──────────────────────────────────────────────
export default function TourFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode = "create",
}: TourFormModalProps) {
  const [form, setForm] = useState<TourFormData>({ ...EMPTY_FORM, ...initialData });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Sync initial data
  useEffect(() => {
    if (isOpen) {
      setForm({ ...EMPTY_FORM, ...initialData });
      setErrors({});
      setSubmitted(false);
    }
  }, [isOpen, initialData]);

  // Image preview debounce
  useEffect(() => {
    const t = setTimeout(() => setImagePreview(form.image), 500);
    return () => clearTimeout(t);
  }, [form.image]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<FieldName, string>> = {};
    if (!form.title.trim()) newErrors.title = "Tour title is required";
    if (form.price && form.price < 0)
      newErrors.price = "Price cannot be negative";
    if (form.image && !/^https?:\/\/.+/.test(form.image))
      newErrors.image = "Please enter a valid URL";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: FieldName, value: string) => {
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit(form);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 1600);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

//   const ratingVal = parseFloat(form.rating) || 0;

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .modal-scroll::-webkit-scrollbar { width: 4px; }
        .modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll::-webkit-scrollbar-thumb { background: #f59e0b44; border-radius: 4px; }
        .modal-scroll::-webkit-scrollbar-thumb:hover { background: #f59e0b88; }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-enter { animation: slideUp 0.35s cubic-bezier(0.16,1,0.3,1) forwards; }
        .overlay-enter { animation: fadeIn 0.25s ease forwards; }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
          70%  { transform: scale(1.15) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .check-pop { animation: checkPop 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.1s both; }
      `}</style>

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="overlay-enter fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      >
        {/* Modal */}
        <div
          className="modal-enter relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: "#111118", boxShadow: "0 0 0 1px rgba(245,158,11,0.15), 0 32px 80px rgba(0,0,0,0.7)" }}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)" }} />

          {/* Header */}
          <div className="relative shrink-0 px-8 pt-8 pb-6 border-b border-white/[0.07]">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-amber-400 text-[10px] tracking-[0.18em] uppercase font-semibold">
                    {mode === "edit" ? "Edit Tour" : "New Tour"}
                  </span>
                </div>
                <h2 className="text-white text-2xl font-bold leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {mode === "edit" ? "Update Tour Package" : "Create Tour Package"}
                </h2>
                <p className="text-white/30 text-xs mt-1 font-light tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Fill in the details below to {mode === "edit" ? "update the" : "add a new"} tour
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/40 hover:text-white/80 flex items-center justify-center transition-all text-lg leading-none"
              >
                ×
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="modal-scroll flex-1 overflow-y-auto px-8 py-6">

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-6 rounded-2xl overflow-hidden h-36 relative border border-white/10">
                <img src={imagePreview} alt="preview" className="w-full h-full object-cover"
                  onError={() => setImagePreview("")} />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white/60 text-[10px] uppercase tracking-wider font-semibold">Preview</span>
              </div>
            )}

            {/* Form Grid */}
            <div className="grid grid-cols-2 gap-4">
              {fields.map((field) => (
                <div
                  key={field.name}
                  className={field.span === 2 ? "col-span-2" : "col-span-2 sm:col-span-1"}
                >
                  <label
                    className="flex items-center gap-1.5 text-white/50 text-[11px] tracking-[0.12em] uppercase font-semibold mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span>{field.icon}</span>
                    {field.label}
                    {field.required && <span className="text-amber-400 ml-0.5">*</span>}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      rows={4}
                      placeholder={field.placeholder}
                      value={form[field.name as FieldName]}
                      onChange={(e) => handleChange(field.name as FieldName, e.target.value)}
                      className="w-full resize-none rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 transition-all outline-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: errors[field.name as FieldName] ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(255,255,255,0.08)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) => { if (!errors[field.name as FieldName]) e.currentTarget.style.border = "1px solid rgba(245,158,11,0.4)"; }}
                      onBlur={(e) => { if (!errors[field.name as FieldName]) e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)"; }}
                    />
                  ) : field.type === "select" ? (
                    <select
                      value={form[field.name as FieldName]}
                      onChange={(e) => handleChange(field.name as FieldName, e.target.value)}
                      className="w-full rounded-xl px-4 py-3 text-sm transition-all outline-none appearance-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: form[field.name as FieldName] ? "white" : "rgba(255,255,255,0.2)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <option value="" style={{ background: "#1a1a2e", color: "rgba(255,255,255,0.4)" }}>
                        {field.placeholder}
                      </option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c} style={{ background: "#1a1a2e", color: "white" }}>{c}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as FieldName]}
                    //   step={field.name === "rating" ? "0.1" : undefined}
                    //   min={field.name === "price" || field.name === "bookings" || field.name === "reviwesCount" ? "0" : undefined}
                    //   max={field.name === "rating" ? "5" : undefined}
                      onChange={(e) => handleChange(field.name as FieldName, e.target.value)}
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 transition-all outline-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: errors[field.name as FieldName] ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(255,255,255,0.08)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) => { if (!errors[field.name as FieldName]) e.currentTarget.style.border = "1px solid rgba(245,158,11,0.4)"; }}
                      onBlur={(e) => { if (!errors[field.name as FieldName]) e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)"; }}
                    />
                  )}

                  {/* Error */}
                  {errors[field.name as FieldName] && (
                    <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {errors[field.name as FieldName]}
                    </p>
                  )}

                  {/* Star visual for rating */}
                  {/* {field.name === "rating" && form.rating && (
                    <div className="flex gap-1 mt-2">
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} className={`text-sm transition-all ${s <= Math.round(ratingVal) ? "text-amber-400" : "text-white/15"}`}>★</span>
                      ))}
                      <span className="text-white/30 text-xs ml-1">{form.rating}/5</span>
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="shrink-0 px-8 py-5 border-t border-white/[0.07] flex items-center justify-between gap-3">
            <p className="text-white/20 text-[11px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-amber-400">*</span> Required fields
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 cursor-pointer rounded-xl border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20 text-sm font-medium transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitted}
                className="relative cursor-pointer px-7 py-2.5 rounded-xl text-sm font-semibold transition-all overflow-hidden"
                style={{
                  background: submitted ? "rgba(245,158,11,0.15)" : "linear-gradient(135deg, #f59e0b, #d97706)",
                  color: submitted ? "rgba(245,158,11,0.7)" : "#000",
                  border: submitted ? "1px solid rgba(245,158,11,0.3)" : "none",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: submitted ? "none" : "0 4px 20px rgba(245,158,11,0.3)",
                }}
              >
                {submitted ? (
                  <span className="check-pop inline-flex items-center gap-2">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="16 5 8 14 4 10" />
                    </svg>
                    Saved!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {mode === "edit" ? "✎ Update Tour" : "+ Create Tour"}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// // ─── Demo wrapper ─────────────────────────────────────────────────
// export function TourFormModalDemo() {
//   const [open, setOpen] = useState(false);
//   const [mode, setMode] = useState<"create" | "edit">("create");
//   const [lastSubmit, setLastSubmit] = useState<string | null>(null);

//   const sampleData = {
//     title: "Bali Paradise Package",
//     location: "Ubud",
//     country: "Indonesia",
//     price: 0,
//     duration: "4 Days 3 Nights",
//     bookings: "128",
//     reviwesCount: "56",
//     rating: "4.8",
//     image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
//     description: "Discover the enchanting island of Bali — where ancient temples meet lush rice terraces and vibrant culture.",
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center gap-6 p-8"
//       style={{
//         background: "linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #0d0d15 100%)",
//         fontFamily: "'DM Sans', sans-serif",
//       }}
//     >
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

//       <div className="text-center mb-2">
//         <h1 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
//           Tour Form Modal
//         </h1>
//         <p className="text-white/30 text-sm">Click a button below to open the modal</p>
//       </div>

//       <div className="flex gap-4">
//         <button
//           onClick={() => { setMode("create"); setOpen(true); }}
//           className="px-7 py-3 rounded-2xl text-sm font-semibold text-black transition-all"
//           style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)", boxShadow: "0 4px 20px rgba(245,158,11,0.3)" }}
//         >
//           + Create Tour
//         </button>
//         <button
//           onClick={() => { setMode("edit"); setOpen(true); }}
//           className="px-7 py-3 rounded-2xl text-sm font-semibold text-white/70 border border-white/10 hover:border-amber-500/30 hover:text-white transition-all"
//         >
//           ✎ Edit Tour
//         </button>
//       </div>

//       {lastSubmit && (
//         <div className="mt-2 max-w-sm w-full bg-white/5 border border-amber-500/20 rounded-2xl p-4">
//           <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">Last Submission</p>
//           <pre className="text-white/50 text-[11px] overflow-auto max-h-40">{lastSubmit}</pre>
//         </div>
//       )}

//       <TourFormModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         onSubmit={(data) => { setLastSubmit(JSON.stringify(data, null, 2)); }}
//         initialData={mode === "edit" ? sampleData : undefined}
//         mode={mode}
//       />
//     </div>
//   );
// }