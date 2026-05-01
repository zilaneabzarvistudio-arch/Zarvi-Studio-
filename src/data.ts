import { 
  Camera, 
  Video, 
  UserCircle, 
  Megaphone, 
  Globe, 
  TrendingUp, 
  Code 
} from 'lucide-react';

export const CONTACT_INFO = {
  name: "Zarvi Studio",
  phone: "01886243310",
  email: "zarvistudio2023@gmail.com",
  address: "Darunnazat madrasa road, East Boxnagar, Sharulia, Demra, Dhaka, Bangladesh, 1361",
  whatsapp: "8801886243310"
};

export const SERVICES = [
  {
    id: "cinematography",
    title: "Cinematography",
    description: "High-quality cinematic video production for your brand and events.",
    icon: Video,
    details: "Our cinematography service focuses on storytelling through visuals. We use high-end equipment and creative techniques to capture the essence of your message, whether it's a commercial, a documentary, or a social media campaign."
  },
  {
    id: "photography",
    title: "Photography",
    description: "Professional photography services including product, event, and portrait.",
    icon: Camera,
    details: "Capturing moments that last forever. From professional product shoots to high-energy event coverage, our photography team ensures every frame is a masterpiece."
  },
  {
    id: "ad-services",
    title: "Ad Account & Campaign",
    description: "Expert management and strategic advertising campaigns for maximum ROI.",
    icon: Megaphone,
    details: "We handle the complexities of ad account setup and management while designing data-driven campaigns to reach your target audience and drive real business growth."
  },
  {
    id: "website-develop",
    title: "Website Development",
    description: "Custom website design and development tailored to your needs.",
    icon: Globe,
    details: "A website is your digital storefront. We build responsive, fast, and user-friendly websites that not only look great but also convert visitors into customers."
  },
  {
    id: "business-growth",
    title: "Business Growth Consultancy",
    description: "Strategic advice to help your business scale and succeed.",
    icon: TrendingUp,
    details: "We provide expert consultancy to identify growth opportunities, optimize operations, and implement strategies that lead to sustainable business success."
  },
  {
    id: "software-develop",
    title: "Software Development",
    description: "Bespoke software solutions to streamline your business processes.",
    icon: Code,
    details: "From custom CRM systems to specialized business tools, we develop software that solves your unique challenges and improves efficiency."
  }
];

export const FEATURES = [
  "5 Years Experienced Team",
  "Expert Digital Marketers",
  "Professional Sound Designers",
  "Skilled Editing Team",
  "Expert Script Writers"
];

export const WHY_CHOOSE_US = [
  {
    title: "Extensive Expertise",
    description: "Leverage the knowledge of a diverse team of seasoned professionals, each highly skilled across multiple digital marketing disciplines. We provide comprehensive support to meet all your online growth needs."
  },
  {
    title: "Proven Track Record",
    description: "Our portfolio speaks for itself, showcasing a history of successful projects and delighted clients. We deliver measurable results that drive real business impact."
  },
  {
    title: "Innovative Strategies",
    description: "Stay ahead of the curve with forward-thinking strategies that utilize AI, automation, and compelling creative visuals to outshine the competition."
  },
  {
    title: "Personalized Solutions",
    description: "We craft strategies uniquely tailored to your business, audience, and goals, ensuring maximum effectiveness and return on investment."
  },
  {
    title: "Client-Centric Approach",
    description: "Enjoy a partnership built on transparent communication, regular updates, and ongoing support. Your success is our top priority."
  },
  {
    title: "Data-Driven Insights",
    description: "Harness the power of analytics to make informed decisions. Our strategies are backed by data, ensuring every action is purposeful and results-oriented."
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Corporate Brand Film",
    serviceId: "cinematography",
    image: "https://picsum.photos/seed/project1/800/600",
    description: "A high-end brand film for a leading tech company."
  },
  {
    id: 2,
    title: "Fashion Photography",
    serviceId: "photography",
    image: "https://picsum.photos/seed/project2/800/600",
    description: "Seasonal catalog shoot for a premium clothing brand."
  },
  {
    id: 3,
    title: "E-commerce Platform",
    serviceId: "website-develop",
    image: "https://picsum.photos/seed/project3/800/600",
    description: "Full-stack development of a modern e-commerce site."
  },
  {
    id: 4,
    title: "Social Media Campaign",
    serviceId: "ad-services",
    image: "https://picsum.photos/seed/project4/800/600",
    description: "Viral marketing campaign that reached 1M+ users."
  },
  {
    id: 5,
    title: "Business Growth Strategy",
    serviceId: "business-growth",
    image: "https://picsum.photos/seed/project5/800/600",
    description: "Strategic consultancy that increased revenue by 200%."
  },
  {
    id: 6,
    title: "Custom CRM System",
    serviceId: "software-develop",
    image: "https://picsum.photos/seed/project6/800/600",
    description: "Bespoke software solution for enterprise management."
  }
];
