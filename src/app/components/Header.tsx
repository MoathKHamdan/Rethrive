import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";

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
        className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1c] border-b border-white/5 h-20"
        initial={{ y: 0 }}
        animate={{ y: isHidden ? "-100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="https://iili.io/qHfdUsj.png" alt="ReThrive" className="h-12 md:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[15px] font-medium transition-colors ${location.pathname === link.href ? 'text-[#0BA4AE]' : 'text-slate-300 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-8 relative z-10">

            <Link
              to="/intake"
              className="bg-[#0BA4AE] text-[#1c1c1c] hover:bg-white px-6 py-2.5 font-bold text-[14px] transition-all shadow-sm rounded-sm uppercase tracking-wide"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-[#1c1c1c] pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-2xl font-bold text-white hover:text-[#0BA4AE] uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10 my-4" />
              <Link
                to="/intake"
                className="bg-[#0BA4AE] text-white w-full py-4 font-bold text-lg shadow-lg uppercase tracking-widest hover:bg-white hover:text-[#1c1c1c] transition-colors"
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