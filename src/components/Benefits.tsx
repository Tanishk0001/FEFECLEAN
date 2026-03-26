import { motion } from "motion/react";
import { Sparkles, Clock, Zap, Smile, Coffee } from "lucide-react";

const benefits = [
  {
    title: "Healthier Environment",
    description: "Eliminate allergens and bacteria for a safer home.",
    icon: Sparkles
  },
  {
    title: "Saves Time & Effort",
    description: "Focus on what matters while we handle the chores.",
    icon: Clock
  },
  {
    title: "Reduces Stress",
    description: "A tidy space leads to a calm and peaceful mind.",
    icon: Zap
  },
  {
    title: "Improves Productivity",
    description: "Work better in an organized and clean workspace.",
    icon: Coffee
  },
  {
    title: "Comfort & Peace",
    description: "Experience the true meaning of coming home to relax.",
    icon: Smile
  }
];

export default function Benefits() {
  return (
    <section className="bg-brand-accent text-white overflow-hidden">
      <div className="section-padding">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-semibold tracking-widest uppercase opacity-60 mb-4 block"
            >
              Emotional Well-being
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              A Cleaner Space is a <span className="italic font-light">Better Life</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg opacity-70 mb-10"
            >
              We believe your environment directly impacts your quality of life. Our mission is to give you back your time and peace of mind.
            </motion.p>
            <button className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-accent">
              Experience the Difference
            </button>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <benefit.icon className="mb-6 opacity-80" size={32} />
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
