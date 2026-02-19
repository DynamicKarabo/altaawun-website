import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';



export function LatestNews() {
  const news = [
    {
      image: 'https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvcmVob2xlJTIwYWZyaWNhfGVufDF8fHx8MTc2MjkzMzExOXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'New Borehole Brings Clean Water to 500 Families',
      excerpt: 'Our latest water project in rural Limpopo is now complete, providing reliable access to clean water for the first time.',
      date: 'November 8, 2024',
      category: 'Water Projects'
    },
    {
      image: 'https://i.postimg.cc/W4HZnS4v/Whats-App-Image-2025-11-20-at-10-29-48.jpg',
      title: '45 Bursaries Awarded for 2025 Academic Year',
      excerpt: 'We\'re proud to announce our largest bursary program yet, supporting deserving students to pursue their education dreams.',
      date: 'November 5, 2024',
      category: 'Education'
    },
    {
      image: 'https://i.postimg.cc/d1yVPc8C/Whats-App-Image-2025-11-17-at-13-42-30-(2).jpg',
      title: 'Feeding Scheme Expands to Three New Communities',
      excerpt: 'Our nutrition program now reaches an additional 800 children across Soweto and Alexandra townships.',
      date: 'October 28, 2024',
      category: 'Welfare'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-2">Latest News & Updates</h2>
            <p className="text-lg text-gray-600">Stay informed about our ongoing projects and impact</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-[#3cb24a] mb-3">
                  <span className="px-3 py-1 bg-[#3cb24a]/10 rounded-full">{item.category}</span>
                </div>
                <h3 className="text-xl text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    {item.date}
                  </div>
                  <button className="text-[#19586d] hover:text-[#3cb24a] transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Removed "View All News & Updates" button per design update */}
      </div>
    </section>
  );
}
