import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function ContactForm({ darkMode }: { darkMode: boolean }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xeenwnjz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={`p-8 rounded-[24px] ${darkMode ? 'bg-white/10 border-white/20' : 'bg-white/80 border-white/50'} backdrop-blur-xl border shadow-xl relative overflow-hidden group`}>
      {/* Decorative gradient blur */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0A66FF] opacity-20 blur-[50px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-[#0A66FF]/40"></div>
      
      <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'} relative z-10`}>Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className={`text-sm font-semibold pl-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Full Name</label>
            <input 
              type="text" 
              name="name"
              required
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent transition-all duration-300 ${darkMode ? 'bg-slate-900/50 border-white/10 placeholder-slate-500 text-white hover:bg-slate-900/80' : 'bg-white border-slate-200 hover:border-slate-300'} shadow-sm`} 
              placeholder="Ahmad Raza" 
            />
          </div>
          <div className="space-y-1.5">
            <label className={`text-sm font-semibold pl-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent transition-all duration-300 ${darkMode ? 'bg-slate-900/50 border-white/10 placeholder-slate-500 text-white hover:bg-slate-900/80' : 'bg-white border-slate-200 hover:border-slate-300'} shadow-sm`} 
              placeholder="ahmad@example.com" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className={`text-sm font-semibold pl-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent transition-all duration-300 ${darkMode ? 'bg-slate-900/50 border-white/10 placeholder-slate-500 text-white hover:bg-slate-900/80' : 'bg-white border-slate-200 hover:border-slate-300'} shadow-sm`} 
              placeholder="+92 300 1234567" 
            />
          </div>
          <div className="space-y-1.5">
            <label className={`text-sm font-semibold pl-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Service Selection</label>
            <select
              name="service"
              required
              defaultValue=""
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent transition-all duration-300 appearance-none ${darkMode ? 'bg-slate-900/50 border-white/10 text-white hover:bg-slate-900/80' : 'bg-white border-slate-200 hover:border-slate-300'} shadow-sm`}
            >
              <option value="" disabled hidden>Select a Service</option>
              <option value="Website Development">Website Development</option>
              <option value="AI Automation">AI Automation</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Business Dashboard">Business Dashboard</option>
              <option value="Custom Project">Custom Project</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className={`text-sm font-semibold pl-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message</label>
          <textarea 
            name="message"
            required
            rows={4} 
            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0A66FF] focus:border-transparent transition-all duration-300 resize-none ${darkMode ? 'bg-slate-900/50 border-white/10 placeholder-slate-500 text-white hover:bg-slate-900/80' : 'bg-white border-slate-200 hover:border-slate-300'} shadow-sm`} 
            placeholder="How can we help you?"
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full relative overflow-hidden group bg-gradient-to-r from-[#0A66FF] to-[#0A66FF]/80 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(10,102,255,0.4)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            {/* Hover shine effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            
            <div className="relative z-10 flex items-center justify-center gap-2">
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </div>
          </button>
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-xl text-center text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-center text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
            Oops! There was a problem submitting your form.
          </div>
        )}
      </form>
    </div>
  );
}
