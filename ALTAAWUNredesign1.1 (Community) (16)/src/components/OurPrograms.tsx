import { 
  Heart, HandHelping, Shirt, Church, Moon, Home, Backpack, 
  Sparkles, Users, Shield, Stethoscope, Brain, Baby, BookOpen, 
  Rocket, Crown, Wrench, Smile, Database, MessageCircle, Map, 
  BarChart, Network, Megaphone
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';


export function OurPrograms() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
const [customAmount, setCustomAmount] = useState('');

  const corePrograms = [
    
    {
      icon: <Heart size={28} />,
      title: 'Humanitarian Aid & Emergency Relief',
      description: 'Support to emergency response, including food vouchers, hygiene packs, and emergency grants, to affected disaster or crisis-affected communities.',
      color: 'from-[#19586d] to-[#3cb24a]',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800'
    },
    {
      icon: <HandHelping size={28} />,
      title: 'Community Feeding Schemes',
      description: 'Daily meal schemes and mobile kitchens delivering healthy meals to children, the elderly, and vulnerable families.',
      color: 'from-[#3cb24a] to-[#a58644]',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800'
    },
    {
      icon: <Shirt size={28} />,
      title: 'Clothing Drives for Vulnerable Families',
      description: 'Seasonal and year-round efforts to collect, sort, and distribute clothing and blankets to those in need.',
      color: 'from-[#a58644] to-[#f6a947]',
      image: 'https://i.postimg.cc/ZR5csSC6/donations.jpg'
    },
    {
      icon: <Church size={28} />,
      title: 'Mosque Support & Outreach',
      description: 'Care of mosque buildings, and initiatives encouraging community prayer, learning, and support.',
      color: 'from-[#f6a947] to-[#19586d]',
      image: 'https://i.postimg.cc/bYbyb9dM/Whats-App-Image-2025-11-17-at-13-45-31-(1).jpg'
    },
    {
      icon: <Moon size={28} />,
      title: 'Ramadan Iftar & Outreach Programs',
      description: 'Daily fast-breaking sessions, zakat distribution, and communal iftars that instill unity and spirituality.',
      color: 'from-[#19586d] to-[#3cb24a]',
      image: 'https://i.postimg.cc/FzBLBZgz/ramadanpic.jpg'
    },
    {
      icon: <Home size={28} />,
      title: 'Safe House & Shelter Services',
      description: 'Confidential refuge and wrap-around care for victims of abuse, trafficking, or family breakdown—providing counseling, referral to legal aid, and life skills training.',
      color: 'from-[#3cb24a] to-[#a58644]',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800'
    },
    {
      icon: <Backpack size={28} />,
      title: 'Back-to-School Campaigns',
      description: 'Distribution of school uniform, school bag, and stationery; further preparatory sessions to equip all children for learning at the start of the new school year.',
      color: 'from-[#a58644] to-[#f6a947]',
      image: 'https://i.postimg.cc/1zHgn1Ck/Whats-App-Image-2025-11-20-at-10-29-43.jpg'
    },
    {
      icon: <Sparkles size={28} />,
      title: 'ATFA Mother\'s Day Celebrations',
      description: 'Lavish celebrations honoring mothers and caregivers, integrating health checkups, wellness speeches, and gift-giving to recognize their life-giving roles.',
      color: 'from-[#f6a947] to-[#19586d]',
      image: 'https://i.postimg.cc/y6QVbXrm/flowers.webp'
    },
    {
      icon: <Users size={28} />,
      title: 'Mandela Day Community Service Projects',
      description: 'Daily activities involving volunteers—a year-round initiative of clean-up operations in city neighborhoods, reforestation initiatives, and repairs of public installations—inspired by Nelson Mandela\'s ethos of service.',
      color: 'from-[#19586d] to-[#3cb24a]',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800'
    },
    {
      icon: <Shield size={28} />,
      title: 'GBVF Awareness, Prevention & Support',
      description: 'Community discourse, legal aid clinics, and survivor support organizations for Gender-Based Violence & Femicide in partnership with grassroots NGOs and local law enforcement agencies.',
      color: 'from-[#3cb24a] to-[#a58644]',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800'
    },
    {
      icon: <Stethoscope size={28} />,
      title: 'Community Health & Well-Being Clinics',
      description: 'Regular rounds of basic check-ups by the medical team, vaccination drives, and mental-health counselling with marginalized communities.',
      color: 'from-[#a58644] to-[#f6a947]',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
    },
    {
      icon: <Brain size={28} />,
      title: 'Counseling & Psychosocial Support',
      description: 'Group therapy, trauma-informed workshops, and referral networks to develop emotional resilience and social cohesion.',
      color: 'from-[#f6a947] to-[#19586d]',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800'
    }
  ];

  const lifeStagePrograms = {
    children: {
      icon: <Baby size={32} />,
      title: 'Children',
      color: 'from-[#19586d] to-[#3cb24a]',
      programs: [
        {
          name: 'Early Childhood Development (ECD) Support',
          description: 'Structured play-based learning, school-readiness assessment, and caregiver training.'
        },
        {
          name: 'After-School Enrichment Clubs',
          description: 'Creative arts, STEM activities, and reading groups to complement classroom learning.'
        },
        {
          name: 'Nutrition & Wellness Programs',
          description: 'Daily provision of meals, health screenings, and hygiene education.'
        },
        {
          name: 'Mentorship & Life-Skills Workshops',
          description: 'Emotional resilience, conflict resolution, and peer mentoring.'
        },
        {
          name: 'Holiday Camps & Recreational Activities',
          description: 'Sport, nature outings, and cultural excursions.'
        }
      ]
    },
    students: {
      icon: <BookOpen size={32} />,
      title: 'Students',
      color: 'from-[#3cb24a] to-[#a58644]',
      programs: [
        {
          name: 'Academic Tutoring & STEM Labs',
          description: 'One-on-one coaching in maths, science, languages, and ICT.'
        },
        {
          name: 'Scholarship & Bursary Assistance',
          description: 'Application orientation, interview preparation, and mentor pairing.'
        },
        {
          name: 'Career Guidance & Internship Placement',
          description: 'Site-visits to industries, employer networking, and CV/interview workshops.'
        },
        {
          name: 'Digital Resource Access & E-Library',
          description: 'Secure online gateways, research aids, and virtual study groups.'
        },
        {
          name: 'Peer-Learning Networks',
          description: 'Study groups, project collaboration, and leadership forums.'
        }
      ]
    },
    youth: {
      icon: <Rocket size={32} />,
      title: 'Youth',
      color: 'from-[#a58644] to-[#f6a947]',
      programs: [
        {
          name: 'Entrepreneurship Incubation',
          description: 'Business-plan creation, pitch training, and seed-funding linkages.'
        },
        {
          name: 'Civic Engagement & Advocacy',
          description: 'Youth councils, community mapping, and public-speaking skills.'
        },
        {
          name: 'Life-Skills Bootcamps',
          description: 'Financial literacy, digital entrepreneurship and job-readiness certification.'
        },
        {
          name: 'Arts & Sports Mentorship',
          description: 'Coaching clinics, creative workshops, and tournament competition.'
        },
        {
          name: 'Volunteer & Service-Learning Programs',
          description: 'Local outreach activities and intergenerational exchange.'
        }
      ]
    },
    women: {
      icon: <Crown size={32} />,
      title: 'Women',
      color: 'from-[#f6a947] to-[#19586d]',
      programs: [
        {
          name: 'Leadership & Empowerment Circles',
          description: 'Confidence-building, negotiation skills, and peer support networks.'
        },
        {
          name: 'Financial Inclusion & Micro-Grants',
          description: 'Savings groups, credit-access facilitation, and enterprise coaching.'
        },
        {
          name: 'Health & Wellness Workshops',
          description: 'Reproductive health, nutrition, mental-health first aid.'
        },
        {
          name: 'Legal Aid & Rights Education',
          description: 'GBV support, family law clinics, and advocacy training.'
        },
        {
          name: 'Digital Literacy & Remote Work Training',
          description: 'E-commerce, online marketing, and virtual collaboration tools.'
        }
      ]
    },
    men: {
      icon: <Wrench size={32} />,
      title: 'Men',
      color: 'from-[#19586d] to-[#3cb24a]',
      programs: [
        {
          name: 'Employment Readiness & Upskilling',
          description: 'Trade-specific vocational training, CV clinics, and job-placement services.'
        },
        {
          name: 'Mental-Health & Well-Being Forums',
          description: 'Stress-management workshops, peer-support groups, and counseling referrals.'
        },
        {
          name: 'Fatherhood & Family Engagement Programs',
          description: 'Positive parenting, men\'s support groups, and co-parenting services.'
        },
        {
          name: 'Community Leadership Initiatives',
          description: 'Volunteer mobilization, neighborhood safety patrols, and civic forums.'
        },
        {
          name: 'Entrepreneurial Coaching',
          description: 'Business-model development, market research support, and network building.'
        }
      ]
    },
    seniors: {
      icon: <Smile size={32} />,
      title: 'Senior Citizens',
      color: 'from-[#3cb24a] to-[#a58644]',
      programs: [
        {
          name: 'Social Engagement & Storytelling Circles',
          description: 'Cultural heritage lessons, intergenerational discussion, and arts & crafts.'
        },
        {
          name: 'Health Screening & Home-Visit Clinics',
          description: 'Blood-pressure checks, medication management, and physiotherapy referrals.'
        },
        {
          name: 'Technology & Digital Inclusion',
          description: 'Basic computer literacy, mobile banking lessons, and telemedicine orientation.'
        },
        {
          name: 'Home-Assist & Mobility Support',
          description: 'Transportation services, home safety assessments, and volunteer helpers.'
        },
        {
          name: 'Lifelong Learning & Mentorship',
          description: 'Guest lecture opportunities, skill-share workshops, and legacy projects.'
        }
      ]
    }
  };

  const knowledgePrograms = [
    {
      icon: <Database size={28} />,
      title: 'Community Knowledge Management',
      description: 'Curate, archive, and share stories, testimonies, and local data to build a living repository of community wisdom. Run digital and in-person "memory banks" that inform program planning and policy proposals.',
      color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Memory-Based Dialogue Interventions',
      description: 'Host formal conversations—story circles, oral history workshops, intergenerational forums—that dig up experience as a problem-solving foundation. Train facilitators in trauma-informed and culturally sensitive methods.',
      color: 'from-[#3cb24a] to-[#a58644]'
    },
    {
      icon: <Map size={28} />,
      title: 'Integrated Information Platform',
      description: 'Construct and maintain an interactive online platform compiling research, case studies, multimedia, and best-practice toolkits. Leverage GIS mapping, data visualization, and real-time analytics to track social indicators.',
      color: 'from-[#a58644] to-[#f6a947]'
    },
    {
      icon: <BarChart size={28} />,
      title: 'Evidence-Driven Solution Design',
      description: 'Transform dialogue insights and community data into context-appropriate interventions—pilot projects, policy briefs, and replicable models. Engage cross-sector stakeholders in co-creation labs.',
      color: 'from-[#f6a947] to-[#19586d]'
    },
    {
      icon: <Network size={28} />,
      title: 'Capacity Building & Knowledge Sharing',
      description: 'Offer training for local leaders, practitioners, and youth ambassadors on research skills, project management, and advocacy. Conduct learning exchanges and symposiums to facilitate peer-to-peer collaboration.',
      color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
      icon: <Megaphone size={28} />,
      title: 'Partnerships & Policy Advocacy',
      description: 'Build strategic alliances with universities, NGOs, and government agencies to infuse grassroots views into policy discussion.',
      color: 'from-[#3cb24a] to-[#a58644]'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#19586d] via-[#3cb24a] to-[#a58644] py-24 md:py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-20 right-20 w-64 h-64 bg-[#f6a947] rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#3cb24a] rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Comprehensive Support Services
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Programs
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Al-Taawun Fi Al offers a variety of personalized services to meet the unique needs of each life stage. 
              Our holistic, client-centered approach ensures that everyone has access to the support and resources needed to thrive.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Programs with Images */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Core Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Community-focused initiatives addressing critical needs across South Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      {program.icon}
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{program.description}</p>
                    <button className="w-full mt-4 bg-[#d97706] hover:bg-[#b45309] text-white font-medium py-2 px-4 rounded-lg transition-colors" onClick={() => setIsDonateModalOpen(true)}>DONATE</button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Stage Programs */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-[#19586d]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Programs by Life Stage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored support for every stage of life's journey
            </p>
          </motion.div>

          <Tabs defaultValue="children" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-6xl mx-auto mb-12">
              {Object.entries(lifeStagePrograms).map(([key, data]) => (
                <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                  <span className="hidden sm:inline">{data.title}</span>
                  <span className="sm:hidden">{data.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(lifeStagePrograms).map(([key, data]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${data.color} rounded-2xl flex items-center justify-center text-white mb-8 mx-auto`}>
                    {data.icon}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {data.programs.map((program, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full border-l-4 border-l-[#3cb24a] hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <h3 className="text-lg text-[#19586d] mb-3">{program.name}</h3>
                            <p className="text-gray-700">{program.description}</p>
                            
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Knowledge Management Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Knowledge & Dialogue Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core work is centered on using people's knowledge and memory to inform practical, sustainable solutions to pressing social problems. 
              Through an integrated, dynamic information system and evidence-based dialogue interventions, we create positive change in diverse communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {knowledgePrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-t-4 border-t-[#3cb24a]">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      {program.icon}
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#19586d] to-[#3cb24a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get Involved in Our Programs
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you need support, want to volunteer, or wish to sponsor a program, 
            we welcome you to join our mission of revealing concealed capabilities.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:programs@altaawunfial.org.za"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#19586d] rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Our Programs Team
            </a>
          </motion.div>
        </div>
      </section>

            {/* Donation Modal */}
      {isDonateModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsDonateModalOpen(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl text-gray-900">Make a Donation</h3>
              <button onClick={() => setIsDonateModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">Select an amount or enter a custom donation:</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[100, 250, 500].map((amount) => (
                <button
                  key={amount}
                  onClick={() => {setSelectedAmount(amount); setCustomAmount('');}}
                  className={`py-3 px-4 rounded-lg border-2 transition-all ${
                    selectedAmount === amount
                      ? 'border-[#3cb24a] bg-[#3cb24a]/10 text-[#3cb24a]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  R{amount}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => {setCustomAmount(e.target.value); setSelectedAmount(null);}}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg mb-6 focus:border-[#3cb24a] focus:outline-none"
            />
            <button
              onClick={() => {
                const donationAmount = customAmount || selectedAmount;
                if (donationAmount) {
                  // PayFast Integration
              const form = document.createElement('form');
              form.method = 'POST';
              form.action = 'https://sandbox.payfast.co.za/eng/process'; // Use sandbox for testing
              
              const params = {
                merchant_id: '10000100', // Test Merchant ID - Replace with your actual ID
                merchant_key: '46f0cd694581a', // Test Merchant Key - Replace with your actual Key
                amount: donationAmount.toString(),
                item_name: 'Donation to Al-Taawun Fi Al',
                return_url: 'https://altaawunfial.org.za',
                cancel_url: 'https://altaawunfial.org.za',
              };
              
              Object.entries(params).forEach(([key, value]) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                form.appendChild(input);
              });
              
              document.body.appendChild(form);
              form.submit();
                }
              }}
              className="w-full bg-[#3cb24a] hover:bg-[#2d9138] text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Proceed to Donate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
