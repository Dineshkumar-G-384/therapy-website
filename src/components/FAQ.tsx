'use client';

import { useState } from "react";

const faqs = [
  {
    question: "What can I expect during my first therapy session?",
    answer:
      "Your first session is a chance for us to get to know each other. We’ll talk about what brings you in, your goals for therapy, and how I can support you. There’s no pressure to share everything right away—we’ll move at your pace.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes—all virtual sessions via Zoom.",
  },
  {
      question: "How long is a typical therapy session?",
      answer:
      "Sessions are usually 50 minutes long. In some cases, longer sessions can be arranged based on your needs or the type of therapy you're doing.",
  },
  {
      question: "What is your cancellation policy?",
      answer:
        "24-hour notice required",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Is everything I share confidential?",
    answer:
      "Absolutely. Our sessions are private and protected. I follow strict confidentiality guidelines, and we'll go over those in detail during our first meeting.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-indigo-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-10">Frequently Asked Questions</h2>

        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-indigo-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-white px-6 py-4 text-left text-indigo-700 font-medium hover:bg-indigo-100 transition-all duration-300"
              >
                <span>{faq.question}</span>
                <span className="text-indigo-500 text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-indigo-200 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
