import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "FEFE Clean transformed my home. Their attention to detail is unmatched, and the team is incredibly professional. I've never seen my kitchen sparkle like this!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/d/1gP9YAbnU0kDV8ZQf7FWPsQd21Rs1ajYZ"
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    content: "We've used several cleaning services for our office, but FEFE Clean is by far the best. They are reliable, thorough, and use products that don't leave harsh smells.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/d/185vEuUsebdvLdMaKBGCX8i3Y4YxBJwEX"
  },
  {
    name: "Emma Thompson",
    role: "Real Estate Agent",
    content: "As a realtor, I need my listings to look perfect. FEFE Clean is my go-to for move-out cleans. They help me get top dollar for every property.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/d/1QaPnpomNncJfdYFNNTm_bY0N8Bfye5j2"
  },
  {
    name: "David Wilson",
    role: "Apartment Resident",
    content: "The best part of my week is coming home after FEFE Clean has been there. It's like walking into a luxury hotel every single time.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/d/121jZSr845W_PiF8WU4FU1ev2p7jllqxR"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-primary">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent mb-6 block"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif mb-8 text-white tracking-tight"
          >
            What Our <span className="italic font-light metallic-text">Clients Say</span>
          </motion.h2>
        </div>
 
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-dark/40 p-12 rounded-[48px] relative overflow-hidden border border-white/5 hover:border-brand-accent/20 transition-colors duration-500"
            >
              <Quote className="absolute -top-6 -right-6 text-brand-accent/5 w-40 h-40" />
              
              <div className="flex gap-1.5 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              
              <p className="text-xl italic text-white/90 mb-10 leading-relaxed relative z-10 font-light">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-5">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border border-brand-accent/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-[10px] text-brand-muted uppercase tracking-[0.2em] font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
