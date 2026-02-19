import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';
import { payfastConfig } from '../config/payfast';
import { SEO } from '@/components/SEO';
import { corePrograms, lifeStagePrograms, knowledgePrograms } from '@/data/programs';


export function OurPrograms() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <SEO
        title="Our Programs"
        description="Explore our initiatives in Education, Water Access, Welfare, and Healthcare. See how we are making a difference in communities."
      />
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
                      <program.icon size={28} />
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
                    <data.icon size={32} />
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
                      <program.icon size={28} />
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
            {/* Contact Our Programs Team button removed per request */}
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
                  onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                  className={`py-3 px-4 rounded-lg border-2 transition-all ${selectedAmount === amount
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
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg mb-6 focus:border-[#3cb24a] focus:outline-none"
            />
            <button
              onClick={() => {
                const donationAmount = customAmount || selectedAmount;
                if (donationAmount) {
                  // PayFast Integration
                  const baseUrl = payfastConfig.sandbox ? 'https://sandbox.payfast.co.za/eng/process' : 'https://www.payfast.co.za/eng/process';

                  const form = document.createElement('form');
                  form.method = 'POST';
                  form.action = baseUrl;

                  const params = {
                    merchant_id: payfastConfig.merchantId,
                    merchant_key: payfastConfig.merchantKey,
                    amount: donationAmount.toString(),
                    item_name: 'Donation to Al-Taawun Fi Al',
                    return_url: payfastConfig.returnUrl,
                    cancel_url: payfastConfig.cancelUrl,
                    notify_url: payfastConfig.notifyUrl,
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
