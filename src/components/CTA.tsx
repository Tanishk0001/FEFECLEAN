import { motion } from "motion/react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-24 md:py-40 px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-brand-dark -z-10" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent rounded-full blur-[120px] -z-10 opacity-10"
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif mb-8 text-white"
        >
          Ready for a <span className="italic font-light text-brand-accent">Spotless</span> Space?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl text-brand-muted mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Book your professional cleaning service today and experience the difference of a truly premium clean.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary text-lg px-12 py-4"
          >
            Book Now
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-secondary text-lg px-12 py-4"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
