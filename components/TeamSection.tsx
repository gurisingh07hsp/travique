const team = [
  { name: "Alicia Raymond", role: "Lead Travel Consultant" },
  { name: "Daniel Hartono", role: "Destination & Itinerary" },
  { name: "Marissa Chan", role: "Customer Experience" },
];
const TeamSection = () => {
  return (
      <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">
            OUR TEAM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 italic">
            Dedicated Travique Travel Experts
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Fermentum luctus convallis non lectus. Aliquam at ut viverra noniqu arcu massa laoreet
            commodo ac. Fermentum luctus convallis. Aliquam at ut
          </p>
        </div>

        {/* Team Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-md overflow-hidden w-full max-w-65 "
            >
              {/* Image placeholder */}
              <div className="w-full aspect-4/3 bg-[#9a8989] relative">
                {/* Avatar circle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-white border-none flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#8d8282]" />
                </div>
              </div>

              {/* Info */}
              <div className="pt-8 pb-6 px-4 text-center">
                <h3 className="text-sm font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-xs text-muted-foreground italic">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="rounded-full px-4 py-2 cursor-pointer bg-blue-600 text-primary">View All Expert</button>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
