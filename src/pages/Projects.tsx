import { motion } from 'motion/react';
import { PROJECTS, CONTACT_INFO } from '../data';
import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our <span className="text-primary-600">Projects</span></h1>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Take a look at some of our best work across various services. We deliver quality and excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {project.serviceId.replace('-', ' ')}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-zinc-500 mb-6">{project.description}</p>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-600/20"
                >
                  <MessageCircle size={20} /> Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
