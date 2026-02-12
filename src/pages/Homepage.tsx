// import { Heart, Droplet, GraduationCap, Users, ArrowRight } from 'lucide-react'; // Removing specific icons if unused, but keep generic ones
import { Heart, Droplet, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ImpactTicker } from '@/components/ImpactTicker';
import { LatestNews } from '@/components/LatestNews';
import { Partners } from '@/components/Partners';
import { motion } from 'motion/react';
import logoImage from '@/assets/logo.webp';

import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { impactStories } from '@/data/testimonials';

export function Homepage() {


  return (
    <div className="w-full">

      <SEO
        title="Home"
        description="Al-Taawun Fi Al is a non-profit organization dedicated to community development through education, healthcare, and water projects in South Africa."
      />
      {/* Hero Section - Passes the 3-Second Test */}
      <section className="relative bg-gradient-to-br from-[#19586d] via-[#3cb24a] to-[#a58644] py-16 md:py-24 lg:py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-[#f6a947] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                NPO Registration: 235-732
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transforming Communities Through Compassion
              </motion.h1>
              <motion.p
                className="text-xl italic text-[#f6a947]"
                style={{ fontFamily: 'Georgia, serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                "Reveal Concealed Capabilities"
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Al-Taawun Fi Al is dedicated to uplifting communities across South Africa through sustainable welfare programs, clean water access, and educational initiatives.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#f6a947] to-[#a58644] hover:from-[#a58644] hover:to-[#f6a947] text-white"
                >
                  <Link to="/donate">
                    Make a Donation
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  <Link to="/values">Our Philosophy</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* HUGE LOGO - The Main Event */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img
                  src={logoImage}
                  alt="Al-Taawun Fi Al"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto drop-shadow-2xl"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f6a947]/20 via-transparent to-[#3cb24a]/20 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Ticker - Real-time Numbers */}
      <ImpactTicker />

      {/* What We Do - Core Programs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus on three key areas to create lasting change in communities across South Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-[#3cb24a] transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#19586d] to-[#3cb24a] rounded-xl flex items-center justify-center">
                  <Droplet className="text-white" size={28} />
                </div>
                <h3 className="text-xl text-gray-900">Clean Water Access</h3>
                <p className="text-gray-600">
                  Building boreholes and water infrastructure to provide communities with reliable access to clean, safe drinking water.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#f6a947] transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#f6a947] to-[#a58644] rounded-xl flex items-center justify-center">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="text-xl text-gray-900">Welfare Programs</h3>
                <p className="text-gray-600">
                  Supporting vulnerable families through feeding schemes, food parcels, and essential aid to ensure basic needs are met.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#3cb24a] transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3cb24a] to-[#19586d] rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h3 className="text-xl text-gray-900">Education Support</h3>
                <p className="text-gray-600">
                  Providing school supplies, bursaries, and educational resources to help children access quality education and build better futures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#19586d] to-[#3cb24a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">2022 Impact Highlights</h2>
            <p className="text-lg text-white/80">
              Real change, measurable results from our 2022 activities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">450</div>
              <div className="text-white/80">Blankets Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">1,500</div>
              <div className="text-white/80">School Uniforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">1,000+</div>
              <div className="text-white/80">Monthly Food Parcels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">5+</div>
              <div className="text-white/80">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Stories of Transformation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real people, real communities, real change. See how your support creates lasting impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {impactStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${story.gradient} rounded-xl flex items-center justify-center text-white mb-4`}>
                      <story.icon size={24} />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{story.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {story.quote}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className={story.colorClass}>{story.author}</span>
                      <span className="text-gray-500">{story.stat}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button asChild
              size="lg"
              className="bg-gradient-to-r from-[#19586d] to-[#3cb24a] hover:from-[#3cb24a] hover:to-[#19586d] text-white"
            >
              <Link to="/impact">
                Read More Impact Stories
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div >
      </section >

      {/* Latest News & Updates */}
      < LatestNews />

      {/* Partners Section */}
      < Partners />

      {/* Call to Action */}
      < section className="py-16 md:py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#19586d] to-[#3cb24a] rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center">
            <Users className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-4">Join Our Mission</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether through donations, volunteering, or partnerships, your support helps us create lasting change in communities across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild
                size="lg"
                className="bg-white text-[#19586d] hover:bg-gray-100"
              >
                <Link to="/donate">Donate Today</Link>
              </Button>
              <Button asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <Link to="/get-involved">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
