import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-black">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1tzdufVhvnu_m1i4zpUNuog7Y2w8LP42f" 
            alt="FEFE Clean Team" 
            className="rounded-[40px] w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover shadow-2xl border border-brand-accent/20 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-3xl shadow-xl max-w-[240px] border-brand-accent/30">
            <p className="text-3xl font-bold text-brand-accent mb-1">10+</p>
            <p className="text-sm text-white font-medium uppercase tracking-widest">Years of Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-6 block">Our Story</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight text-white tracking-tight">
            Redefining Cleanliness with a <span className="italic font-light metallic-text">Personal Touch</span>
          </h2>
          <p className="text-lg text-brand-muted mb-8 leading-relaxed font-light">
            At FEFE Clean, we believe that a clean home is a happy home. Our journey started with a simple mission: to provide premium, reliable, and meticulous cleaning services to the New South Wales community.
          </p>
          <p className="text-lg text-brand-muted mb-10 leading-relaxed font-light">
            We treat every space as if it were our own, focusing on the details that make a house feel like a home. Our team of trained professionals uses eco-friendly products and modern techniques to ensure your environment is not just clean, but healthy and revitalized.
          </p>
          <p className="text-2xl font-serif italic metallic-text mb-12 border-l border-brand-accent/30 pl-8 py-2">
            "We don’t just clean — we enhance your lifestyle."
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Trained Professionals",
              "Eco-Friendly Products",
              "Modern Equipment",
              "Attention to Detail"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-accent" size={20} />
                <span className="font-medium text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
