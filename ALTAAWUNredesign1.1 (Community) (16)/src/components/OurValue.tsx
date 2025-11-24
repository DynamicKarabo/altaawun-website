import { Lightbulb, Users, Target, Heart, Eye, Sprout, Award, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function OurValue() {
  const coreValues = [
    {
      icon: <Eye size={32} />,
      title: 'Vision Beyond the Visible',
      description: 'We see potential where others see limitations. Every community, every individual, holds untapped capabilities waiting to be discovered and nurtured.',
      color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
      icon: <Sprout size={32} />,
      title: 'Growth Through Empowerment',
      description: 'True development comes from within. We don\'t just provide aid—we create pathways for communities to unlock their own strengths and build sustainable futures.',
      color: 'from-[#3cb24a] to-[#a58644]'
    },
    {
      icon: <Users size={32} />,
      title: 'Community as Foundation',
      description: 'Communities know their needs best. We listen, collaborate, and co-create solutions that honor local wisdom and build on existing strengths.',
      color: 'from-[#a58644] to-[#f6a947]'
    },
    {
      icon: <Shield size={32} />,
      title: 'Integrity in Action',
      description: 'Transparency and accountability aren\'t just values—they\'re our commitments. Every donation, every project, every outcome is tracked and shared openly.',
      color: 'from-[#f6a947] to-[#19586d]'
    }
  ];

  const principlesInAction = [
    {
      principle: 'We Believe in People, Not Dependency',
      example: 'Our water projects don\'t just drill boreholes—we train local technicians to maintain them, creating jobs and ensuring sustainability.',
      icon: <Target size={24} />
    },
    {
      principle: 'Education Unlocks Potential',
      example: 'A bursary isn\'t just school fees. It\'s the revelation of a hidden capability in a student who becomes a teacher, doctor, or leader.',
      icon: <Lightbulb size={24} />
    },
    {
      principle: 'Dignity Drives Our Approach',
      example: 'Our feeding programs are designed with respect—nutritious meals served with care, preserving the dignity of every family we serve.',
      icon: <Heart size={24} />
    },
    {
      principle: 'Long-term Impact Over Quick Fixes',
      example: 'We invest in infrastructure, education, and skills that create generational change, not temporary relief.',
      icon: <Award size={24} />
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#19586d] via-[#3cb24a] to-[#a58644] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#f6a947] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3cb24a] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-white">
              Our Guiding Philosophy
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 italic" style={{ fontFamily: 'Georgia, serif' }}>
              "Reveal Concealed Capabilities"
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              This isn't just our motto—it's our mission, our methodology, and our measure of success. 
              We believe that within every struggling community lies dormant potential waiting to flourish.
            </p>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">What Does "Reveal Concealed Capabilities" Mean?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Too often, communities facing poverty, lack of access to water, or educational barriers are defined by what they lack. 
              We see it differently. We see resilience, ingenuity, and untapped potential. Our role isn't to impose solutions—
              it's to <span className="text-[#19586d]">reveal</span> the <span className="text-[#a58644]">capabilities</span> that already exist and provide the tools, resources, and support to bring them to light.
            </p>
          </div>

          {/* The 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-t-4 border-t-[#19586d] hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl text-[#19586d] mb-4">Reveal</div>
                <h3 className="text-xl text-gray-900 mb-3">Uncover Hidden Strengths</h3>
                <p className="text-gray-700">
                  We listen deeply to communities to understand their existing assets, knowledge systems, and cultural strengths that can be leveraged for development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#3cb24a] hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl text-[#3cb24a] mb-4">Nurture</div>
                <h3 className="text-xl text-gray-900 mb-3">Cultivate Growth</h3>
                <p className="text-gray-700">
                  Through education, infrastructure, and sustained support, we create conditions for communities to develop their capabilities fully.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#f6a947] hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl text-[#f6a947] mb-4">Empower</div>
                <h3 className="text-xl text-gray-900 mb-3">Enable Self-Sufficiency</h3>
                <p className="text-gray-700">
                  Our ultimate goal is communities that thrive independently, equipped with skills, infrastructure, and confidence to shape their own futures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-[#19586d]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision, every project, and every interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principles in Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Principles in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Philosophy becomes reality through concrete programs and measurable outcomes
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {principlesInAction.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-[#3cb24a] hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#19586d] to-[#3cb24a] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl text-[#19586d] mb-3">{item.principle}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="text-[#a58644]">In Practice:</span> {item.example}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Measure Success */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#19586d] to-[#3cb24a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8">How We Measure Success</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Success isn't just in the numbers—though we track those rigorously. It's in the stories of transformation, 
              the communities managing their own resources, the students who become teachers, and the families who move from 
              survival to self-sufficiency.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-3">🌱</div>
                <div className="text-2xl mb-2">Sustainability</div>
                <p className="text-white/80">Projects that continue thriving long after we leave</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-3">🎓</div>
                <div className="text-2xl mb-2">Capability Transfer</div>
                <p className="text-white/80">Communities equipped to train and lead others</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-3">💪</div>
                <div className="text-2xl mb-2">Self-Determination</div>
                <p className="text-white/80">Families and communities shaping their own futures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Invitation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Join Us in Revealing Capabilities</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            When you support Al-Taawun, you're not just donating to charity. You're investing in a philosophy that honors human dignity, 
            recognizes inherent potential, and creates lasting, transformative change. You're helping us reveal what was always there—
            waiting to be seen, supported, and celebrated.
          </p>
          
          <div className="bg-gradient-to-r from-[#19586d]/10 via-[#3cb24a]/10 to-[#f6a947]/10 rounded-2xl p-8">
            <p className="text-xl text-gray-900 italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              "The capability was always there. We just help bring it to light."
            </p>
            <p className="text-gray-600">— Hawa Moses</p>
          </div>
        </div>
      </section>
    </div>
  );
}
