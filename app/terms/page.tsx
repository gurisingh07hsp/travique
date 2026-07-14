import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Milky Way Tours",
  description:
    "Read the Terms & Conditions for using Milky Way Tours and booking our travel services.",
};

const Terms = () => {
    const sections = [
    {
        id: 1,
        title: "Acceptance of Terms",
        content: (
        <>
            <p>
            By accessing or using the Milky Way Tours website and booking any of
            our travel services, you agree to be bound by these Terms &
            Conditions. If you do not agree with any part of these terms, please
            discontinue using our website and services.
            </p>
        </>
        ),
    },
    {
        id: 2,
        title: "Booking Policy",
        content: (
        <>
            <ul className="list-disc space-y-2 pl-6">
            <li>All bookings are subject to availability and confirmation.</li>
            <li>
                A booking is confirmed only after the required payment has been
                successfully received.
            </li>
            <li>
                Customers are responsible for providing accurate personal and travel
                information.
            </li>
            <li>
                We reserve the right to refuse or cancel bookings containing
                incorrect or misleading information.
            </li>
            </ul>
        </>
        ),
    },
    {
        id: 3,
        title: "Pricing & Payments",
        content: (
        <>
            <ul className="list-disc space-y-2 pl-6">
            <li>
                All prices displayed on our website are subject to change without
                prior notice until a booking is confirmed.
            </li>
            <li>
                Payments are processed securely through trusted third-party payment
                gateways.
            </li>
            <li>
                Customers are responsible for any applicable taxes, bank charges,
                or currency conversion fees.
            </li>
            </ul>
        </>
        ),
    },
    {
        id: 4,
        title: "Cancellation & Refund Policy",
        content: (
        <>
            <ul className="list-disc space-y-2 pl-6">
            <li>
                Cancellation requests must be submitted through our official support
                channels.
            </li>
            <li>
                Refund eligibility depends on the cancellation timing and package
                booked.
            </li>
            <li>
                Certain promotional offers or special packages may have separate
                cancellation policies.
            </li>
            <li>
                Processing fees charged by payment providers may not be refundable.
            </li>
            </ul>
        </>
        ),
    },
    {
        id: 5,
        title: "Changes to Bookings",
        content: (
        <>
            <ul className="list-disc space-y-2 pl-6">
            <li>
                Requests for booking modifications are subject to availability.
            </li>
            <li>
                Additional charges may apply depending on the service provider's
                policies.
            </li>
            <li>
                We reserve the right to modify itineraries due to weather,
                government regulations, operational requirements, or unforeseen
                circumstances.
            </li>
            </ul>
        </>
        ),
    },
    {
        id: 6,
        title: "Customer Responsibilities",
        content: (
        <>
            <ul className="list-disc space-y-2 pl-6">
            <li>
                Follow the instructions provided by tour guides and local
                authorities.
            </li>
            <li>
                Respect local customs, laws, and fellow travelers throughout the
                journey.
            </li>
            <li>Arrive on time for scheduled departures and activities.</li>
            <li>
                Any disruptive or unsafe behavior may result in removal from the
                tour without refund.
            </li>
            </ul>
        </>
        ),
    },
    {
        id: 7,
        title: "Force Majeure",
        content: (
        <>
            <p>
            Milky Way Tours shall not be held responsible for delays,
            cancellations, or failures caused by events beyond our reasonable
            control, including but not limited to:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Natural disasters</li>
            <li>Floods, earthquakes, or fires</li>
            <li>Pandemics or epidemics</li>
            <li>Government restrictions</li>
            <li>War or civil unrest</li>
            <li>Transportation strikes</li>
            <li>Severe weather conditions</li>
            </ul>
        </>
        ),
    },
    {
        id: 8,
        title: "Privacy",
        content: (
        <>
            <p>
            We respect your privacy and are committed to protecting your personal
            information. Any information collected during the booking process is
            used only for providing our services, processing bookings, customer
            support, and legal compliance. Please review our Privacy Policy for
            more details on how we collect, use, and protect your information.
            </p>
        </>
        ),
    },
    {
        id: 9,
        title: "Website Availability",
        content: (
        <>
            <p>
            While we strive to ensure uninterrupted access to our website, we do
            not guarantee that it will always be available, error-free, or free
            from viruses or technical issues. Maintenance and unexpected outages
            may occur from time to time.
            </p>
        </>
        ),
    },
    {
        id: 10,
        title: "User Accounts",
        content: (
        <>
            <ul className="list-disc space-y-2 pl-6">
            <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
            </li>
            <li>
                Notify us immediately if you suspect unauthorized access to your
                account.
            </li>
            <li>
                We reserve the right to suspend or terminate accounts involved in
                fraudulent, abusive, or unlawful activities.
            </li>
            </ul>
        </>
        ),
    },
    {
        id: 11,
        title: "Changes to These Terms",
        content: (
        <>
            <p>
            Milky Way Tours may update these Terms & Conditions at any time to
            reflect changes in our services, legal requirements, or operational
            practices. Updated terms will become effective immediately upon being
            published on this page. Continued use of our website constitutes your
            acceptance of the revised Terms & Conditions.
            </p>
        </>
        ),
    },
    ];
  return (
        <main className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-md sm:p-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Effective Date: July 14, 2026
          </p>

          <p className="mt-6 text-gray-700 leading-8">
            Welcome to{" "}
            <span className="font-semibold text-blue-600">
              Milky Way Tours
            </span>
            . These Terms & Conditions govern your use of our website and the
            travel services offered through it. By accessing our website or
            booking any tour or travel-related service, you agree to comply with
            these Terms & Conditions.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.id}>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  {section.id}. {section.title}
                </h2>

                <div className="space-y-4 leading-8 text-gray-700">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Questions?
            </h3>

            <p className="mt-3 text-gray-700 leading-7">
              If you have any questions regarding these Terms & Conditions,
              please contact our support team. We are happy to assist you with
              any concerns related to your bookings or use of our services.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Terms
