import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from 'react-router';

const faqs = [
  {
    question: "Do you offer performance programs or consultation services beyond rehab?",
    answer: "Yes! Our 'Thrive' wellness programs are designed for those who want to go beyond recovery. We offer clinical Pilates, strength training, and injury prevention consultations to help you stay active and resilient."
  },
  {
    question: "What makes ReThrive different from other physical therapy providers?",
    answer: "We bring the clinic to you. Unlike traditional high-volume clinics where you might see a therapist for 15 minutes, we provide full hour-long, one-on-one sessions in the comfort of your home with a Doctor of Physical Therapy."
  },
  {
    question: "Do you accept insurance?",
    answer: "We operate as an insurance-free, direct-pay practice. This model allows us to prioritize your care without the restrictions, rushed visits, or surprise bills often associated with insurance. We can provide a superbill for you to submit for out-of-network reimbursement."
  },
  {
    question: "What areas do you serve for in-home visits?",
    answer: "We currently serve the greater Phoenix area, including Scottsdale, Paradise Valley, and surrounding communities. Contact us to see if we cover your specific neighborhood."
  },
  {
    question: "What should I expect during a home visit?",
    answer: "We bring everything needed for a comprehensive session—treatment table, tools, and equipment. You just need a small open space. Sessions typically last 60 minutes and focus 100% on your goals."
  },
  {
    question: "Do I need a referral to start therapy?",
    answer: "No. Arizona is a direct access state, meaning you can start physical therapy immediately without a physician's referral."
  },
  {
    question: "Who will be my therapist?",
    answer: "You will always be treated by a licensed Doctor of Physical Therapy. We do not use aides, assistants, or techs."
  },
  {
    question: "Do you treat older adults or Medicare patients at home?",
    answer: "Yes, we specialize in helping older adults maintain independence and mobility. However, please note we are not a Medicare provider, so services would be self-pay."
  },
  {
    question: "How long are the sessions?",
    answer: "All sessions are a full 60 minutes of dedicated one-on-one time with your physical therapist."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start justify-between text-left group gap-8"
      >
        <span className={`text-lg md:text-xl font-medium leading-snug transition-colors duration-300 ${isOpen ? "text-[#0BA4AE]" : "text-slate-200 group-hover:text-white"}`}>
          {question}
        </span>
        <div className={`shrink-0 border border-white/20 rounded-md p-1 transition-all duration-300 ${isOpen ? "bg-[#0BA4AE] border-[#0BA4AE] text-white" : "text-white group-hover:border-white"}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="pb-8 text-slate-400 leading-relaxed text-base md:text-lg">
                    {answer}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#1c1c1c] text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Sticky Content */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              FAQ's
            </h2>
            <p className="text-slate-400 mb-12 leading-relaxed text-lg">
              Here, you'll find answers to common questions about our services, including the evaluation process, membership options, insurance coverage, and how we support your rehabilitation journey. If you have any additional questions or need further clarification, don't hesitate to reach out to our team.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <Link 
                to="/intake" 
                className="px-8 py-3 bg-[#0BA4AE] text-white font-bold hover:bg-white hover:text-[#1c1c1c] transition-colors shadow-sm text-sm uppercase tracking-wide"
              >
                Contact Us
              </Link>
              
              {/* Custom Corner Bracket Button */}
              <a href="#about" className="relative px-6 py-3 text-white font-bold text-sm uppercase tracking-wide group hover:text-[#0BA4AE] transition-colors">
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-slate-500 group-hover:border-[#0BA4AE] transition-colors" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-slate-500 group-hover:border-[#0BA4AE] transition-colors" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-slate-500 group-hover:border-[#0BA4AE] transition-colors" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-slate-500 group-hover:border-[#0BA4AE] transition-colors" />
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Right Column - Accordion List */}
          <div className="lg:col-span-8">
            <div className="border-t border-white/10">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};