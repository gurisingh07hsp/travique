import { MapPin, Briefcase, Plane, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose Your Destination",
    description: "Adipiscing turpis sed faucibus magna at sit tincidunt. Omagna at sit faucibus magna. Faucibus magna",
  },
  {
    icon: Briefcase,
    title: "Plan Your Journey",
    description: "Adipiscing turpis sed faucibus magna at sit. Omagna at sit. faucibus magna at sit tincidunt.",
  },
  {
    icon: Plane,
    title: "Enjoy a Seamless",
    description: "Adipiscing turpis sed faucibus magna at sit. Omagna at sit. faucibus magna Omagna at sit.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Easy Payment",
    description: "Adipiscing turpis sed faucibus magna at sit. Omagna at sit. Omagna at sit. faucibus magna.",
  },
];
const HowItWorksSection = () => {
  return (
     <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-lg mx-auto">
            A Simple Journey to Your Perfect Travel Experience
          </h2>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex text-center px-4">

                <div className={`flex flex-col items-center ${index%2 != 0 && 'lg:mt-20'}`}>
                    {/* Icon circle */}
                    <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-5">
                    <step.icon className="w-7 h-7 text-blue-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-50">
                    {step.description}
                    </p>
                </div>
                              {/* Curved arrow connector */}
              {index < steps.length - 1 && index%2 == 0 ? (
                <svg className="mt-8 ms-4 hidden lg:block" width="76" height="34" viewBox="0 0 76 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.251953 3.73406C15.4305 -0.730229 50.0734 -3.23023 67.2162 22.4841" stroke="#7B7B7B" strokeWidth="1.78571"/>
                    <path d="M73.4663 17.1274L60.9663 26.9489L75.252 33.1989L73.4663 17.1274Z" fill="#7B7B7B"/>
                </svg>
              ) : index < steps.length - 1 && (
                <svg className="mt-20 ms-4 hidden lg:block" width="76" height="34" viewBox="0 0 76 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.251953 29.4649C15.4305 33.9292 50.0734 36.4292 67.2162 10.7149" stroke="#7B7B7B" strokeWidth="1.78571"/>
                    <path d="M73.4663 16.0715L60.9663 6.2501L75.252 0.000104904L73.4663 16.0715Z" fill="#7B7B7B"/>
                </svg>

              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
