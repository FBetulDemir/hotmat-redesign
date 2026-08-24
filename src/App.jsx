import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import WhyHotmat from './components/WhyHotmat.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Pricing from './components/Pricing.jsx';
import RestaurantApplication from './components/RestaurantApplication.jsx';
import FAQ from './components/FAQ.jsx';
import CallbackSection from './components/CallbackSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyHotmat />
        <HowItWorks />
        <Pricing />
        <RestaurantApplication />
        <FAQ />
        <CallbackSection />
      </main>
      <Footer />
    </>
  );
}
