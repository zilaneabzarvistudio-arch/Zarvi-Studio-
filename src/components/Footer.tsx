import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageSquare, MessageCircle, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8 md:pt-20 pb-6 md:pb-10 border-t border-white/5">
      <div className="container mx-auto px-2 md:px-4">
        <div className="grid grid-cols-4 gap-2 md:gap-8 mb-8 md:mb-16 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-6">
              <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded md:rounded-lg flex flex-col items-center justify-center shadow-sm flex-shrink-0">
                <div className="text-center">
                  <span className="block text-black font-black text-[3px] md:text-[6px] leading-none">ZARVI</span>
                  <span className="block text-[#ff2d2d] font-black text-[3px] md:text-[6px] leading-none">STUDIO</span>
                </div>
              </div>
              <span className="text-[8px] md:text-2xl font-bold tracking-tighter uppercase leading-none">ZARVI <span className="text-[#ff2d2d]">STUDIO</span></span>
            </div>
            <p className="text-zinc-400 mb-3 md:mb-8 leading-tight md:leading-relaxed text-[6px] md:text-sm max-w-xs">
              Zarvi Studio is a trusted name in the social marketing landscape of Bangladesh.
            </p>
            <div className="flex flex-wrap gap-1 md:gap-3">
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-all"><MessageCircle size={10} className="md:w-4 md:h-4 text-white" /></a>
              <a href="#" className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-all"><Facebook size={10} className="md:w-4 md:h-4 text-white" /></a>
              <a href="#" className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#E4405F] flex items-center justify-center hover:scale-110 transition-all"><Instagram size={10} className="md:w-4 md:h-4 text-white" /></a>
              <a href="#" className="w-5 h-5 md:w-9 md:h-9 rounded-full bg-[#FF0000] flex items-center justify-center hover:scale-110 transition-all"><Youtube size={10} className="md:w-4 md:h-4 text-white" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[8px] md:text-lg font-bold mb-2 md:mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1 md:space-y-3">
              <li><a href="#home" className="text-zinc-400 hover:text-[#ff2d2d] transition-colors flex items-center gap-0.5 text-[6px] md:text-sm"><ChevronRight size={8} className="md:w-3 md:h-3 text-zinc-500" /> Home</a></li>
              <li><a href="#about" className="text-zinc-400 hover:text-[#ff2d2d] transition-colors flex items-center gap-0.5 text-[6px] md:text-sm"><ChevronRight size={8} className="md:w-3 md:h-3 text-zinc-500" /> About Us</a></li>
              <li><a href="#services" className="text-zinc-400 hover:text-[#ff2d2d] transition-colors flex items-center gap-0.5 text-[6px] md:text-sm"><ChevronRight size={8} className="md:w-3 md:h-3 text-zinc-500" /> Services</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-[#ff2d2d] transition-colors flex items-center gap-0.5 text-[6px] md:text-sm"><ChevronRight size={8} className="md:w-3 md:h-3 text-zinc-500" /> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[8px] md:text-lg font-bold mb-2 md:mb-6 text-white uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-1 md:space-y-3">
              <li><a href="#services" className="text-zinc-400 hover:text-[#ff2d2d] transition-colors flex items-center gap-0.5 text-[6px] md:text-sm"><ChevronRight size={8} className="md:w-3 md:h-3 text-zinc-500" /> Cinematography</a></li>
              <li><a href="#services" className="text-zinc-400 hover:text-[#ff2d2d] transition-colors flex items-center gap-0.5 text-[6px] md:text-sm"><ChevronRight size={8} className="md:w-3 md:h-3 text-zinc-500" /> Photography</a></li>
              <li><a href="#services" className="text-zinc-400 hover:text-[#ff2d2d] transition-colors flex items-center gap-0.5 text-[6px] md:text-sm"><ChevronRight size={8} className="md:w-3 md:h-3 text-zinc-500" /> Ad Account</a></li>
              <li><a href="#services" className="text-zinc-400 hover:text-[#ff2d2d] transition-colors flex items-center gap-0.5 text-[6px] md:text-sm"><ChevronRight size={8} className="md:w-3 md:h-3 text-zinc-500" /> Web Dev</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[8px] md:text-lg font-bold mb-2 md:mb-6 text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-2 md:space-y-5">
              <li className="flex items-start gap-1 md:gap-4">
                <div className="w-5 h-5 md:w-10 md:h-10 rounded md:rounded-lg bg-transparent flex items-center justify-center flex-shrink-0 border border-[#ff2d2d]/20">
                  <Phone className="text-[#ff2d2d] w-2.5 h-2.5 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-[5px] md:text-[10px] text-zinc-500 uppercase font-bold mb-0">Call Us</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-bold text-[6px] md:text-base hover:text-[#ff2d2d] transition-colors block leading-none">{CONTACT_INFO.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-1 md:gap-4">
                <div className="w-5 h-5 md:w-10 md:h-10 rounded md:rounded-lg bg-transparent flex items-center justify-center flex-shrink-0 border border-[#ff2d2d]/20">
                  <Mail className="text-[#ff2d2d] w-2.5 h-2.5 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-[5px] md:text-[10px] text-zinc-500 uppercase font-bold mb-0">Email Us</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-bold text-[6px] md:text-base break-all hover:text-[#ff2d2d] transition-colors block leading-none">{CONTACT_INFO.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-1 md:gap-4">
                <div className="w-5 h-5 md:w-10 md:h-10 rounded md:rounded-lg bg-transparent flex items-center justify-center flex-shrink-0 border border-[#ff2d2d]/20">
                  <MapPin className="text-[#ff2d2d] w-2.5 h-2.5 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-[5px] md:text-[10px] text-zinc-500 uppercase font-bold mb-0">Address</p>
                  <p className="text-white font-bold text-[6px] md:text-base leading-none">Darunnazat, Dhaka</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-4 md:pt-10 border-t border-white/5 text-zinc-500 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Zarvi Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
