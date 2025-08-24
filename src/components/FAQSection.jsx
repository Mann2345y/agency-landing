"use client";

import React, { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What technologies do you use for web development?",
      answer:
        "We specialize in React, Next.js, TypeScript, Tailwind CSS, and modern web technologies to build high-performance websites and web applications. Our tech stack ensures scalability, performance, and maintainability.",
    },
    {
      id: 2,
      question: "How long does it take to build a website?",
      answer:
        "Project timelines vary based on complexity and requirements. Simple websites typically take 2-4 weeks, while complex web applications can take 6-12 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
      id: 3,
      question: "Do you provide SEO optimization services?",
      answer:
        "Yes, we provide comprehensive SEO optimization including technical SEO, performance optimization, content strategy, and ongoing SEO maintenance to improve your search engine rankings.",
    },
    {
      id: 4,
      question: "What's included in your web development package?",
      answer:
        "Our packages include custom design, responsive development, SEO optimization, performance optimization, testing, deployment, and 30 days of post-launch support. We also provide training and documentation.",
    },
    {
      id: 5,
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, we offer various maintenance packages including security updates, performance monitoring, content updates, and technical support to keep your website running smoothly.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Header */}
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-poppins"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-inter">
            Get answers to common questions about our web development services,
            process, and support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-base font-semibold text-gray-900 font-poppins pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                    openFAQ === faq.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openFAQ === faq.id && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-6 pb-4 text-gray-700 font-inter leading-relaxed"
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 font-inter">
            Our team is here to help you with any questions about our web
            development services.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 font-inter"
          >
            Get in Touch
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
