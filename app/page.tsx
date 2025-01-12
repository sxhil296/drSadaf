import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Testimonials />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
}