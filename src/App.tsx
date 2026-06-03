import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sectors from './components/Sectors';
import SwadPartner from './components/SwadPartner';
import WhyUs from './components/WhyUs';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <SwadPartner />
        <WhyUs />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
