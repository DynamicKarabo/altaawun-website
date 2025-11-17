import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Homepage } from './components/Homepage';
import { AboutUs } from './components/AboutUs';
import { OurImpact } from './components/OurImpact';
import { OurValues } from './components/OurValues';
import { OurPrograms } from './components/OurPrograms';
import { Gallery } from './components/Gallery';
import { GetInvolved } from './components/GetInvolved';
import { Donate } from './components/Donate';
import { WaysToGive } from './components/WaysToGive';
import { Footer } from './components/Footer';

type Page = 'home' | 'about' | 'impact' | 'values' | 'programs' | 'gallery' | 'get-involved' | 'donate' | 'ways-to-give';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'impact':
        return <OurImpact />;
      case 'values':
        return <OurValues />;
      case 'programs':
        return <OurPrograms />;
      case 'gallery':
        return <Gallery />;
      case 'get-involved':
        return <GetInvolved />;
      case 'donate':
        return <Donate />;
      case 'ways-to-give':
        return <WaysToGive onNavigate={setCurrentPage} />;
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}