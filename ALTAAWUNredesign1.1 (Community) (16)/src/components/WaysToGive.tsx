import { CreditCard, Building2, Package, Clock, Heart, CheckCircle, ArrowRight, Copy } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useState } from 'react';

type Page = 'home' | 'about' | 'impact' | 'values' | 'get-involved' | 'donate' | 'ways-to-give';

interface WaysToGiveProps {
  onNavigate: (page: Page) => void;
}

export function WaysToGive({ onNavigate }: WaysToGiveProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">Ways to Give</h1>
            <p className="text-lg md:text-xl text-gray-700">
              There are many ways you can support our work and make a difference in South African communities. Choose the option that works best for you.
            </p>
          </div>
        </div>
      </section>

      {/* Online Donation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <CreditCard size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Online Donation</h2>
              <p className="text-lg text-gray-700 mb-6">
                The fastest and most convenient way to support our work. Donate securely online with your credit or debit card.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Secure payment processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Instant tax-deductible receipt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">One-time or monthly options</span>
                </div>
                <div className="flex items-center space-x-3">
  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
  <span className="text-gray-700">Designate your gift to specific programs</span>
</div>   ← ADD THIS CLOSING TAG

                <Button
  onClick={() => handleNavigate('donate')}
  size="lg"
  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
>
  Donate Online Now
  <ArrowRight className="ml-2" size={20} />
</Button>

<div className="mt-6 flex flex-col sm:flex-row gap-4">
  <Button
    onClick={() => handleNavigate('donate')}
    className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
  >
    Give Zakat
  </Button>

  <Button
    onClick={() => handleNavigate('donate')}
    className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
  >
    Give Lillah
  </Button>
</div>


            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
              <CardContent className="p-8">
                <h3 className="text-xl text-gray-900 mb-6">Quick Donation Amounts</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl text-emerald-600 mb-1">R100</div>
                    <div className="text-gray-700">Provides a food parcel for a family in need</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl text-emerald-600 mb-1">R250</div>
                    <div className="text-gray-700">Supplies a student with complete school supplies for a term</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl text-emerald-600 mb-1">R500</div>
                    <div className="text-gray-700">Provides uniforms and books for a student</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl text-emerald-600 mb-1">R1,000</div>
                    <div className="text-gray-700">Contributes to drilling a community water borehole</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bank Transfer / EFT */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="order-2 lg:order-1">
              <CardContent className="p-8">
                <h3 className="text-xl text-gray-900 mb-6">Banking Details</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Bank Name</div>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-900">Standard Bank South Africa</div>
                      <button
                        onClick={() => handleCopy('Standard Bank South Africa', 'bank')}
                        className="text-emerald-600 hover:text-emerald-700 transition-colors"
                        aria-label="Copy bank name"
                      >
                        {copiedField === 'bank' ? <CheckCircle size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Account Name</div>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-900">Al-Taawun Fi Al</div>
                      <button
                        onClick={() => handleCopy('Al-Taawun Fi Al', 'account')}
                        className="text-emerald-600 hover:text-emerald-700 transition-colors"
                        aria-label="Copy account name"
                      >
                        {copiedField === 'account' ? <CheckCircle size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Account Number</div>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-900 tabular-nums">10 13 680 024 4</div>
                      <button
                        onClick={() => handleCopy('10 13 680 024 4', 'number')}
                        className="text-emerald-600 hover:text-emerald-700 transition-colors"
                        aria-label="Copy account number"
                      >
                        {copiedField === 'number' ? <CheckCircle size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Branch Code</div>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-900 tabular-nums">7260</div>
                      <button
                        onClick={() => handleCopy('051001', 'branch')}
                        className="text-emerald-600 hover:text-emerald-700 transition-colors"
                        aria-label="Copy branch code"
                      >
                        {copiedField === 'branch' ? <CheckCircle size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Reference</div>
                    <div className="text-gray-900">Your Name + "Donation"</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="text-emerald-700">Important:</span> Please email proof of payment to{' '}
                    <a href="mailto:donations@altaawunfial.org.za" className="text-emerald-600 hover:underline">
                      donations@altaawunfial.org.za
                    </a>{' '}
                    to receive your Section 18A tax receipt.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Building2 size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Bank Transfer / EFT</h2>
              <p className="text-lg text-gray-700 mb-6">
                Prefer to donate directly through your bank? Use these details for electronic funds transfer or direct deposit.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">No transaction fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Set up recurring monthly donations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Tax-deductible receipts provided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Goods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Package size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Donate Goods</h2>
              <p className="text-lg text-gray-700 mb-6">
                Have items you'd like to donate? We accept various goods to support our programs and help communities in need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-3">Food & Essentials</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Non-perishable food items</li>
                    <li> Rice, flour, cooking oil</li>
                    <li>• Canned goods</li>
                    <li>• Baby formula and food</li>
                    <li>• Hygiene products</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-3">School Supplies</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Notebooks and paper</li>
                    <li>• Pens, pencils, crayons</li>
                    <li>• Backpacks</li>
                    <li>• Textbooks</li>
                    <li>• Calculators</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-3">Clothing</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Gently used clothing</li>
                    <li>• School uniforms</li>
                    <li>• Shoes and socks</li>
                    <li>• Blankets</li>
                    <li>• Winter coats</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-3">Other Items</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Toys (new or gently used)</li>
                    <li>• Books</li>
                    <li>• Sports equipment</li>
                    <li>• Baby items</li>
                    <li>• Household goods</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-8 bg-emerald-50 border-2 border-emerald-200">
            <CardContent className="p-8">
              <h3 className="text-xl text-gray-900 mb-4">How to Donate Goods</h3>
              <p className="text-gray-700 mb-4">
                Please contact us before dropping off donations to ensure we can accept your items and arrange a convenient time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:donations@altaawunfial.org.za"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Email: donations@altaawunfial.org.za
                </a>
                <a
              href="tel:0103351773"                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                Call: 010 335 1773                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volunteer Your Time */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <CardContent className="p-8">
                <Clock className="mb-6" size={48} />
                <h3 className="text-2xl mb-4">Your Time is Valuable</h3>
                <p className="text-emerald-100 mb-6">
                  Volunteering is one of the most meaningful ways to give. Your time, skills, and energy can make a direct impact on the communities we serve.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="flex-shrink-0" />
                    <span>Flexible scheduling options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="flex-shrink-0" />
                    <span>Hands-on community impact</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="flex-shrink-0" />
                    <span>Skills-based opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="flex-shrink-0" />
                    <span>Full training and support</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleNavigate('get-involved')}
                  className="bg-white text-emerald-600 hover:bg-gray-100"
                >
                  Learn About Volunteering
                </Button>
              </CardContent>
            </Card>

            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Heart size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Volunteer Your Time</h2>
              <p className="text-lg text-gray-700 mb-6">
                Not everyone can give financially, but everyone has time, skills, or expertise to share. Your contribution of time can be just as valuable as a monetary donation.
              </p>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-gray-900 mb-1">Community Outreach</div>
                    <div className="text-sm text-gray-600">Help distribute food parcels and support families</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-gray-900 mb-1">Educational Support</div>
                    <div className="text-sm text-gray-600">Tutor students or assist with literacy programs</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-gray-900 mb-1">Professional Skills</div>
                    <div className="text-sm text-gray-600">Share expertise in accounting, IT, marketing, etc.</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Giving & Major Gifts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Other Ways to Support Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl text-gray-900 mb-3">Corporate Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  Partner with us for CSI initiatives, employee engagement programs, and collaborative community projects.
                </p>
                <a
                  href="mailto:partnerships@altaawunfial.org.za"
                  className="text-emerald-600 hover:underline"
                >
                  Contact our partnerships team →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl text-gray-900 mb-3">Legacy Giving</h3>
                <p className="text-gray-700 mb-4">
                  Create a lasting impact through planned giving, bequests, and estate planning.
                </p>
                <a
                  href="mailto:info@altaawunfial.org.za"
                  className="text-emerald-600 hover:underline"
                >
                  Learn about legacy options →
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
            <CardContent className="p-8">
              <h3 className="text-2xl text-gray-900 mb-4">Have Questions?</h3>
              <p className="text-gray-700 mb-6">
                We're here to help you find the best way to support our mission. Contact us to discuss your giving options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@altaawunfial.org.za"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Email Us
                </a>
                <a
                  href="tel:010 335 1773"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
