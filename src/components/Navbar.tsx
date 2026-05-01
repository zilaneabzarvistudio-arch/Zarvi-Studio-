import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary-100">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 md:gap-2">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded md:rounded-lg flex flex-col items-center justify-center shadow-md border border-zinc-100 group">
            <div className="text-center">
              <span className="block text-black font-black text-[5px] md:text-[8px] leading-none">ZARVI</span>
              <span className="block text-[#e72629] font-black text-[5px] md:text-[8px] leading-none">STUDIO</span>
            </div>
          </div>
          <span className="text-sm md:text-2xl font-bold tracking-tighter text-black uppercase">ZARVI <span className="text-primary-600">STUDIO</span></span>
        </Link>

        {/* Menu Items (Visible on all devices) */}
        <div className="flex items-center gap-3 md:gap-8">
          <Link to="/" className="text-[10px] md:text-base text-zinc-600 hover:text-primary-600 transition-colors font-medium">Home</Link>
          <a href="#lead-form" className="text-[10px] md:text-base text-zinc-600 hover:text-primary-600 transition-colors font-medium">Contact</a>
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="bg-primary-600 hover:bg-primary-700 text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full font-bold transition-all shadow-lg shadow-primary-600/20 text-[10px] md:text-base"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
