import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/95 backdrop-blur-md py-4 border-b border-brand-accent/20 shadow-2xl shadow-brand-accent/5" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <a href="#home" className="flex items-center">
              <img 
                src="public/assets/FEFE CLEAN LOGO.png" 
                alt="FEFE Clean Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-xs uppercase tracking-widest font-semibold text-white/70 hover:text-brand-accent transition-all duration-300"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="h-6 w-[1px] bg-brand-accent/30 mx-2"></div>
            <motion.a
              href="https://instagram.com/fefeclean/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-brand-accent hover:text-brand-gold-light transition-all duration-300 hover:scale-110"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-xs py-2.5 px-8 tracking-widest uppercase font-bold"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <a href="https://instagram.com/fefeclean/" target="_blank" rel="noopener noreferrer" className="p-2 text-brand-accent">
              <Instagram size={20} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-accent"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 border-b border-brand-accent/20 py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white border-b border-brand-accent/10 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="btn-primary w-full mt-4"
            >
              Book a Service
            </button>
          </motion.div>
        )}
      </nav>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
