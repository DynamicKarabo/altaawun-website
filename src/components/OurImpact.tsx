import { Users, Gift, BookOpen, Heart, Utensils, Building2, Baby, Globe, FolderKanban, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

export function OurImpact() {
  const globalReach = [
    {
      icon: <Globe size={40} />,
      number: '5+',
      label: 'Countries',
      description: 'Reaching communities across borders',
      color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
      icon: <FolderKanban size={40} />,
      number: '340+',
      label: 'Projects',
      description: 'Implemented successfully',
      color: 'from-[#3cb24a] to-[#a58644]'
    },
    {
      icon: <MapPin size={40} />,
      number: '66+',
      label: 'Villages Assisted',
      description: 'Communities transformed',
      color: 'from-[#a58644] to-[#f6a947]'
    }
  ];

  const activities2022 = [
    {
      icon: <Gift size={32} />,
      title: 'Senior Winter Program',
      beneficiaries: '600 beneficiaries',
      details: '450 Blankets distributed and 150 people catered during this event',
      partners: 'Africa Muslim Agency, DR Vallabh, DR Fatimah Bhabha, Salaah Media, Takaful Africa, Awqaf SA, City of Joburg Department of Sports and Recreation, ARANDA, Shoprite, Temi Construction and Ashraful Aid',
      note: 'This winter senior program is the 4th year of this NPO.',
      color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
      icon: <Utensils size={32} />,
      title: 'Monthly Food Grocery Distribution',
      beneficiaries: '1,000 families',
      details: 'Al-Taawun Fi Al partnered with Africa Muslim Agency to empower the community of South of Johannesburg with food every month',
      partners: 'Africa Muslim Agency',
      color: 'from-[#3cb24a] to-[#a58644]'
    },
    {
      icon: <Heart size={32} />,
      title: 'Ramadan Feeding Program',
      beneficiaries: '500 individuals',
      details: '500 meals provided for the whole month of Ramadan',
      partners: 'Community partners',
      color: 'from-[#a58644] to-[#f6a947]'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Back-to-School Campaign',
      beneficiaries: '1,500 scholars',
      details: '1,500 School uniforms and 250 packs of school stationery distributed',
      partners: 'Inhance and Africa Muslim Agency',
      color: 'from-[#f6a947] to-[#19586d]'
    },
    {
      icon: <Utensils size={32} />,
      title: 'Soup Kitchen & Feeding Scheme',
      beneficiaries: 'Daily meals, 5 times per week',
      details: 'Helping needy children after school to have food',
      partners: 'Shoprite and FoodForward',
      color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
      icon: <Users size={32} />,
      title: 'NPO, Women and Youth Empowerment Program',
      beneficiaries: 'Yearly workshops',
      details: 'One week NPO empowerment workshop, one week Career Expo, one week Youth and Women Business empowerment',
      partners: 'Government departments and private companies',
      color: 'from-[#3cb24a] to-[#a58644]'
    },
    {
      icon: <Baby size={32} />,
      title: 'Community Baby Show',
      beneficiaries: '2,000 mothers-to-be',
      details: 'Five times every year, we host baby shows that helped mothers-to-be with clothing and support for newborns',
      partners: 'Community supporters',
      color: 'from-[#a58644] to-[#f6a947]'
    },
    {
      icon: <Users size={32} />,
      title: 'ECD Development',
      beneficiaries: '1,000 needy kids',
      details: 'Partnered with Spiritual Cord to develop ECD for needy families and support kids with playing equipment',
      partners: 'Spiritual Cord',
      color: 'from-[#f6a947] to-[#19586d]'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Salaah Room Development',
      beneficiaries: 'Ennerdale Ext. 2 Muslim Community',
      details: 'Developed Salaah Room for the community',
      partners: 'Takaful Africa, Spiritual Cord, T&T Consulting, Awqaf SA and Salaah Media',
      color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
      icon: <Globe size={32} />,
      title: 'International Scholarship',
      beneficiaries: 'Youth empowerment',
      details: 'Partnership with Turkey - agreement to empower youth through international scholarships',
      partners: 'Turkey Partnership',
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
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Impact
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Activities, Projects, and Programs for the Reporting Year 2022
            </motion.p>
          </div>
        </div>
      </section>

      {/* Global Reach Stats */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Global Reach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expanding our impact across borders and transforming communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {globalReach.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                      {stat.icon}
                    </div>
                    <div className="text-5xl text-[#19586d] mb-2">{stat.number}</div>
                    <h3 className="text-xl text-gray-900 mb-2">{stat.label}</h3>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2022 Activities */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-[#19586d]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">2022 Activities & Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How beneficiaries benefitted through our programs and partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities2022.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-l-4 border-l-[#3cb24a]">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      {activity.icon}
                    </div>
                    <h3 className="text-xl text-[#19586d] mb-3">{activity.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Users size={16} className="text-[#3cb24a] mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <div className="text-gray-900">{activity.beneficiaries}</div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{activity.details}</p>
                      <div className="pt-3 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          <strong>Partners:</strong> {activity.partners}
                        </div>
                      </div>
                      {activity.note && (
                        <div className="bg-[#f6a947]/10 border border-[#f6a947]/30 rounded-lg p-3">
                          <p className="text-sm text-gray-700 italic">{activity.note}</p>
                        </div>
                      )}
                    </div>
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
            Help Us Create More Impact
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your support enables us to reach more communities, empower more individuals,
            and create lasting change across South Africa and beyond.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
