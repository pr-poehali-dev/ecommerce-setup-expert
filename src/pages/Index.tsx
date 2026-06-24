import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Portfolio from '@/components/landing/Portfolio';
import Cases from '@/components/landing/Cases';
import Compare from '@/components/landing/Compare';
import About from '@/components/landing/About';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Cases />
        <Compare />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
