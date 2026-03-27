import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clientImages = [
    "https://lh3.googleusercontent.com/d/1gP9YAbnU0kDV8ZQf7FWPsQd21Rs1ajYZ",
    "https://lh3.googleusercontent.com/d/185vEuUsebdvLdMaKBGCX8i3Y4YxBJwEX",
    "https://lh3.googleusercontent.com/d/1QaPnpomNncJfdYFNNTm_bY0N8Bfye5j2",
    "https://lh3.googleusercontent.com/d/121jZSr845W_PiF8WU4FU1ev2p7jllqxR"
  ];

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
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.05] mb-8 text-white tracking-tighter">
            Elevate Your Space with <span className="italic font-light metallic-text">Premium</span> Cleaning
          </h1>
          <p className="text-lg md:text-xl text-brand-muted mb-12 max-w-lg leading-relaxed font-light">
            Professional residential and commercial cleaning based in NSW, designed to create spotless, healthy, and stress-free environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center justify-center gap-3"
            >
              Get a Quote <ArrowRight size={16} />
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
              {clientImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
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
              src="https://lh3.googleusercontent.com/d/1WtfraG6EuWK7yxltHc3dnOCmTCnPexAy" 
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
