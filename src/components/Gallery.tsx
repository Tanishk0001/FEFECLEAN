import { motion } from "motion/react";

const galleryImages = [
  { src: "https://lh3.googleusercontent.com/d/1gP9YAbnU0kDV8ZQf7FWPsQd21Rs1ajYZ", alt: "Luxury Living Space", span: "md:col-span-2 md:row-span-2" },
  { src: "https://lh3.googleusercontent.com/d/185vEuUsebdvLdMaKBGCX8i3Y4YxBJwEX", alt: "Elegant Staircase", span: "md:col-span-1 md:row-span-1" },
  { src: "https://lh3.googleusercontent.com/d/1QaPnpomNncJfdYFNNTm_bY0N8Bfye5j2", alt: "Dining Detail", span: "md:col-span-1 md:row-span-1" },
  { src: "https://lh3.googleusercontent.com/d/121jZSr845W_PiF8WU4FU1ev2p7jllqxR", alt: "Kitchen Perfection", span: "md:col-span-1 md:row-span-1" },
  { src: "https://lh3.googleusercontent.com/d/1WtfraG6EuWK7yxltHc3dnOCmTCnPexAy", alt: "Minimalist Seating", span: "md:col-span-1 md:row-span-1" },
  { src: "https://lh3.googleusercontent.com/d/1tzdufVhvnu_m1i4zpUNuog7Y2w8LP42f", alt: "Arched Window View", span: "md:col-span-1 md:row-span-2" },
  { src: "https://lh3.googleusercontent.com/d/104euv8P5v4aKCZO-SZy8VU_qbQTtIGKE", alt: "Modern Sink", span: "md:col-span-1 md:row-span-1" },
  { src: "https://lh3.googleusercontent.com/d/1SnNM7U75h5MFssR18T6VT2mf0OYokGl4", alt: "Vibrant Bathroom", span: "md:col-span-1 md:row-span-1" },
  { src: "https://lh3.googleusercontent.com/d/1yaQjudq59Fy6ftCCpN910vYx42VtfVYB", alt: "Artistic Interior", span: "md:col-span-2 md:row-span-1" },
  { src: "https://lh3.googleusercontent.com/d/1NuU0IsyTyaX5VNbiafR9Hwqi0cyykIH0", alt: "Premium Finish", span: "md:col-span-1 md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4 block"
          >
            Visual Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Work in <span className="italic font-light">Focus</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-brand-muted"
          >
            A glimpse into the spotless, premium environments we create for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:auto-rows-[300px]">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${image.span} relative group overflow-hidden rounded-[32px]`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-serif italic text-xl">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
