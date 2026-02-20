import React, { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Check, Loader2 } from "lucide-react";
import { Link } from 'react-router';

export const Footer = () => {
    return (
        <footer className="bg-white text-slate-900 py-20 border-t border-slate-200">
             <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                     <div>
                         <h3 className="text-2xl font-black mb-6 uppercase">ReThrive Wellness</h3>
                         <p className="text-slate-500 leading-relaxed max-w-sm">
                             Premier in-home physical therapy serving Phoenix & Scottsdale. We come to you, delivering doctoral-level care in the comfort and privacy of your own home.
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
                         <ul className="space-y-4">
                             <li className="flex items-center gap-3 text-slate-600">
                                 <Phone className="w-5 h-5 text-[#0BA4AE]" />
                                 <a href="tel:4809358225" className="hover:text-[#1c1c1c] transition-colors font-medium">(480) 935-8225</a>
                             </li>
                             <li className="flex items-center gap-3 text-slate-600">
                                 <Mail className="w-5 h-5 text-[#0BA4AE]" />
                                 <a href="mailto:Info@rethrivewellness.com" className="hover:text-[#1c1c1c] transition-colors font-medium">Info@rethrivewellness.com</a>
                             </li>
                             <li className="flex items-center gap-3 text-slate-600">
                                 <MapPin className="w-5 h-5 text-[#0BA4AE]" />
                                 <span className="font-medium">Mobile Service (We Come To You)</span>
                             </li>
                         </ul>
                     </div>
                     <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3 text-slate-600 font-medium">
                            <li><Link to="/" className="hover:text-[#088f98] transition-colors">Home</Link></li>
                            <li><Link to="/how-it-works" className="hover:text-[#088f98] transition-colors">How It Works</Link></li>
                            <li><Link to="/experts" className="hover:text-[#088f98] transition-colors">Experts</Link></li>
                            <li><Link to="/ecosystem" className="hover:text-[#088f98] transition-colors">Who We Help</Link></li>
                            <li><Link to="/model" className="hover:text-[#088f98] transition-colors">Our Model</Link></li>
                            <li><Link to="/intake" className="hover:text-[#088f98] transition-colors">Start Intake</Link></li>
                        </ul>
                     </div>
                </div>
                <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} ReThrive Wellness. All rights reserved.</p>
                    <div className="flex items-center gap-2 text-slate-500">
                        <ShieldCheck className="w-4 h-4" />
                        <span>HIPAA Compliant & Secure</span>
                    </div>
                </div>
             </div>
        </footer>
    )
}

export const CTA = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="cta" className="py-40 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent" />
      
      {/* Background blob */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0BA4AE] rounded-full blur-[150px] mix-blend-multiply pointer-events-none opacity-20" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-slate-900">
                <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
                Ready to <br/>
                <span className="text-[#088f98]">ReThrive?</span>
                </h2>
                <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                Take the first step towards pain-free living. Schedule your in-home consultation today.
                </p>
                
                <div className="flex flex-col gap-4 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0BA4AE] flex items-center justify-center text-white text-xs">
                            <Check className="w-4 h-4" />
                        </div>
                        <span className="text-slate-700 font-bold">One-on-one sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0BA4AE] flex items-center justify-center text-white text-xs">
                            <Check className="w-4 h-4" />
                        </div>
                        <span className="text-slate-700 font-bold">Convenient in-home service</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0BA4AE] flex items-center justify-center text-white text-xs">
                            <Check className="w-4 h-4" />
                        </div>
                        <span className="text-slate-700 font-bold">Direct access (no referral needed)</span>
                    </div>
                </div>
            </div>

            {/* Right Form */}
            <div
                className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-2xl shadow-slate-200 relative overflow-hidden"
            >
                {formState === 'success' ? (
                    <div 
                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20 bg-white"
                    >
                        <div className="w-20 h-20 bg-[#0BA4AE]/20 text-[#0BA4AE] rounded-full flex items-center justify-center mb-6">
                            <Check className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                        <p className="text-slate-500">We'll be in touch shortly to schedule your appointment.</p>
                        <button 
                            onClick={() => setFormState('idle')}
                            className="mt-8 text-[#0BA4AE] font-bold hover:underline"
                        >
                            Send another request
                        </button>
                    </div>
                ) : (
                    <form 
                        onSubmit={handleSubmit} 
                        className="space-y-5"
                    >
                        <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase">Request Appointment</h3>
                        
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-neutral-700">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-[#0BA4AE] focus:ring-1 focus:ring-[#0BA4AE] outline-none transition-all placeholder:text-neutral-400"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-bold text-neutral-700">Phone</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-[#0BA4AE] focus:ring-1 focus:ring-[#0BA4AE] outline-none transition-all placeholder:text-neutral-400"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="goal" className="text-sm font-bold text-neutral-700">What is your main goal?</label>
                            <select 
                                id="goal" 
                                className="w-full px-4 py-3 pr-12 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-[#0BA4AE] focus:ring-1 focus:ring-[#0BA4AE] outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_12px_center] bg-no-repeat"
                            >
                                <option value="pain">Relieve Pain</option>
                                <option value="surgery">Recover from Surgery</option>
                                <option value="mobility">Improve Mobility/Balance</option>
                                <option value="wellness">General Wellness</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <button 
                            type="submit" 
                            disabled={formState === 'loading'}
                            className="w-full py-4 bg-[#0BA4AE] hover:bg-slate-900 hover:text-white text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 uppercase tracking-wider"
                        >
                            {formState === 'loading' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                                </>
                            ) : (
                                <>
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                        
                        <p className="text-xs text-slate-400 text-center mt-4">
                            By submitting this form, you agree to our privacy policy.
                        </p>
                    </form>
                )}
            </div>

        </div>
      </div>
    </section>
  );
};