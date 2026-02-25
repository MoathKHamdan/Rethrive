import React, { useState } from 'react';
import { X, ShieldCheck, Save, ArrowRight, CheckCircle, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router';

export const Intake = () => {
  const [step, setStep] = useState(1);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      
      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col min-h-[600px]">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-neutral-100 flex justify-between items-center bg-white">
           <div className="flex items-center gap-3">
              <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 tracking-wide">
                 <ShieldCheck className="w-3.5 h-3.5" />
                 HIPAA SECURE
              </div>
              <span className="text-neutral-400 text-sm font-medium">Encrypted End-to-End</span>
           </div>
           <Link to="/" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <X className="w-6 h-6" />
           </Link>
        </div>

        {/* Progress Bar */}
        <div className="bg-neutral-50 px-8 py-4 border-b border-neutral-100">
           <div className="flex items-center justify-between relative">
              {/* Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-neutral-200 -z-10"></div>
              
              {/* Step 1 */}
              <div className={`flex flex-col items-center gap-2 bg-neutral-50 px-2 ${step >= 1 ? 'text-[#0BA4AE]' : 'text-neutral-400'}`}>
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 1 ? 'bg-[#0BA4AE] text-white' : 'bg-neutral-200 text-neutral-500'}`}>1</div>
                 <span className="text-xs font-bold uppercase tracking-wider">Intake</span>
              </div>
              
              {/* Step 2 */}
              <div className={`flex flex-col items-center gap-2 bg-neutral-50 px-2 ${step >= 2 ? 'text-[#0BA4AE]' : 'text-neutral-400'}`}>
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? 'bg-[#0BA4AE] text-white' : 'bg-neutral-200 text-neutral-500'}`}>2</div>
                 <span className="text-xs font-bold uppercase tracking-wider">Verification</span>
              </div>
              
              {/* Step 3 */}
              <div className={`flex flex-col items-center gap-2 bg-neutral-50 px-2 ${step >= 3 ? 'text-[#0BA4AE]' : 'text-neutral-400'}`}>
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 3 ? 'bg-[#0BA4AE] text-white' : 'bg-neutral-200 text-neutral-500'}`}>3</div>
                 <span className="text-xs font-bold uppercase tracking-wider">Confirmation</span>
              </div>
           </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {step === 1 && (
            <div className="p-8 md:p-12">
              <div className="space-y-12">
                  
                  {/* Section: Contact */}
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">Patient Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-neutral-700">First Name</label>
                          <input type="text" className="w-full p-3 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0BA4AE]/20 focus:border-[#0BA4AE] transition-all" placeholder="Jane" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-neutral-700">Last Name</label>
                          <input type="text" className="w-full p-3 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0BA4AE]/20 focus:border-[#0BA4AE] transition-all" placeholder="Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-neutral-700">Email Address</label>
                          <input type="email" className="w-full p-3 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0BA4AE]/20 focus:border-[#0BA4AE] transition-all" placeholder="jane@example.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-neutral-700">Phone Number</label>
                          <input type="tel" className="w-full p-3 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0BA4AE]/20 focus:border-[#0BA4AE] transition-all" placeholder="(555) 555-5555" />
                        </div>
                        {/* NEW: City/Valley Field per Janel */}
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-semibold text-neutral-700">City or Part of the Valley</label>
                          <input type="text" className="w-full p-3 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0BA4AE]/20 focus:border-[#0BA4AE] transition-all" placeholder="e.g., North Scottsdale, Tempe..." />
                        </div>
                    </div>
                  </div>

                  {/* Section: Details */}
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">Clinical Details</h2>
                    <div className="space-y-6">
                        {/* UPDATED: Service Dropdown per Janel */}
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-neutral-700">Type of Service</label>
                          <select className="w-full p-3 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0BA4AE]/20 focus:border-[#0BA4AE] transition-all text-neutral-600">
                              <option>Select a service...</option>
                              <option>Physical Therapy (PT)</option>
                              <option>Occupational Therapy (OT)</option>
                              <option>Wellness Coaching</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-neutral-700">Reason for Inquiry</label>
                          <textarea className="w-full p-3 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0BA4AE]/20 focus:border-[#0BA4AE] transition-all h-32 resize-none" placeholder="Please briefly describe your symptoms, goals, or reason for seeking care..." />
                        </div>
                    </div>
                  </div>

                  {/* Section: Preferences */}
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">Scheduling Preferences</h2>
                    <div className="space-y-6">
                        <div className="space-y-3">
                          <label className="text-sm font-semibold text-neutral-700">Preferred Days</label>
                          <div className="flex flex-wrap gap-2">
                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <button 
                                    key={day}
                                    onClick={() => toggleDay(day)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${selectedDays.includes(day) ? 'bg-[#0BA4AE] text-white border-[#0BA4AE]' : 'bg-white text-neutral-600 border-neutral-300 hover:border-[#0BA4AE] hover:text-[#0BA4AE]'}`}
                                >
                                    {day}
                                </button>
                              ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-neutral-700">Preferred Time of Day</label>
                          <select className="w-full p-3 bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0BA4AE]/20 focus:border-[#0BA4AE] transition-all text-neutral-600">
                              <option>No preference</option>
                              <option>Morning (7am - 11am)</option>
                              <option>Afternoon (12pm - 4pm)</option>
                              <option>Evening (5pm - 8pm)</option>
                          </select>
                        </div>
                    </div>
                  </div>

              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-8 md:p-12 max-w-2xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-[#0BA4AE]">
                <FileText className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-neutral-900">Review Your Details</h2>
                <p className="text-neutral-500 text-lg">Please verify your information before submitting.</p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 text-left space-y-4">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-200">
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">Name</span>
                    <p className="font-medium text-neutral-900">Jane Doe (Example)</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">Email</span>
                    <p className="font-medium text-neutral-900">jane@example.com</p>
                  </div>
                </div>
                <div>
                   <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">Service Requested</span>
                   <p className="font-medium text-neutral-900">Physical Therapy Evaluation</p>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-8 md:p-12 max-w-2xl mx-auto text-center space-y-8 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-neutral-900">Intake Submitted!</h2>
                <p className="text-neutral-500 text-lg max-w-md mx-auto">
                  Thank you for starting your journey with ReThrive. Our team has received your information and will contact you shortly to schedule your appointment.
                </p>
              </div>
              
              <div className="pt-8">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 text-[#0BA4AE] font-bold hover:underline"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step < 3 && (
          <div className="bg-neutral-50 px-8 py-6 border-t border-neutral-100 mt-auto">
            
            {/* Legal Disclaimer */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex gap-3">
                <div className="shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-xs text-blue-800 leading-relaxed">
                  By submitting this form, you acknowledge that this is a preliminary intake and does not establish a doctor-patient relationship until a formal evaluation is conducted. All information is stored securely in compliance with HIPAA regulations.
                </p>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-4">
                <button className="px-6 py-3 border border-neutral-300 text-neutral-600 font-bold rounded-md hover:bg-white hover:border-neutral-400 transition-all flex items-center justify-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Draft
                </button>
                <button 
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#0BA4AE] text-white font-bold rounded-md hover:bg-[#088f98] transition-all shadow-lg shadow-[#0BA4AE]/20 flex items-center justify-center gap-2"
                >
                  {step === 1 ? 'Next Step' : 'Confirm & Submit'}
                  <ArrowRight className="w-4 h-4" />
                </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}; 