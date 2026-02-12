import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Homepage } from './pages/Homepage';
import { AboutUs } from './pages/AboutUs';
import { OurValues } from './pages/OurValues';
import { OurPrograms } from './pages/OurPrograms';
import { OurImpact } from './pages/OurImpact';
import { Gallery } from './pages/Gallery';
import { GetInvolved } from './pages/GetInvolved';
import { Donate } from './pages/Donate';
import { WaysToGive } from './pages/WaysToGive';
import { NotFound } from './pages/NotFound';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <ScrollToTop />
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/values" element={<OurValues />} />
              <Route path="/programs" element={<OurPrograms />} />
              <Route path="/impact" element={<OurImpact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/ways-to-give" element={<WaysToGive />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;