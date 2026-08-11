const BADGES = [
  "New Zealand Based",
  "Local Tourism Experience",
  "Trusted by International Travellers",
];

export default function MeetFounder() {
  return (
    <section className="bg-[#ECE9DF] px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        {/* Polaroid photo */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-65 -rotate-3 bg-white p-3 pb-5 shadow-[0_25px_50px_-18px_rgba(0,0,0,0.3)] sm:w-75">
            {/* Washi tape */}
            <div
              className="absolute -top-4 left-1/2 h-9 w-28 -translate-x-1/2 -rotate-2 bg-[#C7B393]/80"
              style={{
                clipPath: "polygon(0 18%, 100% 0, 100% 82%, 0% 100%)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
              }}
            />
            <div className="relative aspect-4/5 w-full overflow-hidden bg-[#ddd]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/founderImage.jpeg"
                alt="Manmohan Singh, Founder of MilkyWays Tours & Transfers"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center font-serif text-2xl font-bold text-[#161616]">
              Manmohan Singh
            </p>
          </div>

          <p className="mt-4 text-[15px] italic text-[#2b2b2b]">
            Founder, MilkyWays Tours &amp; Transfers
          </p>
        </div>

        {/* Text content */}
        <div>
          <p className="text-lg font-semibold italic text-[#161616]">
            Meet The Founder
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-[1.2] text-[#161616] sm:text-4xl md:text-[42px]">
            &ldquo;Our goal is simple — to be the trusted local partner and a
            friend you can rely on.&rdquo;
          </h2>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#3a3a3a] sm:text-[16px]">
            Manmohan arrived in New Zealand 10 years ago to study music, but
            found a deeper calling in tourism and hospitality. His journey
            taught him that every memorable trip begins with trust, inspiring
            him to found MilkyWays on the values of transparency,
            reliability, and genuine care, creating a company that travel
            professionals recommend with confidence and travellers trust
            without hesitation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#161616]/45 px-4 py-2 text-center text-[13px] leading-tight text-[#161616]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}