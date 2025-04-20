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
      question: "How big can a team be?",
      answer:
        "Your team can have a minimum of 2 and a maximum of 4 members. Students from any year, any branch, and any college can team up together. No restrictions — just bring your best ideas and enthusiasm!",
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone can! Whether you’re a college student or just someone passionate about tech and innovation — this hackathon is open for all.",
    },
    {
      question: "Is there a registration or participation fee?",
      answer: "Yes — there’s a ₹100 fee per team to confirm your spot.",
    },
    {
      question: "Will travel expenses be reimbursed?",
      answer:
        "As much as we’d love to, we won’t be able to reimburse travel expenses since this is a student-run, non-profit event. But we promise to make it worth your while!",
    },
    {
      question: "What’s the duration of the hackathon?",
      answer:
        "The hackathon follows a hybrid format. The final round will be a 12-hour on-ground event, where shortlisted teams will build and present their working prototypes. The initial idea submission will happen online.",
    },
    {
      question: "Do I need to have a complete idea before the hackathon?",
      answer:
        "Nope! You just need to submit your idea in a PPT during the submission phase. A working prototype is required for the final round though — so make sure to build something cool!",
    },
    {
      question: "Can we use pre-built code or open-source libraries?",
      answer:
        "Absolutely! Feel free to use open-source tools, frameworks, and libraries to supercharge your project.",
    },
    {
      question: "Do we need to bring our own laptops/software?",
      answer:
        "Yes, please! For the final round, make sure to carry your own laptops and any tools you need to build your project.",
    },
    {
      question: "Will participants receive certificates?",
      answer:
        "Of course! Every participant will get a certificate to remember this awesome experience.",
    },
    {
      question: "Will there be food and breaks?",
      answer:
        "Yes! Expect good food, snacks, and fun activities to keep your energy up during the final round.",
    },
  ];

  return (
    <div
      id="faq"
      className="relative   px-4 sm:px-6 md:px-12 lg:px-24 pt-12 pb-8 sm:pb-12 md:pb-16 -mt-1 "
    >
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
    <div className="border-b border-red-900">
      <button
        className="w-full py-5 px-6 flex flex-row justify-between items-start cursor-pointer sm:items-center hover:bg-red-950/30 transition-colors duration-200 text-start gap-2"
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
