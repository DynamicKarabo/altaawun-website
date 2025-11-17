import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/6f7305cbe55ee9a90fcba9d451af24ec58c6cab1.png';

type Page = 'home' | 'about' | 'impact' | 'values' | 'programs' | 'gallery' | 'get-involved' | 'donate' | 'ways-to-give';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'about' as Page, label: 'About Us' },
    { id: 'values' as Page, label: 'Our Values' },
    { id: 'programs' as Page, label: 'Our Programs' },
    { id: 'impact' as Page, label: 'Our Impact' },
    { id: 'gallery' as Page, label: 'Gallery' },
    { id: 'get-involved' as Page, label: 'Get Involved' },
    { id: 'ways-to-give' as Page, label: 'Ways to Give' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoImage} 
              alt="Al-Taawun Fi Al" 
              className="h-20 md:h-28 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-[#19586d]'
                    : 'text-gray-700 hover:text-[#19586d]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('donate')}
              className="bg-gradient-to-r from-[#f6a947] to-[#a58644] hover:from-[#a58644] hover:to-[#f6a947] text-white px-6"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Button
              onClick={() => handleNavClick('donate')}
              size="sm"
              className="bg-gradient-to-r from-[#f6a947] to-[#a58644] hover:from-[#a58644] hover:to-[#f6a947] text-white"
            >
              Donate
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 transition-colors ${
                  currentPage === item.id
                    ? 'text-[#19586d] bg-[#19586d]/5'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}