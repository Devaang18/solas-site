'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const particlePositions = [
    { left: 4, top: 14, delay: 0.3, duration: 5.4 },
    { left: 24, top: 54, delay: 1.9, duration: 6.7 },
    { left: 64, top: 24, delay: 3.5, duration: 5.0 },
    { left: 84, top: 74, delay: 1.1, duration: 7.6 },
    { left: 14, top: 84, delay: 2.4, duration: 5.5 },
    { left: 54, top: 9, delay: 1.6, duration: 6.4 },
    { left: 34, top: 89, delay: 2.7, duration: 5.8 },
    { left: 74, top: 44, delay: 4.3, duration: 4.9 },
    { left: 9, top: 49, delay: 1.2, duration: 6.3 },
    { left: 69, top: 19, delay: 3.1, duration: 5.2 },
    { left: 29, top: 69, delay: 4.0, duration: 4.8 },
    { left: 79, top: 59, delay: 2.0, duration: 6.6 },
    { left: 19, top: 29, delay: 3.3, duration: 5.6 },
    { left: 59, top: 79, delay: 4.7, duration: 4.5 }
  ];

  const faqs = [
    {
      question: 'What makes Solas different from generic AI tools (e.g. ChatGPT)?',
      answer: 'Solas isn\'t a chatbot, it\'s a virtual compliance expert team. Unlike generic AI tools, it\'s powered by your own company policies. When you upload them, Solas turns each rule into structured, searchable logic.\n\nWhen you submit a document or ad, Solas identifies the relevant rules, checks compliance step by step, and explains any issues with clear references.\n\nThe result is a secure, hallucination free, transparent compliance report built for accuracy and trust, not guesswork.'
    },
    {
      question: 'Who is Solas built for?',
      answer: 'Solas is built for companies that want to protect their brand. Usually these are companies from highly regulated industries e.g. Gaming, Financial Services, Healthcare, Insurance etc:'
    },
    {
      question: 'Can Solas adapt to our internal compliance policies?',
      answer: 'Yes. Solas is built to reflect your company\'s specific policies, risk appetite, and industry standards, including disclosure rules, substantiation requirements, and proof documentation. Both marketing and compliance teams can add feedback directly within Solas, allowing the system to continuously refine and align with your internal expectations over time.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 relative overflow-hidden matrix-bg content-offset-top-30">
      <div className="absolute inset-0">
        {particlePositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-slate-300/30 rounded-full floating-element"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`
            }}
          />
        ))}
      </div>
      
      <div className="w-full">
        <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative w-full py-8 sm:py-12 md:py-16 z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 section-title-offset">
            <Reveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about Solas and how it can help your team.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 sm:p-6 md:p-8 text-left flex items-center justify-between group hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg sm:rounded-xl flex items-center justify-center border border-blue-200 flex-shrink-0">
                        <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 leading-tight flex-1">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 sm:p-6 md:p-8 pt-0 sm:pt-0 md:pt-0">
                      <div className="pl-11 sm:pl-14 md:pl-16">
                        <div className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

