import { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Oferta from '@/components/Oferta';
import WhyClaro from '@/components/WhyClaro';
import Calculator from '@/components/Calculator';
import Fleet from '@/components/Fleet';
import Process from '@/components/Process';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Footer from '@/components/Footer';
import OfertaPage from '@/components/OfertaPage';
import ServiceDetail from '@/components/ServiceDetail';

function HomePage() {
  const [calculatorData, setCalculatorData] = useState<{
    rata: number;
    wplata: number;
    wykup: number;
  } | null>(null);

  const contactRef = useRef<HTMLDivElement>(null);

  const handleApplyConditions = (rata: number, wplata: number, wykup: number) => {
    setCalculatorData({ rata, wplata, wykup });
  };

  return (
    <>
      <Hero />
      <Oferta />
      <WhyClaro />
      <Calculator onApplyConditions={handleApplyConditions} />
      <Fleet />
      <Process />
      <Blog />
      <About contactRef={contactRef} calculatorData={calculatorData} />
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
