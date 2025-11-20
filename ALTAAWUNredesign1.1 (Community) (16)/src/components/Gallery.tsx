import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Easy to add images - just add URLs to this array
  const galleryImages = [
    {
      url: 'https://i.postimg.cc/wjRSXSmP/Whats-App-Image-2025-11-12-at-13-27-08.jpg',
      alt: '',
      title: ''
      
    },
    {
      url: 'https://i.postimg.cc/7Y0bWPfd/IMG-0899.jpg',
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/J08cYYPm/Whats-App-Image-2025-11-17-at-13-42-32.jpg',
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/BZ2hZDyG/IMG-1329.jpg',
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/MGmxBCkS/Whats-App-Image-2025-11-12-at-13-24-37.jpg',
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/wv8hn49j/IMG-1452.jpg',
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/MKKykQJN/IMG-0910.jpg',
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/44SGpvSD/Whats-App-Image-2025-11-12-at-13-24-27.jpg',
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/Jnhwktcr/Whats-App-Image-2025-11-12-at-13-24-26.jpg',
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/RVQwhTdy/Whats-App-Image-2025-11-17-at-13-23-55.jpg',
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/LX5VwsgZ/Whats-App-Image-2025-11-17-at-13-42-30.jpg', 
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/d0HfLp85/Whats-App-Image-2025-11-17-at-13-42-30-(1).jpg', 
      alt: '',
      title: ''
    },
    {
      url: 'https://i.postimg.cc/76wkHwZj/Whats-App-Image-2025-11-17-at-13-27-45.jpg',
      alt: '',
      title: ''
    }, 
    {
      url: 'https://i.postimg.cc/PNGKHrtY/Whats-App-Image-2025-11-17-at-13-30-02.jpg',
      alt: '',
      title: ''
    }, 
    {
      url: 'https://i.postimg.cc/FzZ3K5LW/Whats-App-Image-2025-11-17-at-13-40-39.jpg',
      alt: '',
      title: ''
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
              Our Gallery
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Moments of impact, stories of transformation, and communities thriving together
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl max-h-[90vh] w-full"
          >
            <ImageWithFallback
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl">{galleryImages[selectedImage].title}</h3>
            </div>
          </motion.div>
        </div>
      )}

      {/* Instructions Comment for Easy Editing */}
      {/* 
        TO ADD MORE IMAGES:
        1. Add a new object to the galleryImages array above
        2. Format: { url: 'IMAGE_URL_HERE', alt: 'Description', title: 'Title' }
        3. Images will automatically appear in the gallery grid
      */}
    </div>
  );
}
