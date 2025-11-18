import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
// import Resources from './components/Resources';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesBar />
      <Services />
      <About />
      <WhyChooseUs />
      {/* <Pricing /> */}
      <Testimonials />
      {/* <Resources /> */}
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
