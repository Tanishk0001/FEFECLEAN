import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Benefits />
        <Gallery />
        <Location />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
