import { Users, HandHeart, Building2, Calendar, Mail, Phone, MapPin, CheckCircle, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GetInvolved() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const volunteerOpportunities = [
    {
      icon: <HandHeart size={24} />,
      title: 'Community Outreach',
      description: 'Help distribute food parcels and supplies to families in need',
      commitment: 'Flexible hours, weekends available'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Educational Support',
      description: 'Tutor students or assist with literacy programs',
      commitment: '2-4 hours per week'
    },
    {
      icon: <Users size={24} />,
      title: 'Event Volunteers',
      description: 'Support fundraising events and community gatherings',
      commitment: 'As needed, event-based'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Professional Skills',
      description: 'Share your expertise in accounting, marketing, IT, or other areas',
      commitment: 'Project-based'
    }
  ];

  const partnershipOptions = [
    {
      title: 'Corporate Partnerships',
      description: 'Collaborate with us on CSI initiatives and employee engagement programs',
      benefits: ['Tax benefits', 'Brand visibility', 'Employee volunteering']
    },
    {
      title: 'School & University Partners',
      description: 'Partner on educational programs and student volunteering opportunities',
      benefits: ['Service learning', 'Community engagement', 'Research opportunities']
    },
    {
      title: 'Faith-Based Organizations',
      description: 'Join us in serving communities through collaborative projects',
      benefits: ['Shared mission', 'Resource pooling', 'Greater impact']
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">Get Involved</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Your time, skills, and passion can create real change. Join our community of volunteers and partners making a difference across South Africa.
              </p>
              <div className="flex items-center space-x-6">
                <div>
                  <div className="text-3xl text-emerald-600">150+</div>
                  <div className="text-gray-600">Active Volunteers</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl text-emerald-600">25+</div>
                  <div className="text-gray-600">Partner Organizations</div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760992004210-44a502a2872d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NjI5MTMwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Volunteers at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect way to contribute your time and talents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="border-2 hover:border-emerald-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {opportunity.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-gray-900 mb-2">{opportunity.title}</h3>
                      <p className="text-gray-700 mb-3">{opportunity.description}</p>
                      <div className="flex items-center text-sm text-emerald-600">
                        <Calendar size={16} className="mr-2" />
                        {opportunity.commitment}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
            <CardContent className="p-8">
              <h3 className="text-2xl text-gray-900 mb-4">Why Volunteer With Us?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900 mb-1">Flexible Scheduling</div>
                    <p className="text-sm text-gray-600">We work around your availability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900 mb-1">Training Provided</div>
                    <p className="text-sm text-gray-600">Full orientation and support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-gray-900 mb-1">Make Real Impact</div>
                    <p className="text-sm text-gray-600">See the difference you make</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Volunteer Application</h2>
            <p className="text-lg text-gray-600">
              Fill out this form and we'll be in touch within 48 hours
            </p>
          </div>

          {formSubmitted ? (
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-8 text-center">
                <CheckCircle className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-700">
                  Your volunteer application has been received. We'll contact you within 48 hours to discuss next steps.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="location">Location / City *</Label>
                    <Input id="location" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="interest">Area of Interest *</Label>
                    <select id="interest" required className="mt-2 w-full rounded-md border border-gray-300 p-2">
                      <option value="">Select an area</option>
                      <option value="outreach">Community Outreach</option>
                      <option value="education">Educational Support</option>
                      <option value="events">Event Volunteers</option>
                      <option value="professional">Professional Skills</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea 
                      id="availability" 
                      placeholder="Tell us about your availability (days, times, frequency)"
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="why">Why do you want to volunteer with us?</Label>
                    <Textarea 
                      id="why" 
                      placeholder="Share your motivation and any relevant experience"
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                    size="lg"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Organizations partnering with us amplify their impact and strengthen communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partnershipOptions.map((option, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-700 mb-4">{option.description}</p>
                  <div className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <Building2 className="mx-auto mb-6" size={48} />
                <h3 className="text-2xl md:text-3xl mb-4">Interested in Partnering?</h3>
                <p className="text-lg text-emerald-100 mb-8">
                  Let's discuss how we can work together to create meaningful impact in South African communities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:partnerships@altaawunfial.org.za"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Mail size={20} className="mr-2" />
                    partnerships@altaawunfial.org.za
                  </a>
                  <a
                    href="tel: 010 335 1773"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Phone size={20} className="mr-2" />
                    010 335 1773
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">Have questions? We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="text-emerald-600 mx-auto mb-3" size={32} />
                <div className="text-gray-900 mb-2">Email</div>
                <a href="mailto:info@altaawunfial.org.za" className="text-emerald-600 hover:underline">
                  info@altaawunfial.org.za
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="text-emerald-600 mx-auto mb-3" size={32} />
                <div className="text-gray-900 mb-2">Phone</div>
                <a href="tel:+27123456789" className="text-emerald-600 hover:underline">
                  0103351773
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="text-emerald-600 mx-auto mb-3" size={32} />
                <div className="text-gray-900 mb-2">Office</div>
                <p className="text-gray-600 text-sm">
                  Johannesburg, South Africa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
