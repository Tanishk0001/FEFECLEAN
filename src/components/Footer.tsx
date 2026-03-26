import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <img 
              src="/assest/FEFE CLEAN LOGO.png" 
              alt="FEFE Clean Logo" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Premium residential and commercial cleaning services based in NSW. Elevating your lifestyle through spotless environments.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/fefeclean/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-accent border border-brand-accent/20 hover:bg-brand-accent hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><a href="#home" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-accent transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-brand-accent transition-colors">Find Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-accent">Services</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li>Home Cleaning</li>
              <li>Apartment Cleaning</li>
              <li>Office Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Post-Construction</li>
              <li>Move-In / Move-Out</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-accent">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-accent" />
                <span>+61 000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-accent" />
                <span>fefe.clean.co@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-accent" />
                <span>New South Wales, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-accent/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} FEFE Clean. All rights reserved. NSW Based.
          </p>
          <p className="text-xs text-brand-muted">
            Designed for Premium Living.
          </p>
        </div>
      </div>
    </footer>
  );
}
