import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "FEFE Clean transformed my home. Their attention to detail is unmatched, and the team is incredibly professional. I've never seen my kitchen sparkle like this!",
    rating: 5,
    image: "/assets/c1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    content: "We've used several cleaning services for our office, but FEFE Clean is by far the best. They are reliable, thorough, and use products that don't leave harsh smells.",
    rating: 5,
    image: "/assets/c2.jpg"
  },
  {
    name: "Emma Thompson",
    role: "Real Estate Agent",
    content: "As a realtor, I need my listings to look perfect. FEFE Clean is my go-to for move-out cleans. They help me get top dollar for every property.",
    rating: 5,
    image: "/assets/c3.jpg"
  },
  {
    name: "David Wilson",
    role: "Apartment Resident",
    content: "The best part of my week is coming home after FEFE Clean has been there. It's like walking into a luxury hotel every single time.",
    rating: 5,
    image: "/assets/c4.jpg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4 block"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What Our <span className="italic font-light">Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-soft-blue/30 p-10 rounded-[40px] relative overflow-hidden"
            >
              <Quote className="absolute -top-4 -right-4 text-brand-accent/5 w-32 h-32" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              
              <p className="text-lg italic text-brand-accent mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-brand-muted uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
