import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2, FileDown } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';

// Extend jsPDF with autoTable
interface jsPDFWithAutoTable extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    message: ''
  });

  const generatePDF = (data: typeof formData) => {
    const doc = new jsPDF() as jsPDFWithAutoTable;
    const timestamp = new Date().toLocaleString();
    
    // Add Logo or Title
    doc.setFontSize(22);
    doc.setTextColor(255, 0, 0); // Red color for branding
    doc.text('Zarvi Studio', 105, 20, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Contact Request Summary', 105, 30, { align: 'center' });
    
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
    doc.save(`Zarvi_Lead_${data.name.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const GOOGLE_SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycby_r_X_Y_Z_A_B_C_D_E_F_G_H_I_J_K_L_M_N_O_P_Q_R_S_T_U_V_W_X_Y_Z/exec'; // Replace with your actual Web App URL
      
      const submissionData = {
        ...formData,
        timestamp: new Date().toLocaleString(),
        source: 'Main Contact Form'
      };

      await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });

      // Generate PDF for the user
      generatePDF(formData);

      setIsSuccess(true);
      setFormData({ name: '', phone: '', category: '', message: '' });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-4 md:p-12 rounded-2xl md:rounded-[40px] border border-primary-100 shadow-xl shadow-primary-600/5 max-w-4xl mx-auto"
        >
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-5xl font-bold text-primary-600">Contact Us</h2>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-500 w-10 h-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-800">Request Sent!</h3>
                <p className="text-zinc-600 text-lg">We will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                  <div>
                    <label className="block text-[10px] md:text-lg font-medium mb-1 md:mb-2 text-zinc-700">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-4 text-[10px] md:text-lg focus:border-primary-500 outline-none transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-lg font-medium mb-1 md:mb-2 text-zinc-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-4 text-[10px] md:text-lg focus:border-primary-500 outline-none transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] md:text-lg font-medium mb-1 md:mb-2 text-zinc-700">Business Category</label>
                  <select
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-4 text-[10px] md:text-lg focus:border-primary-500 outline-none transition-colors"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="">Select your business category</option>
                    <option value="cinematography">Cinematography</option>
                    <option value="photography">Photography</option>
                    <option value="ad-services">Ad Account & Campaign</option>
                    <option value="website">Website Develop</option>
                    <option value="consultancy">Business Growth Consultancy</option>
                    <option value="software">Software Develop</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] md:text-lg font-medium mb-1 md:mb-2 text-zinc-700">Message or Details</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-4 text-[10px] md:text-lg focus:border-primary-500 outline-none transition-colors h-24 md:h-40 resize-none"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-zinc-400 text-white font-bold py-3 md:py-5 rounded-lg md:rounded-xl flex items-center justify-center gap-2 md:gap-3 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary-600/20 text-xs md:text-xl"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 md:w-8 md:h-8 animate-spin" />
                  ) : (
                    <>
                      <Send size={14} className="md:w-6 md:h-6" />
                      Send Information
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
