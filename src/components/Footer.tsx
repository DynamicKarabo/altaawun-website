import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Music,
} from "lucide-react";

import { Link } from 'react-router-dom';

export function Footer() {

  return (
    <footer className="bg-[#19586d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f6a947] to-[#a58644] rounded-lg flex items-center justify-center">
                <span className="text-white">AT</span>
              </div>
              <div>
                <div className="text-white">Al-Taawun Fi Al</div>
              </div>
            </div>
            <p
              className="text-[#a58644] italic mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              "Reveal Concealed Capabilities"
            </p>
            <p className="text-white/70 text-sm mb-4">
              Transforming communities across South Africa through sustainable
              welfare, water, and education programs.
            </p>
            <div className="text-sm text-white/60">
              NPO: 235-732
              <br />
              Section 18A Approved
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-[#f6a947] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-[#f6a947] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/values" className="text-white/70 hover:text-[#f6a947] transition-colors">
                  Our Values
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/70 hover:text-[#f6a947] transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-white/70 hover:text-[#f6a947] transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-[#f6a947] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-white/70 hover:text-[#f6a947] transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/ways-to-give" className="text-white/70 hover:text-[#f6a947] transition-colors">
                  Ways to Give
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links - Certifications & Documents */}
          <div>
            <h3 className="text-white mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/documents/privacy-policy.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#f6a947] transition-colors flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/documents/proudly-sa-certificate.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#f6a947] transition-colors flex items-center gap-1"
                >
                  <span>Proudly SA Certification</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/documents/sars-pbo-certificate.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#f6a947] transition-colors flex items-center gap-1"
                >
                  <span>PBO Certificate (SARS)</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/documents/bee-certificate.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#f6a947] transition-colors flex items-center gap-1"
                >
                  <span>BEE Certificate</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/documents/islamic-npo-governance-code.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#f6a947] transition-colors flex items-center gap-1"
                >
                  <span>Governance Code for Islamic NPOs</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail
                  className="text-[#f6a947] flex-shrink-0 mt-0.5"
                  size={16}
                />
                <a
                  href="mailto:info@altaawunfial.org.za"
                  className="text-white/70 hover:text-[#f6a947] transition-colors"
                >
                  info@altaawunfial.org.za
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone
                  className="text-[#f6a947] flex-shrink-0 mt-0.5"
                  size={16}
                />
                <a
                  href="tel:0103351773"
                  className="text-white/70 hover:text-[#f6a947] transition-colors"
                >
                  010 335 1773
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin
                  className="text-[#f6a947] flex-shrink-0 mt-0.5"
                  size={16}
                />
                <span className="text-white/70">
                  Cnr Katz & Smith, Ennerdale Ext 9,
                  <br />
                  Civic Center, 1830
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white mb-4">Follow Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay connected and see our latest updates
            </p>
            <div className="flex space-x-3">
              <a
                href=""
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href=""
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/altaawunfial/"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href=""
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.link/26h8zj"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-colors"
                target="blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@altaawunfial"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-colors"
                target="blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2026 Al-Taawun Fi Al. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href=""
                className="text-white/60 hover:text-[#f6a947] transition-colors"
              ></a>
              <a
                href=""
                className="text-white/60 hover:text-[#f6a947] transition-colors"
              ></a>
              <a
                href=""
                className="text-white/60 hover:text-[#f6a947] transition-colors"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
