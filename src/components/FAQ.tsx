"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee on all our products. Items must be returned in their original condition with tags attached.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. International shipping can take 7-14 business days depending on the destination.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping calculator for specific details.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted.",
    },
  ];

  return (
    <div id="faq" className="relative   px-4 sm:px-6 md:px-12 lg:px-24 pt-12 pb-8 sm:pb-12 md:pb-16 -mt-1 ">
        <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: "url('/timeline-back.png')" }}
      />
      <div className="relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-audiowide text-rose-700 glitch">
            Frequently Asked Questions
          </h1>
          <p className="font-orbitron mt-5 text-[clamp(0.9rem,2vw,1.2rem)] tracking-wide text-rose-400 text-center px-2 sm:px-6">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="bg-black rounded-lg shadow-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div  className="border-b border-red-900">
      <button
        className="w-full py-5 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-red-950/30 transition-colors duration-200 text-start gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-red-50">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-red-500 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-red-500 shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-300 bg-slate-900/50">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default FAQ;
