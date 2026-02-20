import React from 'react';
import { Play, Check, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export const Model = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-20">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <div className="relative aspect-video bg-neutral-100 rounded-2xl border border-neutral-200 flex items-center justify-center group cursor-pointer overflow-hidden shadow-sm">
             <img src="https://iili.io/qHfuh1S.png" alt="Physical therapy consultation" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Content */}
          <div>
             <div className="inline-block px-3 py-1 bg-[#0BA4AE]/10 text-[#0BA4AE] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Direct Pay Model
             </div>
             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-neutral-900">
                Healthcare centered around you.
             </h1>
             <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                We've removed the barriers between you and your provider. No insurance middlemen, no rushed visits, just pure, unadulterated care designed to get you better, faster.
             </p>
             <ul className="space-y-4 mb-8">
                {['No hidden fees or surprise bills', 'Direct access to your doctor', 'Longer, more meaningful appointments'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0BA4AE]/10 flex items-center justify-center">
                         <Check className="w-3.5 h-3.5 text-[#0BA4AE]" />
                      </div>
                      <span className="text-neutral-700 font-medium">{item}</span>
                   </li>
                ))}
             </ul>
             <div className="flex flex-col sm:flex-row gap-4">
                <a href="#comparison" className="px-8 py-4 bg-[#0BA4AE] text-white font-bold rounded-sm hover:bg-[#088f98] transition-colors uppercase tracking-wide flex items-center justify-center shadow-lg shadow-[#0BA4AE]/20">
                   See Difference
                </a>
                <a href="#comparison" className="px-8 py-4 bg-white border border-neutral-300 text-neutral-900 font-bold rounded-sm hover:bg-neutral-50 transition-colors uppercase tracking-wide flex items-center justify-center">
                   View Pricing
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="bg-slate-50 py-20 border-y border-neutral-200">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4 text-neutral-900">Why choose Direct Pay?</h2>
               <p className="text-neutral-600">See how we stack up against traditional insurance-based clinics.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
               <div className="grid grid-cols-3 bg-slate-100 p-6 border-b border-neutral-200">
                  <div className="font-bold text-neutral-600">Feature</div>
                  <div className="font-bold text-neutral-500 text-center">Traditional Insurance</div>
                  <div className="font-bold text-[#0BA4AE] text-center">ReThrive Direct Pay</div>
               </div>
               
               {[
                  { feature: "Cost Transparency", trad: "Unclear, surprise bills", rethrive: "100% Transparent" },
                  { feature: "Time with Provider", trad: "10-15 minutes", rethrive: "Full 60 minutes" },
                  { feature: "Treatment Process", trad: "Restrictive approval process", rethrive: "Adaptive treatment" },
                  { feature: "Who Provides", trad: "In/Out of Network availability", rethrive: "Doctor you choose" },
                  { feature: "Number of Visits", trad: "20+ (High volume)", rethrive: "5-10 (High quality)" }
               ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 p-6 border-b border-neutral-100 last:border-0 hover:bg-slate-50 transition-colors items-center">
                     <div className="font-medium text-neutral-900">{row.feature}</div>
                     <div className="text-neutral-500 text-center font-medium">{row.trad}</div>
                     <div className="text-neutral-900 text-center font-bold flex items-center justify-center gap-2 bg-[#0BA4AE]/10 py-2 rounded-lg border border-[#0BA4AE]/20">
                        <Check className="w-4 h-4 text-[#0BA4AE]" />
                        {row.rethrive}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 py-20 bg-white">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">What to expect</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed">Our in-home doctor lead practice is designed to give you a real relationship with your Physician. When you choose our insurance-free, at-home physical therapy, you're opting for convenience, personalized care, and fast results.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-neutral-100 -z-10"></div>

            {/* Step 1: Consultation */}
            <div className="bg-white p-8 rounded-xl border border-neutral-200 relative group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md">
               <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-3xl font-black text-[#0BA4AE] mb-8 mx-auto shadow-md group-hover:border-[#0BA4AE] transition-colors">
                  1
               </div>
               <h3 className="text-xl font-bold text-center mb-6 text-neutral-900">Consultation</h3>
               <p className="text-neutral-600 text-sm leading-relaxed">
                  We want to get to know you, your story and what brought you to this point. Our goal is to heal you, but learning who you are is equally as important. We will set our goals and begin some basic root cause analysis.
               </p>
            </div>

            {/* Step 2: Custom Treatment */}
            <div className="bg-white p-8 rounded-xl border border-neutral-200 relative group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md">
               <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-3xl font-black text-[#0BA4AE] mb-8 mx-auto shadow-md group-hover:border-[#0BA4AE] transition-colors">
                  2
               </div>
               <h3 className="text-xl font-bold text-center mb-6 text-neutral-900">Custom Treatment</h3>
               <p className="text-neutral-600 text-sm leading-relaxed">
                  We will work with you and your physician to tailor a custom plan that fits your lifestyle. This includes corrective exercise that we help you perform, manual therapy, and overall lifestyle optimizations. All of this is with input from your doctor.
               </p>
            </div>

            {/* Step 3: Review */}
            <div className="bg-white p-8 rounded-xl border border-neutral-200 relative group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md">
               <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-3xl font-black text-[#0BA4AE] mb-8 mx-auto shadow-md group-hover:border-[#0BA4AE] transition-colors">
                  3
               </div>
               <h3 className="text-xl font-bold text-center mb-6 text-neutral-900">Review</h3>
               <p className="text-neutral-600 text-sm leading-relaxed">
                  We take time to process how our treatment is doing, what's working and what's not. And where we can improve to get you feeling the best.
               </p>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20 border-t border-neutral-200">
         <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-neutral-900">Common Questions</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
               <AccordionItem value="item-1" className="border border-neutral-200 rounded-lg bg-white px-4 shadow-sm">
                  <AccordionTrigger className="text-neutral-900 hover:text-[#0BA4AE] text-lg font-medium py-6">Why don't you accept insurance?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 leading-relaxed pb-6">
                     Insurance companies often dictate the type and duration of treatment, which can limit our ability to provide the best care. By operating outside of the insurance model, we can spend more time with you (60 minutes vs 15), use the most effective treatments, and actually save you money in the long run by getting you better in fewer visits.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-2" className="border border-neutral-200 rounded-lg bg-white px-4 shadow-sm">
                  <AccordionTrigger className="text-neutral-900 hover:text-[#0BA4AE] text-lg font-medium py-6">Can I still use my HSA/FSA card?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 leading-relaxed pb-6">
                     Absolutely! We accept HSA and FSA cards for all of our services. We can also provide you with a superbill that you can submit to your insurance company for potential out-of-network reimbursement, depending on your plan.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-3" className="border border-neutral-200 rounded-lg bg-white px-4 shadow-sm">
                  <AccordionTrigger className="text-neutral-900 hover:text-[#0BA4AE] text-lg font-medium py-6">Do I need a referral to see you?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 leading-relaxed pb-6">
                     In the state of Arizona, you do not need a referral to see a physical therapist. We have direct access, meaning you can come straight to us for evaluation and treatment. If we believe your condition requires medical attention beyond our scope, we will refer you to the appropriate specialist.
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </div>
      </section>

    </div>
  );
};