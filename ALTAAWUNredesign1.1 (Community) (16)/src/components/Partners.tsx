import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Partners() {
  const partners = [
    { name: 'Boxer', image: 'https://i.postimg.cc/Jzmp00LG/id-Ffe3r37x-1763378716996.png' },
    { name: 'Proudly South Africa', image: 'https://i.postimg.cc/7hdMNtFn/pngegg.png' },
    { name: 'PPC', image: 'https://i.postimg.cc/Vky3RzPx/ppc-stacked-logo.jpg' },
    { name: 'MICTSETA', image: 'https://i.postimg.cc/fLKz4JDd/mict-logo.png' },
    { name: 'Shoprite', image: 'https://i.postimg.cc/1tzG1Zss/a7ba129777f86a6274ee6b336cb3a469.png' },
    { name: 'INHANCE', image: 'https://i.postimg.cc/fLZHtbmZ/inhancelogo.jpg' },
    { name: 'The Gauteng Province', image: 'https://i.postimg.cc/c4WzgX7C/Government-of-Gauteng-logo-svg.png' },
    { name: 'AWQAF SA', image: 'https://i.postimg.cc/jdqbVgJ6/awqaflogo.jpg' },
    { name: 'Islamic Relief South Africa', image: 'https://i.postimg.cc/cLnsmdkw/e6117906b7b3a0d0cc2df219fefa0e31.png' },
    { name: 'Taxleaders', image: 'https://i.postimg.cc/G3xQNrYL/LOGO-VARIANTS-01-1536x241.webp'},
    { name: 'Ashraful Aid', image: 'https://i.postimg.cc/DfBDtqkr/ashlogo2.jpg'},
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working together with leading organizations to create lasting impact
          </p>
        </motion.div>

        {/* Partner Logos Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-32 h-20 flex items-center justify-center mb-2">
                    <ImageWithFallback
                      src={partner.image}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="text-sm text-gray-700">{partner.name}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Manual Grid for Better Display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-20 flex items-center justify-center mb-3">
                <ImageWithFallback
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-sm text-center text-gray-800">{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
