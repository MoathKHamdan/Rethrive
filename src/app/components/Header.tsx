import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, CalendarCheck, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import logoImg from "figma:asset/49d554f608539b6ea09d09640cb16274c5f78458.png";

export const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction and toggle visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling DOWN and past threshold -> Hide
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP -> Show
        setIsHidden(false);
      }
      
      // Update tracker
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Experts", href: "/experts" },
    { name: "Who We Help", href: "/ecosystem" },
    { name: "Our Model", href: "/model" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-sm"
        initial={{ y: 0 }}
        animate={{ y: isHidden ? "-100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Top Bar with Phone */}
        <div className="bg-brand-50 border-b border-brand-100">
          <div className="container mx-auto px-6 flex items-center justify-end py-1.5">
            <a href="tel:4809358225" className="flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-[#0BA4AE] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#0BA4AE]" />
              (480) 935-8225
            </a>
          </div>
        </div>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoImg} alt="ReThrive — Wellness Without Limitation" className="h-12 md:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[15px] font-medium transition-colors ${location.pathname === link.href ? 'text-[#0BA4AE]' : 'text-brand-600 hover:text-brand-900'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-8 relative z-10">

            <Link
              to="/intake"
              className="bg-[#0BA4AE] text-white hover:bg-brand-900 px-6 py-2.5 font-bold text-[14px] transition-all shadow-sm rounded-sm uppercase tracking-wide"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="tel:4809358225" className="p-2 text-[#0BA4AE]" aria-label="Call us">
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="p-2 text-brand-900 relative z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-2xl font-bold text-brand-900 hover:text-[#0BA4AE] uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10 my-4" />
              <Link
                to="/intake"
                className="bg-[#0BA4AE] text-white w-full py-4 font-bold text-lg shadow-lg uppercase tracking-widest hover:bg-brand-900 transition-colors"
              >
                Start Intake
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};