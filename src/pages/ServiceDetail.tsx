import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, CONTACT_INFO } from '../data';
import { ChevronLeft, Calendar, MessageSquare, CheckCircle2, X, Send, Loader2, FileDown } from 'lucide-react';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

// Extend jsPDF with autoTable
interface jsPDFWithAutoTable extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: service?.title || '',
    message: ''
  });

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
          <Link to="/" className="text-primary-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const generatePDF = (data: typeof formData) => {
    const doc = new jsPDF() as jsPDFWithAutoTable;
    const timestamp = new Date().toLocaleString();
    
    // Add Logo or Title
    doc.setFontSize(22);
    doc.setTextColor(255, 0, 0); // Red color for branding
    doc.text('Zarvi Studio', 105, 20, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Consultancy Request Summary', 105, 30, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated on: ${timestamp}`, 105, 38, { align: 'center' });
    
    // Add Table
    doc.autoTable({
      startY: 50,
      head: [['Field', 'Details']],
      body: [
        ['Client Name', data.name],
        ['Phone Number', data.phone],
        ['Business Category', data.category],
        ['Message/Details', data.message],
        ['Request Date', timestamp],
      ],
      theme: 'grid',
      headStyles: { fillColor: [255, 0, 0] },
      styles: { fontSize: 12, cellPadding: 5 },
    });
    
    // Add Footer
    const finalY = (doc as any).lastAutoTable.finalY || 150;
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text('Thank you for choosing Zarvi Studio. We will contact you soon.', 105, finalY + 20, { align: 'center' });
    
    // Save the PDF
    doc.save(`Zarvi_Consultancy_${data.name.replace(/\s+/g, '_')}.pdf`);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // To connect this to your Google Sheet, you need to set up a Google Apps Script as a Web App.
      // Use the script provided in the instructions.
      const GOOGLE_SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycby_r_X_Y_Z_A_B_C_D_E_F_G_H_I_J_K_L_M_N_O_P_Q_R_S_T_U_V_W_X_Y_Z/exec'; // Replace with your actual Web App URL
      
      const submissionData = {
        ...formData,
        timestamp: new Date().toLocaleString(),
        source: 'Consultancy Request'
      };

      await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for cross-origin requests to Google Apps Script
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });
      
      // Generate PDF for the user
      generatePDF(formData);
      
      // WhatsApp Redirect
      const whatsappMessage = `*New Consultancy Request from Zarvi Studio*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Category:* ${formData.category}%0A` +
        `*Message:* ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');
      
      setIsSuccess(true);
      setFormData({ name: '', phone: '', category: service.title, message: '' });
      
      setTimeout(() => {
        setIsSuccess(false);
        setIsModalOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-600/20 flex items-center justify-center border border-primary-600/30">
                <service.icon className="text-primary-500 w-8 h-8" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tight">{service.title}</h1>
            </div>

            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              {service.details}
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="text-2xl font-bold mb-4">What's Included:</h3>
              {[
                "Professional Consultation",
                "Custom Strategy Development",
                "High-Quality Execution",
                "Dedicated Support Team",
                "Performance Tracking"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-primary-500 w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=I'm interested in ${service.title} service.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-green-600/20"
              >
                <Calendar size={20} /> Book Now
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageSquare size={20} /> Consultancy
              </button>
            </div>
          </motion.div>

          {/* Right: Pricing/Plan Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[32px] md:rounded-[40px] p-8 md:p-12 shadow-2xl lg:sticky lg:top-32"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Monthly Plan</h2>
              <p className="text-zinc-400">Best for growing businesses</p>
            </div>

            <div className="mb-10">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl md:text-5xl font-black text-primary-500">Contact</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Our monthly plans are tailored specifically to your business needs and goals. Contact us for a custom quote.
              </p>
            </div>

            <div className="space-y-6">
              <button 
                onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-primary-600/20"
              >
                Get Started
              </button>
              <p className="text-center text-zinc-500 text-sm">
                No hidden fees. Cancel anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Consultancy Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Consultancy Request</h2>
                  <p className="text-zinc-400">Fill out the form below to get in touch.</p>
                </div>

                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-green-500 w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                    <p className="text-zinc-400">We will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleModalSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-zinc-400">Your Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-colors"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-zinc-400">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-colors"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-zinc-400">Business Category</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-colors"
                        value={formData.category}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-zinc-400">Message or Details</label>
                      <textarea
                        rows={3}
                        required
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-colors resize-none"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-zinc-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary-600/20"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
