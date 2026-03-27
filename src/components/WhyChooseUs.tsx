import { motion } from "motion/react";
import { ShieldCheck, Leaf, Search, Calendar, Award, Heart } from "lucide-react";

const reasons = [
  {
    title: "Professional & Trained Team",
    description: "Our staff undergoes rigorous training to meet high standards.",
    icon: ShieldCheck
  },
  {
    title: "Eco-Friendly Products",
    description: "Safe for your family, pets, and the environment.",
    icon: Leaf
  },
  {
    title: "Attention to Detail",
    description: "We don't just clean; we inspect every corner for perfection.",
    icon: Search
  },
  {
    title: "Flexible Scheduling",
    description: "We work around your busy lifestyle for maximum convenience.",
    icon: Calendar
  },
  {
    title: "Affordable Premium Service",
    description: "Luxury quality cleaning at competitive market rates.",
    icon: Award
  },
  {
    title: "100% Satisfaction",
    description: "If you're not happy, we'll make it right. Guaranteed.",
    icon: Heart
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4 block">The FEFE Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
              Why Discerning Clients <span className="italic font-light">Choose Us</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-10 h-10 bg-brand-soft-green rounded-full flex items-center justify-center">
                    <reason.icon className="text-brand-accent" size={20} />
                  </div>
                  <h4 className="font-bold text-lg">{reason.title}</h4>
                  <p className="text-sm text-brand-muted leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/104euv8P5v4aKCZO-SZy8VU_qbQTtIGKE" 
                alt="Professional cleaner" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-soft-blue rounded-full -z-10 blur-2xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-soft-green rounded-full -z-10 blur-3xl opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
