import { CheckCircle, FileText, Users, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FinancialChart } from './FinancialChart';

export function AboutUs() {
  const teamMembers = [
    {
      name: 'Hawa Moses',
      role: 'Founder & Executive Director',
      bio: '15+ years in community development'
    },
    {
      name: 'Hassim Phosa',
      role: 'Markerting Director',
      bio: 'Expert in leading philanthropic marketing initiatives'
    },
    {
      name: 'Jubeira Moses',
      role: 'Treasurer',
      bio: 'Former educator with 10+ years experience'
  }
  ];

  const values = [
    {
      icon: <Target size={24} />,
      title: 'Transparency',
      description: 'We maintain open communication about our finances, operations, and impact with all stakeholders.'
    },
    {
      icon: <Users size={24} />,
      title: 'Community-Centered',
      description: 'Local voices guide our programs. We work with communities, not for them.'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Accountability',
      description: 'Every donation is tracked and reported. We are accountable to our donors and beneficiaries.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">About Al-Taawun Fi Al</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Founded in 2019. Building trust through transparency, proven impact, and unwavering commitment to community upliftment across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals - NPO Registration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
                Official Registration
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
                A Registered Non-Profit Organization
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Al-Taawun Fi Al is a registered NPO with the South African Department of Social Development, ensuring full legal compliance and accountability.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900">NPO Registration Number: 235-732</div>
                    <div className="text-sm text-gray-600">Verified and compliant with all regulations</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900">Tax-Exempt Status: Section 18A Approved</div>
                    <div className="text-sm text-gray-600">Your donations are tax-deductible</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900">Audited Financial Reports</div>
                    <div className="text-sm text-gray-600">Annual audits by independent certified accountants</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  <FileText size={20} className="mr-2" />
                  2024 Annual Report
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  <FileText size={20} className="mr-2" />
                  Financial Statements
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-6">Our Financial Commitment</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl mb-2">87%</div>
                  <div className="text-emerald-100">Of funds go directly to programs</div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <div className="text-4xl mb-2">10%</div>
                  <div className="text-emerald-100">Administrative costs</div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <div className="text-4xl mb-2">3%</div>
                  <div className="text-emerald-100">Fundraising expenses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700">
              Founded in 2019, Al-Taawun Fi Al emerged from a simple observation: many South African communities lacked access to basic necessities like clean water, adequate nutrition, and quality education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To empower underserved communities across South Africa by providing sustainable access to clean water, essential welfare support, and educational opportunities that create pathways out of poverty.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  A South Africa where every community has access to clean water, every child can attend school, and every family has the support they need to thrive with dignity and hope.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-emerald-500 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to creating meaningful change
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-emerald-600 mb-2">{member.role}</div>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency - Where Your Donation Goes */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Where Your Donation Goes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to financial transparency. See exactly how we allocate every rand donated.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <FinancialChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-emerald-500 rounded mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">87% Programs & Services</h3>
                    <p className="text-gray-700 mb-3">
                      The vast majority of funds directly support our water, welfare, and education programs in communities across South Africa.
                    </p>
                    <div className="text-sm text-gray-600">
                      This includes borehole construction, feeding schemes, school supplies, bursaries, and on-the-ground program implementation.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">10% Administrative Costs</h3>
                    <p className="text-gray-700 mb-3">
                      Essential operational expenses to ensure program quality and organizational effectiveness.
                    </p>
                    <div className="text-sm text-gray-600">
                      Includes staff salaries, office costs, legal compliance, auditing, and administrative support.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-purple-500 rounded mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">3% Fundraising</h3>
                    <p className="text-gray-700 mb-3">
                      Minimal costs to sustain our fundraising efforts and donor communications.
                    </p>
                    <div className="text-sm text-gray-600">
                      Covers donor relations, marketing materials, events, and communications to expand our reach and impact.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
