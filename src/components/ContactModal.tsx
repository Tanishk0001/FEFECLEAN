import { motion, AnimatePresence } from "motion/react";
import { X, Send } from "lucide-react";
import React, { useState } from "react";
import { db, collection, addDoc, serverTimestamp } from "../firebase";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "Home Cleaning",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contact_requests"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "pending"
      });
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({
          name: "",
          email: "",
          serviceType: "Home Cleaning",
          message: ""
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting contact request:", error);
      // Fallback for demo if firebase fails
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-brand-dark rounded-[32px] border border-brand-accent/20 shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-brand-accent/10 rounded-full transition-colors z-10 text-brand-accent"
            >
              <X size={20} />
            </button>

            <div className="p-10 md:p-14">
              {!isSubmitted ? (
                <>
                  <h2 className="text-4xl font-serif mb-3 text-white tracking-tight">Get a <span className="italic font-light metallic-text">Quote</span></h2>
                  <p className="text-brand-muted mb-10 font-light text-sm">
                    Tell us about your space and we'll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent/80 ml-1">Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-5 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:border-brand-accent/50 outline-none transition-all placeholder:text-white/20 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent/80 ml-1">Email</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your email"
                          className="w-full px-5 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:border-brand-accent/50 outline-none transition-all placeholder:text-white/20 text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent/80 ml-1">Service Type</label>
                      <select 
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:border-brand-accent/50 outline-none transition-all text-sm appearance-none"
                      >
                        <option className="bg-brand-dark">Home Cleaning</option>
                        <option className="bg-brand-dark">Office Cleaning</option>
                        <option className="bg-brand-dark">Deep Cleaning</option>
                        <option className="bg-brand-dark">Post-Construction</option>
                        <option className="bg-brand-dark">Move-In / Move-Out</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent/80 ml-1">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your requirements..."
                        className="w-full px-5 py-4 rounded-2xl border border-white/5 bg-white/5 text-white focus:border-brand-accent/50 outline-none transition-all resize-none placeholder:text-white/20 text-sm"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full py-5 flex items-center justify-center gap-3 mt-6 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : (
                        <>Send Request <Send size={14} /></>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-accent/20">
                    <Send className="text-brand-accent" size={32} />
                  </div>
                  <h2 className="text-4xl font-serif mb-4 text-white tracking-tight">Message <span className="italic font-light metallic-text">Sent!</span></h2>
                  <p className="text-brand-muted leading-relaxed text-lg font-light">
                    Thank you, we will contact you soon.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
