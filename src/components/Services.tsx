import { motion } from "motion/react";
import { Home, Building2, Sparkles, Construction, MoveHorizontal, Building, Trash2, Brush } from "lucide-react";

const services = [
  {
    title: "Home Cleaning",
    description: "Regular maintenance to keep your sanctuary spotless and inviting.",
    icon: Home,
    color: "bg-brand-accent/10"
  },
  {
    title: "Apartment Cleaning",
    description: "Specialized care for urban living spaces of all sizes.",
    icon: Building,
    color: "bg-brand-accent/10"
  },
  {
    title: "Office Cleaning",
    description: "Professional environments that boost productivity and health.",
    icon: Building2,
    color: "bg-brand-accent/10"
  },
  {
    title: "Deep Cleaning",
    description: "Thorough, detailed cleaning for those hard-to-reach areas.",
    icon: Sparkles,
    color: "bg-brand-accent/10"
  },
  {
    title: "Post-Construction",
    description: "Removing dust and debris after your renovation or build.",
    icon: Construction,
    color: "bg-brand-accent/10"
  },
  {
    title: "Move-In / Move-Out",
    description: "Ensuring a fresh start for your new home or a clean exit.",
    icon: MoveHorizontal,
    color: "bg-brand-accent/10"
  },
  {
    title: "Window Cleaning",
    description: "Crystal clear views with our professional streak-free service.",
    icon: Brush,
    color: "bg-brand-accent/10"
  },
  {
    title: "Waste Removal",
    description: "Efficient and responsible disposal of unwanted household items.",
    icon: Trash2,
    color: "bg-brand-accent/10"
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-black">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-6 text-white"
          >
            Tailored Cleaning <span className="italic font-light text-brand-accent">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-brand-muted"
          >
            From cozy apartments to expansive commercial spaces, we provide premium care for every corner.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-[32px] group transition-all duration-500 hover:border-brand-accent/40"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-brand-accent/20`}>
                <service.icon className="text-brand-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-xs font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-brand-accent">
                Learn More <MoveHorizontal size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
