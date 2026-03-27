import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-dark via-black to-brand-dark -z-10" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-accent rounded-full blur-[120px] -z-10"
      />

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-4 bg-brand-accent/10 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border border-brand-accent/20 text-brand-accent"
          >
            Premium Cleaning Experience
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-white">
            Elevate Your Space with <span className="italic font-light text-brand-accent">Premium</span> Cleaning
          </h1>
          <p className="text-lg md:text-xl text-brand-muted mb-10 max-w-lg leading-relaxed">
            Professional residential and commercial cleaning based in NSW, designed to create spotless, healthy, and stress-free environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center justify-center gap-2"
            >
              Get a Quote <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary"
            >
              Book a Service
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`src/assets/c${i}.jpg`}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-brand-accent/20 object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-white">500+ Happy Clients</p>
              <p className="text-brand-muted text-xs">Rated 4.9/5 on Google</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] border border-brand-accent/20">
            <img 
              src="src/assets/c5.jpg" 
              alt="Clean luxury interior" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 glass-card p-8 rounded-2xl z-20 max-w-[240px] border-brand-accent/30"
          >
            <p className="text-xs uppercase tracking-widest mb-2 text-brand-accent font-bold">Our Promise</p>
            <p className="text-sm font-medium italic text-white/90">"We don't just clean — we enhance your lifestyle."</p>
          </motion.div>
        </motion.div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
