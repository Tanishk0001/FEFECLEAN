import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block"
          >
            Find Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Our <span className="italic font-light text-brand-accent">Presence</span></h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            Visit our headquarters in New South Wales. We are dedicated to providing premium cleaning services across the region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-brand-accent/10 p-3 rounded-lg border border-brand-accent/20">
                <MapPin className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Our Location</h3>
                <p className="text-brand-muted">
                  New South Wales, Australia
                </p>
              </div>
            </div>
            
            <div className="p-8 border border-brand-accent/20 rounded-2xl bg-black/40 backdrop-blur-sm">
              <h4 className="text-brand-accent font-serif text-2xl mb-4">NSW Based</h4>
              <p className="text-brand-muted leading-relaxed">
                FEFE Clean is proud to be a locally owned and operated business in NSW, delivering luxury cleaning standards to homes and businesses.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[450px] rounded-3xl overflow-hidden border border-brand-accent/20 shadow-2xl shadow-brand-accent/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.898236162386!2d151.2092955!3d-33.8688197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e879f37%3A0xc1e9f3701e879f37!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1711480000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
