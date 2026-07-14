import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Milky Way Tours",
  description:
    "Read the Privacy Policy of Milky Way Tours to understand how we collect, use, and protect your personal information.",
};

const sections = [
  {
    id: 1,
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect the following information when you use our website or book our services:</p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Name, email address, and phone number.</li>
          <li>Travel preferences and booking details.</li>
          <li>Payment information processed through secure payment providers.</li>
          <li>Technical information such as IP address, browser type, and device information.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "How We Use Your Information",
    content: (
      <>
        <ul className="list-disc space-y-2 pl-6">
          <li>To process and manage your bookings.</li>
          <li>To communicate booking confirmations and travel updates.</li>
          <li>To provide customer support.</li>
          <li>To improve our website and services.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Sharing of Information",
    content: (
      <>
        <p>
          We do not sell or rent your personal information. Your information may
          be shared only with trusted third-party service providers, such as
          hotels, airlines, payment processors, or government authorities when
          required by law.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Data Security",
    content: (
      <>
        <p>
          We take reasonable security measures to protect your personal
          information from unauthorized access, loss, misuse, or disclosure.
          However, no method of internet transmission is completely secure.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Cookies",
    content: (
      <>
        <p>
          Our website may use cookies to improve your browsing experience,
          remember your preferences, and analyze website traffic. You can manage
          or disable cookies through your browser settings.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Your Rights",
    content: (
      <>
        <ul className="list-disc space-y-2 pl-6">
          <li>Access your personal information.</li>
          <li>Request corrections to inaccurate information.</li>
          <li>Request deletion of your personal data where permitted by law.</li>
          <li>Contact us regarding any privacy concerns.</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    title: "Third-Party Links",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices or content. We encourage you
          to review their privacy policies before providing personal
          information.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. Continued use
          of our website indicates your acceptance of the revised policy.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-md sm:p-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Effective Date: July 14, 2026
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            At <span className="font-semibold text-blue-600">Milky Way Tours</span>,
            we value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            store, and protect your information when you use our website or
            book our travel services.
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
              Contact Us
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              If you have any questions about this Privacy Policy or how your
              personal information is handled, please contact our support team.
              We will be happy to assist you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
