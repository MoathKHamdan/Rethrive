import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400 text-sm">
      {/* Mobile: vertical stack with centered text. Desktop: 3-column grid with left align */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
               <div className="h-8 w-8 bg-[#0BA4AE] rounded-sm"></div>
               <span className="text-xl font-bold tracking-tight text-white">
                  ReThrive
               </span>
            </Link>
            <p className="mb-6 leading-relaxed max-w-xs">
              Empowering your wellness journey through personalized physical therapy and holistic care.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
               <a href="#" className="text-slate-400 hover:text-[#0BA4AE] hover:underline transition-colors" aria-label="Instagram">
                 <Instagram className="w-5 h-5"/>
               </a>
               <a href="#" className="text-slate-400 hover:text-[#0BA4AE] hover:underline transition-colors" aria-label="Facebook">
                 <Facebook className="w-5 h-5"/>
               </a>
               <a href="#" className="text-slate-400 hover:text-[#0BA4AE] hover:underline transition-colors" aria-label="LinkedIn">
                 <Linkedin className="w-5 h-5"/>
               </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#0BA4AE] hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/experts" className="hover:text-[#0BA4AE] hover:underline transition-colors">
                  Experts
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="hover:text-[#0BA4AE] hover:underline transition-colors">
                  Who We Help
                </Link>
              </li>
              <li>
                <Link to="/model" className="hover:text-[#0BA4AE] hover:underline transition-colors">
                  Our Model
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4 text-[#0BA4AE]" />
                  <a 
                    href="mailto:Info@rethrivewellness.com" 
                    className="hover:text-[#0BA4AE] hover:underline transition-colors"
                  >
                    Info@rethrivewellness.com
                  </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-[#0BA4AE]" />
                  <a 
                    href="tel:4809358225" 
                    className="hover:text-[#0BA4AE] hover:underline transition-colors"
                  >
                    (480) 935-8225
                  </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0BA4AE] mt-1" />
                  <span className="text-center md:text-left">
                    Arizona<br/>In-Home Service
                  </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="container mx-auto px-6 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} ReThrive Wellness. All rights reserved.</p>
        <div className="flex gap-6">
             <a href="#" className="hover:text-white hover:underline transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white hover:underline transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
