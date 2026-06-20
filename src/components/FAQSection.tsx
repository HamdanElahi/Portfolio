import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one for visual feedback

  const faqs: FAQItem[] = [
    {
      question: "What kinds of businesses do you work with?",
      answer: "I help startups, agencies, e-commerce brands, and service businesses streamline operations using AI and workflow automation."
    },
    {
      question: "What tools can you integrate with?",
      answer: "I work with n8n and integrate with hundreds of platforms including Google Workspace, Slack, HubSpot, Notion, Airtable, Shopify, OpenAI, Anthropic, Gmail, Stripe, and custom APIs."
    },
    {
      question: "How long does an automation project take?",
      answer: "Simple workflows can be delivered within a few days, while larger systems involving multiple integrations and AI agents typically take one to three weeks."
    },
    {
      question: "Do I need technical knowledge to use the automations?",
      answer: "No. I design systems that are easy to operate and maintain, with clear documentation and user-friendly workflows."
    },
    {
      question: "Can you work with my existing software stack?",
      answer: "Yes. I specialize in building around your current tools rather than forcing you to replace them."
    },
    {
      question: "What if my business processes are complex?",
      answer: "Complex workflows are exactly where automation creates the most value. During the discovery call, we'll identify bottlenecks and design a scalable architecture tailored to your operations."
    },
    {
      question: "Do you provide support after delivery?",
      answer: "Yes. Ongoing support, optimization, and maintenance options are available to ensure your automations continue to perform reliably."
    },
    {
      question: "How much ROI can automation provide?",
      answer: "The impact varies by business, but many workflows save dozens of hours each month, reduce errors, and enable teams to focus on higher-value work."
    },
    {
      question: "Is my data secure?",
      answer: "Security and reliability are core priorities. I build event-driven and decoupled systems with proper authentication and best practices to protect sensitive business data."
    },
    {
      question: "How do we get started?",
      answer: "Simply book a free 15-minute discovery call. We'll review your current workflows, identify automation opportunities, and create a roadmap for implementation."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0e0e10] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,109,31,0.02)_0%,rgba(14,14,16,0)_80%)] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-[#1c1b1d]/80 text-xs font-semibold text-[#ffb596] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#ff6d1f]" /> Help & Information
          </div>
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#e5e1e4] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-stone-400 text-sm max-w-xl mx-auto">
            Everything you need to know about automation partnerships, technology selection, and execution frameworks.
          </p>
        </div>

        {/* Interactive FAQ Grid/List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="group border border-white/5 rounded-2xl bg-[#1c1b1d]/40 hover:bg-[#1c1b1d]/60 transition-colors duration-300 overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-all"
                >
                  <span className="font-sans font-medium text-sm sm:text-base text-[#e5e1e4] group-hover:text-[#ffb596] transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#ff6d1f]/10 text-stone-400 group-hover:text-[#ff6d1f] transition-all duration-200">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-400 leading-relaxed border-t border-white/5 font-sans bg-[#131315]/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
