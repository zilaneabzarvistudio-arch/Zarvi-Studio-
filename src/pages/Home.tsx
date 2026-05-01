import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES, FEATURES, WHY_CHOOSE_US } from '../data';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  Users,
  BadgeCheck,
  Lightbulb,
  Puzzle,
  UserRoundCheck,
  Globe,
  Play
} from 'lucide-react';
import { CONTACT_INFO } from '../data';
import LeadForm from '../components/LeadForm';

const QUALITY_VIDEOS = [
  "hCo_rV8nXX8",
  "p2infkwdl8U",
  "F6LkTw3XzuU",
  "cKyZr0AbgkU",
  "kZJY2ik4VYI",
  "5AEtTA7Qwfo",
  "Vx2yTVE8eRQ",
  "lokJ9vxlgHA",
  "C0PRyX8qheY"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SERVICES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  // Auto-slide for Clients Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 100, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black selection:bg-primary-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative flex items-center pt-28 pb-10 lg:pt-32 lg:pb-12 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0" />
        
        {/* Decorative Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-2 md:px-4 relative z-10">
          <div className="flex flex-row items-center gap-2 md:gap-16">
            {/* Left Content */}
            <div className="w-[55%] text-left order-1">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[14px] md:text-4xl lg:text-5xl font-bold mb-2 md:mb-6 leading-tight text-white tracking-tight"
              >
                All Your Business <br />
                <span className="text-primary-600">Solutions In One Place.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[8px] md:text-xl text-zinc-400 mb-3 md:mb-10 max-w-xl leading-relaxed"
              >
                We provide professional cinematography, photography, digital marketing, and software development solutions to scale your business.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-row gap-1.5 md:gap-4 justify-start"
              >
                <button 
                  onClick={scrollToForm}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-2 md:px-8 py-1 md:py-4 rounded-md md:rounded-full font-bold text-[8px] md:text-lg transition-all transform hover:scale-105 shadow-xl shadow-primary-600/20 text-center"
                >
                  Book Now
                </button>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-2 md:px-8 py-1 md:py-4 rounded-md md:rounded-full font-bold text-[8px] md:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-1 md:gap-2 shadow-lg"
                >
                  <svg className="w-2 h-2 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Right Content (Video) */}
            <div className="w-[45%] relative order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl border-2 md:border-4 border-white aspect-video bg-zinc-100 w-full"
              >
                {/* Video Frame (YouTube Embed) */}
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/x9u53yDQ-rY?autoplay=1&mute=1&loop=1&playlist=x9u53yDQ-rY" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </motion.div>
              
              {/* Floating Success Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-white p-2 md:p-4 rounded-lg md:rounded-2xl shadow-xl border border-zinc-100 z-20"
              >
                <div className="flex items-center gap-1 md:gap-3">
                  <div className="w-5 h-5 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-3 h-3 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[6px] md:text-[10px] text-zinc-500 uppercase tracking-wider leading-none">Success Rate</p>
                    <p className="font-bold text-[8px] md:text-base text-black leading-none">99%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-1 md:px-4 relative z-10">
          <div className="grid grid-cols-5 gap-1 md:gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-1.5 md:p-6 rounded-lg md:rounded-xl border border-zinc-200 flex flex-col items-center text-center gap-1.5 md:gap-4 shadow-sm hover:shadow-md transition-shadow h-full justify-center"
              >
                <CheckCircle2 className="text-primary-600 w-4 h-4 md:w-10 md:h-10" />
                <p className="font-bold text-[7px] md:text-lg text-zinc-800 leading-tight">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Image Layout Reference) */}
      <section className="py-24 bg-[#6D489E] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />
        
        {/* Decorative Orbs to match Hero */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-2 md:px-4 relative z-10">
          <div className="flex flex-row gap-2 md:gap-8 items-stretch">
            
            {/* Left: Featured Service Card */}
            <div className="w-[45%] lg:w-[40%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={SERVICES[currentSlide].id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-black p-3 md:p-16 rounded-xl md:rounded-[40px] border border-white/5 h-full flex flex-col justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden group"
                >
                  {/* Subtle background glow */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary-600/10 rounded-full blur-[80px]" />
                  
                  <h3 className="text-[12px] md:text-4xl lg:text-5xl font-bold mb-2 md:mb-6 text-white leading-tight relative z-10">
                    {SERVICES[currentSlide].title}
                  </h3>
                  <p className="text-[7px] md:text-lg text-zinc-400 leading-relaxed mb-3 md:mb-10 line-clamp-3 md:line-clamp-none relative z-10">
                    {SERVICES[currentSlide].details.split('.')[0]}.
                  </p>
                  <div className="flex flex-row gap-1.5 md:gap-4 relative z-10">
                    <Link 
                      to="/projects"
                      className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-2 md:px-8 py-1 md:py-4 rounded-full font-bold border border-white/20 hover:border-primary-600 transition-all transform hover:scale-105 text-[7px] md:text-base text-center shadow-lg"
                    >
                      Projects
                    </Link>
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white px-2 md:px-8 py-1 md:py-4 rounded-full font-bold flex items-center justify-center gap-1 md:gap-2 transition-all transform hover:scale-105 shadow-[0_4px_15px_rgba(37,211,102,0.3)] text-[7px] md:text-base border border-white/10"
                    >
                      <Calendar size={8} className="md:w-5 md:h-5" /> Book
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Service Slider List */}
            <div className="w-[55%] lg:w-[60%] flex flex-col justify-between">
              <div className="mb-2 md:mb-8">
                <h4 className="text-[10px] md:text-4xl font-black text-white uppercase tracking-widest mb-2 md:mb-8">Professional Services</h4>
                <div 
                  className="relative overflow-hidden"
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    (window as any).touchStartX = touch.clientX;
                  }}
                  onTouchEnd={(e) => {
                    const touch = e.changedTouches[0];
                    const touchEndX = touch.clientX;
                    const diff = (window as any).touchStartX - touchEndX;
                    if (Math.abs(diff) > 50) {
                      if (diff > 0) nextSlide();
                      else prevSlide();
                    }
                  }}
                >
                  <div 
                    className="flex gap-1.5 md:gap-4 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * (window.innerWidth < 768 ? 106 : 296)}px)` }}
                  >
                    {SERVICES.map((service, idx) => (
                      <div 
                        key={service.id}
                        className={`w-[100px] md:w-[280px] h-[150px] md:h-[400px] rounded-lg md:rounded-3xl overflow-hidden shrink-0 relative group cursor-pointer transition-all duration-500 shadow-2xl shadow-black/50 border md:border-4 ${idx === currentSlide ? 'border-[#ff2d2d]' : 'border-white/10 opacity-40 hover:opacity-100'}`}
                        onClick={() => setCurrentSlide(idx)}
                      >
                        <img 
                          src={`https://picsum.photos/seed/${service.id}/600/800`} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2 md:bottom-6 md:left-6 md:right-6">
                          <service.icon className="text-primary-400 mb-0.5 md:mb-2 w-3 h-3 md:w-8 md:h-8" />
                          <h5 className="text-[8px] md:text-xl font-bold truncate">{service.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-1 md:mt-8">
                <div className="flex gap-1.5 md:gap-4">
                  <button 
                    onClick={prevSlide}
                    className="w-6 h-6 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all shadow-lg"
                  >
                    <ChevronLeft size={12} className="md:w-6 md:h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-6 h-6 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all shadow-lg"
                  >
                    <ChevronRight size={12} className="md:w-6 md:h-6" />
                  </button>
                </div>
                <Link 
                  to="/service/cinematography"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-2 md:px-6 py-1.5 md:py-3 rounded-md font-bold flex items-center gap-1 md:gap-2 transition-all text-[8px] md:text-base"
                >
                  Services <ArrowRight size={10} className="md:w-5 md:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Animated Golden Circuit Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-40">
            <filter id="gold-glow-filter-thick">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {[...Array(12)].map((_, i) => {
              const driftX = Math.random() * 15 - 7.5;
              const driftY = Math.random() * 15 - 7.5;
              return (
                <motion.path
                  key={i}
                  d={`M ${Math.random() * 100} ${Math.random() * 100} ${Math.random() > 0.5 ? 'H' : 'V'} ${Math.random() * 100} ${Math.random() > 0.5 ? 'V' : 'H'} ${Math.random() * 100}`}
                  stroke="#ff2d2d"
                  strokeWidth="0.4"
                  fill="none"
                  filter="url(#gold-glow-filter-thick)"
                  initial={{ pathLength: 0, opacity: 0, x: 0, y: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 0.7, 0.7, 0],
                    x: [0, driftX, 0],
                    y: [0, driftY, 0]
                  }}
                  transition={{ 
                    duration: 12 + Math.random() * 18,
                    repeat: Infinity,
                    delay: Math.random() * 8,
                    ease: "linear"
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        <div className="container mx-auto px-2 md:px-4 relative z-10">
          <div className="flex flex-row gap-4 md:gap-16 items-start">
            {/* Left Side: Heading + Alternating Timeline (capture.png style) */}
            <div className="w-[40%] lg:w-[35%]">
              <div className="mb-4 md:mb-8 text-left">
                <motion.h3 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-script text-sm md:text-2xl text-primary-500 mb-0.5 md:mb-1"
                >
                  Your Dream
                </motion.h3>
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xs md:text-4xl font-black text-white uppercase tracking-tighter leading-none"
                >
                  OUR CREATION
                </motion.h2>
              </div>

              {/* Alternating Timeline Layout (capture.png style) */}
              <div className="relative py-2 md:py-4 max-w-md mx-0">
                {/* Central Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px md:w-0.5 bg-primary-500/30 -translate-x-1/2" />
                
                <div className="space-y-0 relative">
                  {[
                    { title: "Extensive Expertise", icon: Users },
                    { title: "Proven Track Record", icon: BadgeCheck },
                    { title: "Innovative Strategies", icon: Lightbulb },
                    { title: "Personalized Solutions", icon: Puzzle },
                    { title: "Client-Centric Approach", icon: UserRoundCheck },
                    { title: "Data-Driven Insights", icon: Globe },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex flex-row items-center justify-between mb-3 md:mb-6 last:mb-0 ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                      {/* Hexagon + Title Side */}
                      <div className={`w-[48%] flex items-center gap-1 md:gap-2 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        {/* Hexagon Side */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="relative z-10 w-6 h-6 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0"
                        >
                          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_4px_rgba(230,38,39,0.4)]">
                            <path 
                              d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" 
                              fill="url(#hex-grad-timeline)"
                              stroke="#e62627"
                              strokeWidth="3"
                            />
                            <defs>
                              <linearGradient id="hex-grad-timeline" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#e62627" />
                                <stop offset="100%" stopColor="#8b0000" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <item.icon className="relative z-10 text-white w-2.5 h-2.5 md:w-6 md:h-6" />
                        </motion.div>

                        {/* Title Side */}
                        <motion.div 
                          initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'} flex-grow`}
                        >
                          <h4 className={`text-white font-bold text-[5px] md:text-[11px] uppercase tracking-wider mb-0 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>{item.title}</h4>
                          {/* Horizontal Connector Line to Center */}
                          <div className="h-[0.5px] md:h-0.5 bg-primary-500/50 w-full" />
                        </motion.div>
                      </div>

                      {/* Empty side for layout balance */}
                      <div className="w-[48%]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Detailed Why Choose Us */}
            <div className="w-[60%] lg:w-[65%] pt-2 md:pt-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm md:text-5xl font-bold text-white mb-4 md:mb-16 text-left"
              >
                Why Choose Us?
              </motion.h2>
              
              <div className="grid grid-cols-2 gap-x-2 md:gap-x-10 gap-y-3 md:gap-y-12">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-left"
                  >
                    <h4 className="text-[7px] md:text-2xl font-bold text-primary-500 mb-0.5 md:mb-4">{item.title}</h4>
                    <p className="text-white/70 text-[5px] md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Quality Video Section */}
      <section className="py-12 md:py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-2 md:px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-4xl font-bold text-white tracking-tight"
            >
              Experience <span className="text-[#ff2d2d]">Quality Video</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-3 gap-1.5 md:gap-6">
            {QUALITY_VIDEOS.map((videoId, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative aspect-video rounded-sm md:rounded-lg overflow-hidden bg-zinc-800 shadow-lg"
              >
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}${idx === 0 ? '?autoplay=1&mute=1&loop=1&playlist=' + videoId : ''}`}
                  title={`Video ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 md:py-20 bg-black relative overflow-hidden">
        {/* Animated Golden Circuit Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-40">
            <filter id="gold-glow-filter">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {[...Array(15)].map((_, i) => {
              const driftX = Math.random() * 10 - 5;
              const driftY = Math.random() * 10 - 5;
              return (
                <motion.path
                  key={i}
                  d={`M ${Math.random() * 100} ${Math.random() * 100} ${Math.random() > 0.5 ? 'H' : 'V'} ${Math.random() * 100} ${Math.random() > 0.5 ? 'V' : 'H'} ${Math.random() * 100}`}
                  stroke="#ff2d2d"
                  strokeWidth="0.15"
                  fill="none"
                  filter="url(#gold-glow-filter)"
                  initial={{ pathLength: 0, opacity: 0, x: 0, y: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 0.8, 0.8, 0],
                    x: [0, driftX, 0],
                    y: [0, driftY, 0]
                  }}
                  transition={{ 
                    duration: 15 + Math.random() * 20,
                    repeat: Infinity,
                    delay: Math.random() * 10,
                    ease: "linear"
                  }}
                />
              );
            })}
          </svg>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-primary-600/5 to-transparent pointer-events-none"
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-2 md:px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-5xl font-black text-white tracking-tight"
            >
              Our <span className="text-[#ff2d2d]">Services</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-zinc-900/50 backdrop-blur-sm border border-[#ff2d2d]/30 p-3 md:p-8 rounded-xl md:rounded-3xl hover:border-[#ff2d2d] transition-all duration-300 flex flex-col items-center text-center shadow-xl h-full"
              >
                <div className="w-8 h-8 md:w-20 md:h-20 rounded-lg md:rounded-2xl bg-primary-600/10 flex items-center justify-center mb-2 md:mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary-600/20">
                  <service.icon className="text-primary-500 w-4 h-4 md:w-10 md:h-10" />
                </div>
                <h3 className="text-[9px] md:text-2xl font-bold text-white mb-1 md:mb-4">{service.title}</h3>
                <p className="text-zinc-400 text-[7px] md:text-base mb-2 md:mb-8 line-clamp-2 md:line-clamp-none">
                  {service.description}
                </p>
                <Link 
                  to={`/service/${service.id}`}
                  className="mt-auto inline-flex items-center gap-1 md:gap-2 text-primary-500 font-bold hover:text-primary-400 transition-colors group/link text-[7px] md:text-base"
                >
                  Learn More <ArrowRight size={8} className="md:w-[18px] md:h-[18px] group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Valued Clients Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-black text-white tracking-tight mb-0 text-center md:text-left"
            >
              Our <span className="text-[#ff2d2d]">Valued Clients</span>
            </motion.h2>
            
            {/* Manual Controls */}
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.scrollBy({ left: -100, behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.scrollBy({ left: 100, behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div 
            ref={sliderRef}
            className="flex gap-2 md:gap-4 overflow-x-hidden pb-8 scroll-smooth no-scrollbar"
          >
            {[...Array(12)].map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 6) * 0.1 }}
                className="flex-shrink-0 w-12 md:w-36 h-12 md:h-36 bg-white rounded flex flex-col items-center justify-center p-1 md:p-4 shadow-xl group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center">
                  <span className="block text-black font-black text-[6px] md:text-xl leading-none">ZARVI</span>
                  <span className="block text-[#e72629] font-black text-[6px] md:text-xl leading-none">STUDIO</span>
                </div>
                <div className="mt-1 md:mt-4 w-4 md:w-12 h-0.5 md:h-1 bg-[#e72629] rounded-full opacity-20 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#ff2d2d]' : 'bg-zinc-700'}`} />
            ))}
          </div>
        </div>
        
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      </section>

      {/* About Section */}
      <section className="py-12 md:py-24 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-2 md:px-4 flex flex-row items-center gap-4 md:gap-16 relative z-10">
          <div className="w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm md:text-5xl font-bold mb-2 md:mb-8 leading-tight">About <span className="text-primary-600">Zarvi Studio</span></h2>
              <p className="text-zinc-600 text-[8px] md:text-lg leading-relaxed mb-1 md:mb-6">
                Zarvi Studio is a trusted name in the social marketing landscape of Bangladesh.
              </p>
              <p className="text-zinc-600 text-[8px] md:text-lg leading-relaxed mb-2 md:mb-10">
                With our 5-year experienced team, we bring a new dimension to your brand.
              </p>
              <button 
                onClick={scrollToForm}
                className="bg-primary-600 hover:bg-primary-700 text-white px-3 md:px-10 py-1 md:py-4 rounded-full font-bold transition-all shadow-xl shadow-primary-600/20 text-[8px] md:text-base"
              >
                Book Now
              </button>
            </motion.div>
          </div>
          <div className="w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-lg md:rounded-[40px] overflow-hidden shadow-2xl border-2 md:border-4 border-white aspect-video bg-zinc-900 flex items-center justify-center group cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.span
                   animate={{ 
                     opacity: [0.3, 0.6, 0.3],
                     scale: [1, 1.05, 1]
                   }}
                   transition={{ 
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                   className="text-white/20 text-[10px] md:text-4xl font-black tracking-[0.2em] uppercase select-none"
                 >
                   Zarvi Studio
                 </motion.span>
              </div>
              
              <div className="relative z-10 w-8 h-8 md:w-20 md:h-20 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform">
                <Play fill="currentColor" className="ml-1 w-4 h-4 md:w-10 md:h-10" />
              </div>
              
              {/* YouTube Frame Overlay Look */}
              <div className="absolute top-0 left-0 right-0 p-2 md:p-6 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-[8px] md:text-lg font-medium truncate">About Zarvi Studio | Official Presentation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <LeadForm />
    </div>
  );
}
