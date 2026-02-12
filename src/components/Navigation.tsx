import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';
import logoImage from '@/assets/logo.webp';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/values', label: 'Our Values' },
    { path: '/programs', label: 'Our Programs' },
    { path: '/impact', label: 'Our Impact' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/ways-to-give', label: 'Ways to Give' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={logoImage}
              alt="Al-Taawun Fi Al"
              className="h-20 md:h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors ${isActive
                    ? 'text-[#19586d] font-medium'
                    : 'text-gray-700 hover:text-[#19586d]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild
              className="bg-gradient-to-r from-[#f6a947] to-[#a58644] hover:from-[#a58644] hover:to-[#f6a947] text-white px-6"
            >
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Button asChild
              size="sm"
              className="bg-gradient-to-r from-[#f6a947] to-[#a58644] hover:from-[#a58644] hover:to-[#f6a947] text-white"
            >
              <Link to="/donate">Donate</Link>
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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden border-t border-gray-200 overflow-hidden"
            >
              <div className="py-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block w-full text-left px-4 py-3 transition-colors ${isActive
                        ? 'text-[#19586d] bg-[#19586d]/5 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}