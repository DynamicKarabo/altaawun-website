import {
    Heart, HandHelping, Shirt, Church, Moon, Home, Backpack,
    Sparkles, Users, Shield, Stethoscope, Brain, Baby, BookOpen,
    Rocket, Crown, Wrench, Smile, Database, MessageCircle, Map,
    BarChart, Network, Megaphone
} from 'lucide-react';

export const corePrograms = [
    {
        icon: Heart,
        title: 'Humanitarian Aid & Emergency Relief',
        description: 'Support to emergency response, including food vouchers, hygiene packs, and emergency grants, to affected disaster or crisis-affected communities.',
        color: 'from-[#19586d] to-[#3cb24a]',
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800'
    },
    {
        icon: HandHelping,
        title: 'Community Feeding Schemes',
        description: 'Daily meal schemes and mobile kitchens delivering healthy meals to children, the elderly, and vulnerable families.',
        color: 'from-[#3cb24a] to-[#a58644]',
        image: 'https://i.postimg.cc/hjHMvKFV/Whats-App-Image-2025-11-20-at-10-29-51.jpg'
    },
    {
        icon: Shirt,
        title: 'Clothing Drives for Vulnerable Families',
        description: 'Seasonal and year-round efforts to collect, sort, and distribute clothing and blankets to those in need.',
        color: 'from-[#a58644] to-[#f6a947]',
        image: 'https://i.postimg.cc/tRdpbJHp/Whats-App-Image-2025-11-20-at-10-30-06.jpg'
    },
    {
        icon: Church,
        title: 'Mosque Support & Outreach',
        description: 'Care of mosque buildings, and initiatives encouraging community prayer, learning, and support.',
        color: 'from-[#f6a947] to-[#19586d]',
        image: 'https://i.postimg.cc/bYbyb9dM/Whats-App-Image-2025-11-17-at-13-45-31-(1).jpg'
    },
    {
        icon: Moon,
        title: 'Ramadan Iftar & Outreach Programs',
        description: 'Daily fast-breaking sessions, zakat distribution, and communal iftars that instill unity and spirituality.',
        color: 'from-[#19586d] to-[#3cb24a]',
        image: 'https://i.postimg.cc/RFX4xpj7/Whats-App-Image-2025-11-20-at-10-29-52.jpg'
    },
    {
        icon: Home,
        title: 'Safe House & Shelter Services',
        description: 'Confidential refuge and wrap-around care for victims of abuse, trafficking, or family breakdown—providing counseling, referral to legal aid, and life skills training.',
        color: 'from-[#3cb24a] to-[#a58644]',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800'
    },
    {
        icon: Backpack,
        title: 'Back-to-School Campaigns',
        description: 'Distribution of school uniform, school bag, and stationery; further preparatory sessions to equip all children for learning at the start of the new school year.',
        color: 'from-[#a58644] to-[#f6a947]',
        image: 'https://i.postimg.cc/1zHgn1Ck/Whats-App-Image-2025-11-20-at-10-29-43.jpg'
    },
    {
        icon: Sparkles,
        title: 'ATFA Mother\'s Day Celebrations',
        description: 'Lavish celebrations honoring mothers and caregivers, integrating health checkups, wellness speeches, and gift-giving to recognize their life-giving roles.',
        color: 'from-[#f6a947] to-[#19586d]',
        image: 'https://i.postimg.cc/y6QVbXrm/flowers.webp'
    },
    {
        icon: Users,
        title: 'Mandela Day Community Service Projects',
        description: 'Daily activities involving volunteers—a year-round initiative of clean-up operations in city neighborhoods, reforestation initiatives, and repairs of public installations—inspired by Nelson Mandela\'s ethos of service.',
        color: 'from-[#19586d] to-[#3cb24a]',
        image: 'https://i.postimg.cc/KvVp4XLP/Whats-App-Image-2025-11-20-at-10-29-56.jpg'
    },
    {
        icon: Shield,
        title: 'GBVF Awareness, Prevention & Support',
        description: 'Community discourse, legal aid clinics, and survivor support organizations for Gender-Based Violence & Femicide in partnership with grassroots NGOs and local law enforcement agencies.',
        color: 'from-[#3cb24a] to-[#a58644]',
        image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800'
    },
    {
        icon: Stethoscope,
        title: 'Community Health & Well-Being Clinics',
        description: 'Regular rounds of basic check-ups by the medical team, vaccination drives, and mental-health counselling with marginalized communities.',
        color: 'from-[#a58644] to-[#f6a947]',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
    },
    {
        icon: Brain,
        title: 'Counseling & Psychosocial Support',
        description: 'Group therapy, trauma-informed workshops, and referral networks to develop emotional resilience and social cohesion.',
        color: 'from-[#f6a947] to-[#19586d]',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800'
    }
];

export const lifeStagePrograms = {
    children: {
        icon: Baby,
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
        icon: BookOpen,
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
        icon: Rocket,
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
        icon: Crown,
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
        icon: Wrench,
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
        icon: Smile,
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

export const knowledgePrograms = [
    {
        icon: Database,
        title: 'Community Knowledge Management',
        description: 'Curate, archive, and share stories, testimonies, and local data to build a living repository of community wisdom. Run digital and in-person "memory banks" that inform program planning and policy proposals.',
        color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
        icon: MessageCircle,
        title: 'Memory-Based Dialogue Interventions',
        description: 'Host formal conversations—story circles, oral history workshops, intergenerational forums—that dig up experience as a problem-solving foundation. Train facilitators in trauma-informed and culturally sensitive methods.',
        color: 'from-[#3cb24a] to-[#a58644]'
    },
    {
        icon: Map,
        title: 'Integrated Information Platform',
        description: 'Construct and maintain an interactive online platform compiling research, case studies, multimedia, and best-practice toolkits. Leverage GIS mapping, data visualization, and real-time analytics to track social indicators.',
        color: 'from-[#a58644] to-[#f6a947]'
    },
    {
        icon: BarChart,
        title: 'Evidence-Driven Solution Design',
        description: 'Transform dialogue insights and community data into context-appropriate interventions—pilot projects, policy briefs, and replicable models. Engage cross-sector stakeholders in co-creation labs.',
        color: 'from-[#f6a947] to-[#19586d]'
    },
    {
        icon: Network,
        title: 'Capacity Building & Knowledge Sharing',
        description: 'Offer training for local leaders, practitioners, and youth ambassadors on research skills, project management, and advocacy. Conduct learning exchanges and symposiums to facilitate peer-to-peer collaboration.',
        color: 'from-[#19586d] to-[#3cb24a]'
    },
    {
        icon: Megaphone,
        title: 'Partnerships & Policy Advocacy',
        description: 'Build strategic alliances with universities, NGOs, and government agencies to infuse grassroots views into policy discussion.',
        color: 'from-[#3cb24a] to-[#a58644]'
    }
];
