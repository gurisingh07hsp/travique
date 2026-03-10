import React from 'react'

const faqs = [
  {
    question: "How do I book a trip with Travique?",
    answer:
      "Vitae tortor arcu eleifend nec massa dictum purus. Erat varius vulputate orci lacus gravida molestie habitant. Convallis massa hac proin rutrum nisi habitasse. Amet etiam dignissim.",
  },
  {
    question: "How can I track my ride in real-time?",
    answer:
      "Vitae tortor arcu eleifend nec massa dictum purus. Erat varius vulputate orci lacus gravida molestie habitant.",
  },
  {
    question: "Is it possible to schedule a trip in advance?",
    answer:
      "Vitae tortor arcu eleifend nec massa dictum purus. Erat varius vulputate orci lacus gravida molestie habitant.",
  },
  {
    question: "Can I book for someone else?",
    answer:
      "Vitae tortor arcu eleifend nec massa dictum purus. Erat varius vulputate orci lacus gravida molestie habitant.",
  },
];
const FAQSection = () => {
  return (
     <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left Side */}
          <div className="lg:w-85 shrink-0">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              QUESTIONS & ANSWERS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Fermentum luctus convallis non lectus. Aliquam at ut viverra noniqu arcu massa laoreet commodo ac.
            </p>

            {/* Support person */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary" />
              <div>
                <p className="text-sm font-bold text-foreground">Maddison Down</p>
                <p className="text-xs text-primary font-medium">Support 24 Hours</p>
              </div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="flex-1">
            {/* <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border py-1"
                >
                  <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
