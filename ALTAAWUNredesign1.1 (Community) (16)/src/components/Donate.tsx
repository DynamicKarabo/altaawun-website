import { Heart, Droplet, GraduationCap, Shield, Lock, CheckCircle, CreditCard, DollarSign, Users, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedProject, setSelectedProject] = useState<string>('general');
  const [donationComplete, setDonationComplete] = useState(false);

  const presetAmounts = [100, 250, 500, 1000, 2500, 5000];

  const tangibleDonations = [
    { amount: 100, impact: 'Provides a food parcel for a family in need' },
    { amount: 250, impact: 'Supplies a student with school supplies for a term' },
    { amount: 500, impact: 'Provides uniforms and books for a student' },
    { amount: 1000, impact: 'Contributes to drilling a community water borehole' },
    { amount: 2500, impact: 'Feeds 25 children for a month' },
    { amount: 5000, impact: 'Awards a full-year bursary to a deserving student' }
  ];

  const projects = [
    {
      id: 'general',
      name: 'Where Most Needed',
      icon: <Heart size={24} />,
      description: 'Support all our programs'
    },
    {
      id: 'water',
      name: 'Clean Water Projects',
      icon: <Droplet size={24} />,
      description: 'Build boreholes and water infrastructure'
    },
    {
      id: 'education',
      name: 'Education Support',
      icon: <GraduationCap size={24} />,
      description: 'School supplies and bursaries'
    },
    {
      id: 'feeding',
      name: 'Feeding Schemes',
      icon: <Heart size={24} />,
      description: 'Provide meals to children and families'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would process the payment
    setDonationComplete(true);
  };

  const getCurrentAmount = () => {
    if (customAmount) return parseFloat(customAmount);
    return selectedAmount || 0;
  };

  if (donationComplete) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h2 className="text-3xl text-gray-900 mb-4">Thank You For Your Generosity!</h2>
              <p className="text-lg text-gray-700 mb-6">
                Your donation of <span className="text-emerald-600">R{getCurrentAmount().toFixed(2)}</span> will make a real difference in the lives of South African communities.
              </p>
              <div className="bg-emerald-50 rounded-lg p-6 mb-8">
                <p className="text-gray-700 mb-2">
                  A tax-deductible receipt has been sent to your email address.
                </p>
                <p className="text-sm text-gray-600">
                  NPO Registration: 235-732-NPO | Section 18A Approved
                </p>
              </div>
              <Button
                onClick={() => {
                  setDonationComplete(false);
                  setSelectedAmount(null);
                  setCustomAmount('');
                }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
              >
                Make Another Donation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">Make a Donation</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Your support transforms lives. Every donation directly funds water projects, feeding programs, and educational support across South Africa.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center">
                <Shield className="text-emerald-600 mr-2" size={20} />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-emerald-600 mr-2" size={20} />
                <span>Tax Deductible</span>
              </div>
              <div className="flex items-center">
                <Lock className="text-emerald-600 mr-2" size={20} />
                <span>NPO Registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving Program - The Community Circle */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full mb-4">
                <div className="flex items-center space-x-2">
                  <Star size={16} />
                  <span>Exclusive Program</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Join The Community Circle</h2>
              <p className="text-lg text-gray-700 mb-6">
                Become part of an exclusive group of monthly donors who provide sustained, reliable support that allows us to plan long-term projects and create lasting change.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900">Sustained Impact</div>
                    <div className="text-sm text-gray-600">Your monthly gift provides reliable support for ongoing programs</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900">Quarterly Updates</div>
                    <div className="text-sm text-gray-600">Receive exclusive reports on the impact of your giving</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900">Recognition</div>
                    <div className="text-sm text-gray-600">Be recognized as a Community Circle member in our annual report</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900">Flexible & Convenient</div>
                    <div className="text-sm text-gray-600">Change or cancel your monthly donation at any time</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg text-gray-900 mb-4">Monthly Giving Levels</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <div className="text-gray-900">Supporter</div>
                      <div className="text-sm text-gray-600">R100/month</div>
                    </div>
                    <div className="text-emerald-600">1,200 meals per year</div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <div className="text-gray-900">Champion</div>
                      <div className="text-sm text-gray-600">R250/month</div>
                    </div>
                    <div className="text-emerald-600">Support 3 students annually</div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div>
                      <div className="text-gray-900">Leader</div>
                      <div className="text-sm text-gray-600">R500/month</div>
                    </div>
                    <div className="text-emerald-600">Fund a borehole in 2 years</div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <div className="text-gray-900">Patron</div>
                      <div className="text-sm text-gray-600">R1,000+/month</div>
                    </div>
                    <div className="text-emerald-600">Transformative impact</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
              <CardContent className="p-8">
                <Users className="mb-6" size={48} />
                <h3 className="text-2xl mb-4">Why Monthly Giving Matters</h3>
                <p className="text-emerald-100 mb-6">
                  Monthly donations provide the foundation for our work, allowing us to:
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-emerald-100">Plan and execute long-term projects with confidence</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-emerald-100">Reduce administrative costs and maximize program funding</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-emerald-100">Respond quickly to urgent community needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-emerald-100">Build sustainable relationships with the communities we serve</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl mb-2">150+</div>
                  <div className="text-emerald-100">Community Circle Members</div>
                  <p className="text-sm text-emerald-100 mt-2">
                    "Being part of The Community Circle gives me confidence that I'm making a sustained difference every single month." - Sarah M.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Frequency Selection */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl text-gray-900 mb-4">Donation Frequency</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedFrequency('once')}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          selectedFrequency === 'once'
                            ? 'border-emerald-600 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <div className="text-lg text-gray-900">One-Time</div>
                        <div className="text-sm text-gray-600">Make a single donation</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedFrequency('monthly')}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          selectedFrequency === 'monthly'
                            ? 'border-emerald-600 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <div className="text-lg text-gray-900">Monthly</div>
                        <div className="text-sm text-gray-600">Ongoing support</div>
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Amount Selection */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl text-gray-900 mb-4">Select Amount (ZAR)</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                          className={`p-3 rounded-lg border-2 transition-colors ${
                            selectedAmount === amount && !customAmount
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                              : 'border-gray-200 hover:border-emerald-300 text-gray-700'
                          }`}
                        >
                          R{amount}
                        </button>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="customAmount">Or enter custom amount</Label>
                      <div className="relative mt-2">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R</span>
                        <Input
                          id="customAmount"
                          type="number"
                          min="10"
                          placeholder="0.00"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount(null);
                          }}
                          className="pl-8"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Selection */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl text-gray-900 mb-4">Choose Where Your Donation Goes</h3>
                    <div className="space-y-3">
                      {projects.map((project) => (
                        <button
                          key={project.id}
                          type="button"
                          onClick={() => setSelectedProject(project.id)}
                          className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                            selectedProject === project.id
                              ? 'border-emerald-600 bg-emerald-50'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                              {project.icon}
                            </div>
                            <div>
                              <div className="text-gray-900">{project.name}</div>
                              <div className="text-sm text-gray-600">{project.description}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Donor Information */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl text-gray-900 mb-4">Your Information</h3>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required className="mt-2" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required className="mt-2" />
                        <p className="text-sm text-gray-600 mt-1">For your tax-deductible receipt</p>
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input id="phone" type="tel" className="mt-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information - Mock Form */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl text-gray-900 mb-4">Payment Information</h3>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start space-x-3">
                        <Lock className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                        <div className="text-sm text-gray-700">
                          Your payment is secure and encrypted. We use industry-standard security measures to protect your information.
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative mt-2">
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                          <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required className="mt-2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                  disabled={!getCurrentAmount()}
                >
                  {selectedFrequency === 'monthly' ? 'Set Up Monthly Donation' : 'Complete Donation'}
                  {getCurrentAmount() > 0 && ` - R${getCurrentAmount().toFixed(2)}`}
                </Button>

                <p className="text-sm text-center text-gray-600">
                  By completing this donation, you agree to our terms and conditions. This is a mock payment form for demonstration purposes.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Impact Summary */}
              <Card className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Your Impact</h3>
                  <p className="text-emerald-100 mb-4">
                    See how your donation makes a difference
                  </p>
                  <div className="space-y-3">
                    {tangibleDonations.map((example, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={16} />
                        </div>
                        <div>
                          <div className="mb-1">R{example.amount}</div>
                          <div className="text-sm text-emerald-100">{example.impact}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tax Information */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-3">Tax-Deductible</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Al-Taawun Fi Al is registered under Section 18A of the Income Tax Act.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0" size={16} />
                      <span>NPO Registration: 235-732</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0" size={16} />
                      <span>Instant tax receipt via email</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0" size={16} />
                      <span>Audited financial reports</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Other Ways to Give */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-3">Other Ways to Give</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-900 mb-1">Bank Transfer</div>
                      <div className="text-gray-600">
                        Bank: Standard Bank<br />
                        Account: 10 13 680 024 4<br />
                        Branch: 051001
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="text-gray-900 mb-1">Contact Us</div>
                      <div className="text-gray-600">
                        For large donations or planned giving<br />
                        <a href="mailto:donations@altaawunfial.org.za" className="text-emerald-600 hover:underline">
                          donations@altaawunfial.org.za
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
