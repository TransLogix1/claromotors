import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Oferta from '@/components/Oferta';
import WhyClaro from '@/components/WhyClaro';
import CalculatorTeaser from '@/components/CalculatorTeaser';
import Fleet from '@/components/Fleet';
import Testimonial from '@/components/Testimonial';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import OfertaPage from '@/components/OfertaPage';
import ServiceDetail from '@/components/ServiceDetail';
import Process from '@/components/Process';
import AboutPage from '@/components/AboutPage';
import ContactPage from '@/components/ContactPage';
import KalkulatorPage from '@/components/KalkulatorPage';
import NegocjujPage from '@/components/NegocjujPage';
import VehicleDetail from '@/components/VehicleDetail';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';

function HomePage() {
  const { lang } = useLanguage();
  useScrollReveal([lang]);

  return (
    <>
      <Hero />
      <Oferta />
      <WhyClaro />
      <CalculatorTeaser />
      <Fleet />
      <Testimonial />
      <Blog />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oferta" element={<OfertaPage />} />
          <Route path="/oferta/:slug" element={<ServiceDetail />} />
          <Route path="/jak-to-dziala" element={<Process standalonePage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/kalkulator" element={<KalkulatorPage />} />
          <Route path="/negocjuj-cene" element={<NegocjujPage />} />
          <Route path="/flota/:id" element={<VehicleDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
