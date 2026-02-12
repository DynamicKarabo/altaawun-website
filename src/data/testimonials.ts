import { Droplet, GraduationCap, Heart } from 'lucide-react';

export const impactStories = [
    {
        image: 'https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvcmVob2xlJTIwYWZyaWNhfGVufDF8fHx8MTc2MjkzMzExOXww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Water project in Limpopo',
        icon: Droplet,
        gradient: 'from-[#19586d] to-[#3cb24a]',
        title: 'Clean Water Transforms Village',
        quote: '"My daughters can now attend school every day. Before the borehole, they had to help fetch water and often missed classes."',
        author: 'Nomsa, Thembisa Village',
        stat: '340 people served',
        colorClass: 'text-[#19586d]'
    },
    {
        image: 'https://i.postimg.cc/d31txcNx/Whats-App-Image-2025-11-20-at-10-23-17.jpg',
        alt: 'Student success story',
        icon: GraduationCap,
        gradient: 'from-[#f6a947] to-[#a58644]',
        title: 'From Bursary to Teacher',
        quote: '"I thought university was just a dream. The bursary made it possible. I\'m now studying to be a teacher to help my community."',
        author: 'Sipho, Education Student',
        stat: '45 bursaries awarded',
        colorClass: 'text-[#a58644]'
    },
    {
        image: 'https://i.postimg.cc/hjHMvKFV/Whats-App-Image-2025-11-20-at-10-29-51.jpg',
        alt: 'Feeding program impact',
        icon: Heart,
        gradient: 'from-[#3cb24a] to-[#19586d]',
        title: 'Nourishing Families with Dignity',
        quote: '"I know my children get a warm, healthy meal every day. It gives me peace of mind as I work to provide for them."',
        author: 'Grace, Soweto',
        stat: '2,400 children fed daily',
        colorClass: 'text-[#3cb24a]'
    }
];
