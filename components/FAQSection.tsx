'use client'
import { useState } from 'react'

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
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  return (
     <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left Side */}
          <div className="lg:w-85 shrink-0">
            <p className="text-xs uppercase tracking-[0.2em] txt-main font-semibold mb-4">
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
              <div className="w-12 h-12 rounded-full bg-main" />
              <div>
                <p className="text-sm font-bold text-foreground">Maddison Down</p>
                <p className="text-xs txt-main font-medium">Support 24 Hours</p>
              </div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="flex-1">
            <div defaultValue="item-0" className="w-full">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${index == selectedQuestion && 'shadow-xl'} p-4 rounded-3xl mt-4`}
                >
                  <div className="text-sm md:text-base font-semibold text-foreground hover:no-underline flex justify-between">
                    <p>{faq.question}</p>
                    <button className='cursor-pointer' onClick={()=> {selectedQuestion == index ? setSelectedQuestion(-1) : setSelectedQuestion(index)}}>{index == selectedQuestion ? '_' : '+'}</button>
                  </div>
                  <div className={`${index != selectedQuestion && 'hidden'} text-sm text-muted-foreground leading-relaxed mt-3`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
