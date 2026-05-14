import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactForm from './components/ContactForm';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import { 
  Menu, X, ChevronRight, Play, ArrowRight, ArrowUpRight,
  Code, Search, LayoutDashboard, Target, PenTool, Bot,
  CheckCircle2, Star, Mail, MapPin, Phone, 
  Linkedin, Twitter, Instagram, Facebook, MessageSquare, 
  Moon, Sun, Cpu, BarChart, Users, Loader2
} from 'lucide-react';

const SERVICES = [
  { icon: Bot, title: "AI Automation", desc: "Intelligent workflows that save hours of manual work." },
  { icon: Code, title: "Website Development", desc: "High-performance web apps with modern tech stacks." },
  { icon: Search, title: "SEO Optimization", desc: "Data-driven strategies to dominate search rankings." },
  { icon: LayoutDashboard, title: "Business Dashboards", desc: "Real-time analytics and beautiful visualizations." },
  { icon: Target, title: "Lead Generation", desc: "Automated systems to capture and nurture high-quality leads." },
  { icon: PenTool, title: "UI/UX Design", desc: "Premium user experiences that convert visitors into customers." },
];

const PORTFOLIO = [
  { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", title: "School Management System", category: "Web App" },
  { img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800", title: "Education Blog Platform", category: "CMS" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", title: "Restaurant Website", category: "E-Commerce" },
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", title: "AI Business Dashboard", category: "SaaS" },
  { img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800", title: "SEO Agency Website", category: "Corporate" },
  { img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", title: "E-commerce Store", category: "Retail" },
];

const PRICING = [
  { name: "Starter Plan", price: "12,000", desc: "Best for small businesses and startups.", features: ["1–3 Pages Website", "Mobile Responsive Design", "Modern UI Design", "WhatsApp Integration", "Contact Form", "Basic SEO Setup", "Fast Loading", "Free Hosting Guide", "7 Days Support"], suitable: "Shops, Small Businesses, Personal Portfolios, Local Services", popular: false },
  { name: "Basic Business", price: "25,000", desc: "Perfect for growing businesses.", features: ["5–7 Pages Website", "Premium Responsive Design", "Admin Panel", "Advanced Animations", "SEO Optimization", "Google Maps Integration", "Social Media Integration", "Blog Section", "Speed Optimization", "15 Days Support"], suitable: "Restaurants, Schools, Agencies, Clinics", popular: false },
  { name: "Professional Plan", price: "45,000", desc: "Professional business solution with premium design.", features: ["10+ Pages", "Premium UI/UX", "Advanced Dashboard", "AI Chatbot Integration", "Lead Generation Forms", "Advanced SEO", "Custom Animations", "Performance Optimization", "Security Optimization", "Google Analytics Setup", "1 Month Support"], suitable: "Companies, Educational Platforms, Large Businesses, Service Agencies", popular: true },
  { name: "Business Pro", price: "75,000", desc: "High-end modern business website.", features: ["Fully Custom Website", "AI Automation Features", "Advanced Admin System", "CRM Integration", "Custom API Integration", "Dynamic Dashboard", "Professional Branding", "Premium Motion Effects", "Database Integration", "Full SEO Strategy", "Priority Support"], suitable: "SaaS Startups, AI Agencies, Tech Companies, Large Organizations", popular: false },
  { name: "Enterprise AI", price: "150,000+", desc: "Ultimate premium solution.", features: ["Custom AI Platform", "Full Business Automation", "AI Dashboard System", "Team Management", "Multi-user System", "Payment Gateway", "Cloud Database", "Advanced Security", "Scalability Optimization", "Dedicated Support", "Complete Branding System"], suitable: "Enterprise Companies, Large Startups, AI Platforms, Software Businesses", popular: false },
];

const EXTRA_SERVICES = [
  { name: "SEO Optimization", price: "PKR 10,000+" },
  { name: "Logo Design", price: "PKR 5,000" },
  { name: "AI Chatbot", price: "PKR 20,000+" },
  { name: "Admin Dashboard", price: "PKR 25,000+" },
  { name: "E-commerce Store", price: "PKR 40,000+" },
  { name: "Mobile App UI Design", price: "PKR 15,000+" },
  { name: "Website Maintenance", price: "PKR 5,000/month" },
  { name: "Speed Optimization", price: "PKR 8,000" },
  { name: "Custom API Integration", price: "PKR 15,000+" }
];

const TESTIMONIALS = [
  { name: "Sarah K.", role: "CEO, TechFlow", quote: "Movonix totally changed how our business operates. The AI dashboard is world-class.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" },
  { name: "Ahmad R.", role: "Founder, EduSmart", quote: "Our school management system was delivered ahead of time and runs flawlessly.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { name: "Jessica M.", role: "Marketing Dir.", quote: "The SEO optimization brought us 3x more leads in just two months.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = ["Services", "Portfolio", "About", "Pricing", "Contact"];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-950 text-white' : 'bg-[#fcfcfd] text-gray-900'}`}>
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'glass-dark' : 'glass') : 'bg-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[70px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#0A66FF] flex items-center justify-center text-white">
              <span className="text-base font-bold font-display">M</span>
            </div>
            <span className="text-xl font-extrabold font-display tracking-tight text-[#0A66FF]">Movonix Solutions</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`/#${link.toLowerCase()}`} className="text-sm font-medium text-slate-500 hover:text-[#0A66FF] transition-colors">
                {link}
              </a>
            ))}
            <div className="flex items-center gap-4 pl-4">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="text-slate-400 hover:text-[#0A66FF] transition-colors"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="/#contact" className="btn-primary px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-opacity-90 transition-all text-white">
                Get Started
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-20 left-0 w-full z-40 p-4 md:hidden ${darkMode ? 'glass-dark' : 'glass'}`}
          >
            <div className="flex flex-col space-y-4 p-4 rounded-2xl">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`/#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  {link}
                </a>
              ))}
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#0A66FF] text-white px-5 py-3 rounded-xl font-medium w-full mt-4 text-center">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

            <ScrollToTop />
      <Routes>
        <Route path="/" element={<main>
{/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-dot-pattern hero-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-tighter mb-5 leading-[1.1] md:leading-[1.1]">
                AI-Powered <br/>
                <span className="text-[#0A66FF]">Digital Solutions</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
                We build modern websites, AI automations, and smart SEO systems for high-growth business portfolios.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="/#portfolio" className="btn-primary px-10 py-4 font-semibold flex items-center justify-center gap-2 rounded-full w-fit hover:bg-opacity-90 max-w-sm text-center text-white">
                  View Portfolio
                </a>
              </div>

              <div className="grid grid-cols-3 gap-5 mt-10">
                {[
                  { val: "45+", label: "AI Models Built" },
                  { val: "98%", label: "Client Success" },
                  { val: "1M+", label: "Lines of Code" }
                ].map((stat, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <span className="block text-2xl font-extrabold text-[#0A66FF]">{stat.val}</span>
                    <span className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-1 block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Premium Dashboard Illustration */}
              <div className="relative w-full h-[550px] mx-auto flex items-center justify-center">
                {/* Main Window */}
                <div className="absolute inset-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] overflow-hidden shadow-2xl flex flex-col h-[90%] w-[95%] m-auto z-10 box-border">
                  {/* Window Bar */}
                  <div className="h-14 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-24 h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  {/* Window Content */}
                  <div className="flex-1 p-6 grid grid-cols-3 gap-5">
                    {/* Big Chart Area */}
                    <div className="col-span-2 row-span-2 rounded-[20px] border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 p-5 flex flex-col justify-end relative overflow-hidden group">
                      <div className="absolute top-6 left-6 z-10">
                        <div className="w-24 h-3 rounded-full bg-slate-200 dark:bg-slate-700 mb-3"></div>
                        <div className="w-32 h-6 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                      </div>
                      <svg className="w-full h-[65%] overflow-visible relative z-0" preserveAspectRatio="none" viewBox="0 0 100 50">
                        <path d="M0 50 C 20 20, 35 10, 50 25 C 70 40, 85 5, 100 0 L 100 50 L 0 50 Z" fill="url(#gradientA)" opacity="0.15"/>
                        <motion.path 
                          initial={{ pathLength: 0 }} 
                          animate={{ pathLength: 1 }} 
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          d="M0 50 C 20 20, 35 10, 50 25 C 70 40, 85 5, 100 0" 
                          fill="none" stroke="#0A66FF" strokeWidth="2.5" strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradientA" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0A66FF"/>
                            <stop offset="100%" stopColor="transparent"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    {/* Small Stat Card 1 */}
                    <div className="col-span-1 rounded-[20px] border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 p-5 flex flex-col items-start justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] flex items-center justify-center mb-5"><Cpu size={22}/></div>
                      <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 mb-3"></div>
                      <div className="w-2/3 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 mb-3"></div>
                      <div className="w-4/5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                    {/* Small Stat Card 2 */}
                    <div className="col-span-1 border border-slate-100 dark:border-slate-800 rounded-[20px] bg-slate-50/50 dark:bg-slate-800/30 p-5 text-slate-800 dark:text-white flex flex-col justify-between">
                      <div className="w-12 h-12 rounded-[14px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center"><Target size={22}/></div>
                      <div>
                        <div className="text-[22px] font-extrabold text-slate-900 dark:text-white mb-1">+84.2%</div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Efficiency</div>
                      </div>
                    </div>
                    {/* Bottom Row */}
                    <div className="col-span-3 bg-slate-50/50 dark:bg-slate-800/30 rounded-[20px] border border-slate-100 dark:border-slate-800 p-5 flex gap-3 h-[100px] items-end">
                      {[30, 45, 40, 60, 55, 75, 45, 60, 50, 80, 100, 90].map((h, i) => (
                        <div key={i} className={`flex-1 rounded-sm transition-all duration-500 hover:opacity-80 ${i === 10 ? 'bg-[#0A66FF]' : 'bg-slate-200 dark:bg-slate-700'}`} style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Widget 1 */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`glass-widget absolute top-6 -left-4 z-20 p-4 rounded-2xl w-[240px] flex items-center gap-4 ${darkMode ? 'glass-dark text-white' : 'glass text-slate-900 border border-slate-200/60'}`}
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={24}/></div>
                  <div>
                    <div className="text-sm font-bold">AI Synced</div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">System optimized</div>
                  </div>
                </motion.div>

                {/* Floating Widget 2 */}
                <motion.div 
                  animate={{ y: [0, 8, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className={`glass-widget absolute bottom-12 -right-4 z-20 p-5 rounded-2xl w-[260px] ${darkMode ? 'glass-dark text-white' : 'glass text-slate-900 border border-slate-200/60'}`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] flex items-center justify-center"><Bot size={14} /></div>
                      <span className="text-sm font-bold">Processing Data</span>
                    </div>
                    <span className="text-sm font-bold text-[#0A66FF]">100%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }} 
                      animate={{ width: "100%" }} 
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} 
                      className="h-full bg-[#0A66FF] rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-16 md:py-24 ${darkMode ? 'bg-slate-900 border-y border-slate-800' : 'bg-white border-y border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-sm font-bold text-[#0A66FF] uppercase tracking-wider mb-3">Our Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Premium Service Offerings</h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Discover edge-cutting solutions designed for scale, speed, and growth.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div 
                whileHover={{ y: -4 }}
                key={idx}
                className={`p-8 rounded-[24px] border transition-all duration-300 group hover:border-[#0A66FF]/30 hover:shadow-lg hover:shadow-[#0A66FF]/5 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${darkMode ? 'bg-slate-800 text-[#0A66FF]' : 'bg-white shadow-sm border border-slate-100 text-[#0A66FF]'}`}>
                  <service.icon size={24} strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A66FF]">
                  Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-16 md:py-24 ${darkMode ? 'bg-slate-950' : 'bg-[#F8FAFC]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold text-[#0A66FF] uppercase tracking-wider mb-3">Featured Work</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Latest Projects</h3>
              <p className="text-slate-500 dark:text-slate-400">Award-winning products built for top-tier clients.</p>
            </div>
            <button className={`px-6 py-3 rounded-full font-semibold text-sm transition-all border flex items-center gap-2 ${darkMode ? 'border-slate-800 hover:bg-slate-900' : 'border-slate-300 hover:bg-slate-100 bg-white'}`}>
              View All Projects <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((project, idx) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={idx} 
                className={`rounded-[24px] overflow-hidden group border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={project.img} alt={project.title} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-slate-900 rounded-full px-6 py-3 font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Live
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-[#0A66FF] uppercase tracking-wider block mb-2">{project.category}</span>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 md:py-24 ${darkMode ? 'bg-slate-950' : 'bg-white'} overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-sm font-bold text-[#0A66FF] uppercase tracking-wider mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">Building the Future of Digital Business</h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-6">
              At Movonix Solutions, we believe the future belongs to businesses that innovate fast, adapt smartly, and use AI-driven technology to grow without limits. Our mission is to help startups, brands, schools, and companies build powerful digital systems that are modern, scalable, and revenue-focused.
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-6">
              We specialize in creating premium websites, AI-powered solutions, automation systems, SEO strategies, dashboards, and modern business platforms designed for the next generation of the internet. From clean UI/UX design to intelligent automation, every project is built with performance, trust, speed, and long-term growth in mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-24">
            <div className={`p-10 rounded-[32px] border flex flex-col justify-center ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-[#F8FAFC] border-slate-200'}`}>
              <h4 className="text-2xl font-extrabold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] flex items-center justify-center"><Target size={20} /></div>
                Our Vision
              </h4>
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Our vision is to build one of the most trusted AI-powered digital companies that helps businesses transform their ideas into high-performing online brands. We aim to make modern technology accessible for everyone by combining:
              </p>
              <ul className="grid sm:grid-cols-2 gap-y-3 mb-6">
                {['Artificial Intelligence', 'Modern Development', 'Business Automation', 'Smart User Experience', 'High-Performance Systems'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-[#0A66FF]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Movonix Solutions focuses on creating technology that not only looks premium but also delivers real business results.
              </p>
            </div>

            <div className={`relative p-10 rounded-[32px] overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-[#0A66FF]'} text-white`}>
              <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 opacity-10">
                <svg width="300" height="300" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="20"/></svg>
              </div>
              <h4 className="text-2xl font-extrabold mb-8 relative z-10">What Makes Us Different</h4>
              <ul className="space-y-4 relative z-10 flex-col flex h-full">
                {['AI-first development approach', 'Premium modern UI/UX design', 'Fast and optimized systems', 'Mobile-first responsive design', 'Business-focused solutions', 'SEO and performance optimization', 'Future-ready scalable architecture', 'Professional communication and support'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex flex-shrink-0 items-center justify-center mt-0.5">
                      <Star size={12} className="text-white" />
                    </div>
                    <span className="font-medium text-blue-50 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden max-w-md mx-auto border border-slate-200 dark:border-slate-800 relative z-10 bg-slate-100 dark:bg-slate-800">
                <img 
                  src="/ali-khan.png" 
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"; }}
                  alt="Ali Khan - Founder & CEO" 
                  referrerPolicy="no-referrer" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className={`absolute -bottom-6 -right-6 md:-right-8 p-6 rounded-2xl w-60 z-20 shadow-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
                <div className="font-extrabold text-lg mb-1 dark:text-white">Ali Khan</div>
                <div className="text-sm font-semibold text-[#0A66FF] uppercase tracking-wider">Founder & CEO</div>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <h4 className="text-3xl font-extrabold tracking-tight mb-6">Meet the Founder</h4>
              <p className="text-slate-500 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                Ali Khan is a passionate digital entrepreneur and AI-focused developer dedicated to building innovative technology solutions for modern businesses. With a strong vision for the future of AI, automation, and digital growth, he founded Movonix Solutions to help brands establish a powerful online presence using smart systems and modern design.
              </p>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                His goal is to create impactful digital experiences that combine technology, creativity, and business strategy into one complete solution.
              </p>
            </div>
          </div>

          {/* Stats and Team */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-1 p-10 rounded-[32px] border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'}`}>
              <h4 className="text-2xl font-extrabold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] flex items-center justify-center"><BarChart size={20} /></div>
                Company Stats
              </h4>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">50+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Projects Shipped</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-[#0A66FF] mb-2">99%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">24/7</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Premium Support</div>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-2 p-10 rounded-[32px] border flex flex-col justify-center text-center ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white shadow-xl shadow-slate-200/50 border-slate-200'}`}>
              <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center mx-auto mb-6 text-[#0A66FF]">
                <Users size={32} />
              </div>
              <h4 className="text-3xl font-extrabold mb-6">Meet The Team</h4>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                A creative team of developers, designers, AI specialists, and digital strategists working together to build high-quality digital products that help businesses grow faster in the AI era.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {['AI-Powered Solutions', 'Modern Business Systems', 'Trusted Digital Innovation'].map((tag, idx) => (
                  <div key={idx} className={`px-5 py-2.5 rounded-full text-sm font-bold ${darkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-16 md:py-24 ${darkMode ? 'bg-slate-900 border-y border-slate-800' : 'bg-white border-y border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-sm font-bold text-[#0A66FF] uppercase tracking-wider mb-2">Pricing</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Transparent Investment</h3>
            <p className="text-slate-500 dark:text-slate-400">Choose a plan that scales with your business.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PRICING.map((plan, idx) => (
              <div key={idx} className={`relative p-8 flex flex-col rounded-[24px] border transition-all duration-300 hover:-translate-y-2 ${plan.popular ? (darkMode ? 'bg-slate-800 border-[#0A66FF] shadow-[0_0_30px_-5px_rgba(10,102,255,0.4)]' : 'bg-white border-[#0A66FF] shadow-[0_0_30px_-5px_rgba(10,102,255,0.3)] ring-2 ring-[#0A66FF]') : (darkMode ? 'bg-slate-950 border-slate-800 hover:border-slate-700' : 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-200/40')}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#0A66FF] to-blue-400 text-white text-[11px] font-extrabold uppercase tracking-widest py-1.5 px-5 rounded-full shadow-lg">Most Popular</span>
                  </div>
                )}
                
                <h4 className={`text-xl font-extrabold mb-2 ${plan.popular ? 'text-[#0A66FF]' : 'text-slate-700 dark:text-slate-300'}`}>{plan.name}</h4>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px] leading-relaxed">{plan.desc}</p>
                
                <div className="mb-6 flex items-baseline gap-1 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                  <span className="text-sm text-slate-400 font-bold tracking-wide">PKR</span>
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                </div>
                
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">Features</div>
                  <ul className="space-y-3.5 mb-6 flex-1">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 font-medium leading-snug">
                        <CheckCircle2 size={18} className="text-[#0A66FF] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">Suitable For</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">{plan.suitable}</p>
                  <button className={`w-full py-4 px-4 rounded-full font-bold transition-all shadow-sm ${plan.popular ? 'bg-[#0A66FF] hover:bg-[#005ce6] text-white hover:shadow-lg hover:shadow-[#0A66FF]/30' : (darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white hover:shadow-lg hover:shadow-slate-900/50' : 'bg-slate-900 hover:bg-slate-800 text-white hover:shadow-lg hover:shadow-slate-900/20')}`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Services & Bonuses */}
          <div className="mt-24 max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className={`col-span-2 p-8 lg:p-10 rounded-[32px] border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'}`}>
              <h4 className="text-2xl font-extrabold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] flex items-center justify-center"><Bot size={20} /></div>
                Extra Services Pricing
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {EXTRA_SERVICES.map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{service.name}</span>
                    <span className="text-sm font-extrabold text-[#0A66FF]">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className={`p-8 rounded-[32px] border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-[#0A66FF]/5 border-[#0A66FF]/10'}`}>
                <h4 className="text-xl font-extrabold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                  Payment Terms
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="text-xl font-extrabold text-[#0A66FF]">50%</div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Advance Payment</div>
                  </li>
                  <li className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="text-xl font-extrabold text-[#0A66FF]">50%</div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">After Completion</div>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-[32px] bg-gradient-to-br from-[#0A66FF] to-blue-500 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-white flex opacity-10 rounded-full blur-2xl"></div>
                <h4 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                  <Star size={24} className="fill-current text-yellow-300" /> Bonus Offer
                </h4>
                <ul className="space-y-3">
                  {['Free consultation', 'Free responsive optimization', 'Free basic SEO', 'Free deployment support'].map((bonus, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-blue-50">
                      <div className="w-5 h-5 rounded-full bg-blue-400/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      {bonus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-16 md:py-24 overflow-hidden relative ${darkMode ? 'bg-slate-950' : 'bg-[#F8FAFC]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Client Feedback</h3>
            <p className="text-slate-500 dark:text-slate-400">Trusted by successful founders and businesses worldwide.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className={`p-8 rounded-[24px] border border-slate-200 dark:border-slate-800 ${darkMode ? 'bg-slate-900 shadow-xl shadow-slate-950/50' : 'bg-white shadow-xl shadow-slate-200/50'}`}>
                <div className="flex text-yellow-400 mb-6 gap-1">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" className="text-yellow-400" />)}
                </div>
                <p className="text-lg leading-relaxed mb-8 text-slate-700 dark:text-slate-300">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} loading="lazy" referrerPolicy="no-referrer" className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800" />
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <span className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 md:py-24 relative overflow-hidden ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
        <div className="absolute top-0 inset-x-0 h-full overflow-hidden opacity-10 pointer-events-none">
           <svg className={`absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4 scale-150 ${darkMode ? 'text-white' : 'text-[#0A66FF]'}`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
             <path fill="currentColor" d="M38.1,-48.9C50.1,-40.3,61,-30.3,66.6,-17.6C72.2,-4.8,72.4,10.6,65.8,22.6C59.3,34.5,45.8,42.9,32.3,50.1C18.7,57.3,5.1,63.2,-7.7,60.8C-20.5,58.3,-32.4,47.4,-44.4,36.5C-56.5,25.6,-68.8,14.6,-71.4,1.9C-74.1,-10.9,-67.2,-25.5,-56.3,-34.5C-45.5,-43.5,-30.7,-46.9,-17.9,-50.2C-5,-53.4,5.9,-56.6,18.1,-55.8C30.2,-55.1,43.5,-50.5,38.1,-48.9Z" transform="translate(50 50)" />
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Let's build something extraordinary.</h2>
              <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-lg mb-8 md:mb-10 max-w-md`}>
                Ready to transform your business with AI and modern software? Reach out to our team today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-slate-800 text-white' : 'bg-[#0A66FF]/10 text-[#0A66FF]'} flex items-center justify-center`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email Us</div>
                    <div className="font-semibold text-lg">info.movonixsolutions@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-slate-800 text-white' : 'bg-[#0A66FF]/10 text-[#0A66FF]'} flex items-center justify-center`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Visit Us</div>
                    <div className="font-semibold text-lg">Peshawar, Pakistan</div>
                  </div>
                </div>
                <a href="https://wa.me/923115738224" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 group hover:${darkMode ? 'bg-white/5' : 'bg-slate-200'} p-2 -ml-2 rounded-xl transition-all w-fit cursor-pointer`}>
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30' : 'bg-green-100 text-green-600 group-hover:bg-green-200'} flex items-center justify-center transition-colors`}>
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">WhatsApp</div>
                    <div className="font-semibold text-lg">+92 311 5738224</div>
                  </div>
                </a>
              </div>
              
              <div className="mt-12">
                <p className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Facebook, href: "#" }
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a key={idx} href={social.href} className={`w-10 h-10 rounded-full ${darkMode ? 'bg-slate-800 hover:bg-[#0A66FF] hover:text-white' : 'bg-slate-200 hover:bg-[#0A66FF] hover:text-white'} flex items-center justify-center transition-all transform hover:-translate-y-1`}>
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <ContactForm darkMode={darkMode} />
            
          </div>
        </div>
      </section>

              </main>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy darkMode={darkMode} />} />
        <Route path="/terms-of-service" element={<TermsOfService darkMode={darkMode} />} />
      </Routes>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-slate-950 border-t border-slate-900' : 'bg-white border-t border-slate-200'} text-slate-500 py-16`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6 text-[#0A66FF] max-w-fit">
                <div className="w-8 h-8 rounded-lg bg-[#0A66FF] flex items-center justify-center text-white">
                  <span className="text-sm font-bold font-display">M</span>
                </div>
                <span className="text-xl font-extrabold font-display tracking-tight">Movonix Solutions</span>
              </Link>
              <p className="mb-6 max-w-xs text-sm">
                Next-generation digital solutions for visionary brands. We build the infrastructure for your success.
              </p>
              <div className="flex gap-3">
                <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${darkMode ? 'bg-slate-800 hover:bg-[#0A66FF] hover:text-white' : 'bg-slate-100 hover:bg-[#0A66FF] hover:text-white'}`}><Facebook size={18} /></a>
                <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${darkMode ? 'bg-slate-800 hover:bg-[#0A66FF] hover:text-white' : 'bg-slate-100 hover:bg-[#0A66FF] hover:text-white'}`}><Twitter size={18} /></a>
                <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${darkMode ? 'bg-slate-800 hover:bg-[#0A66FF] hover:text-white' : 'bg-slate-100 hover:bg-[#0A66FF] hover:text-white'}`}><Instagram size={18} /></a>
                <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${darkMode ? 'bg-slate-800 hover:bg-[#0A66FF] hover:text-white' : 'bg-slate-100 hover:bg-[#0A66FF] hover:text-white'}`}><Linkedin size={18} /></a>
              </div>
            </div>
            
            <div>
              <h5 className="text-slate-900 dark:text-white font-bold mb-4">Quick Links</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="/#about" className="hover:text-[#0A66FF] transition-colors">About Us</a></li>
                <li><a href="/#portfolio" className="hover:text-[#0A66FF] transition-colors">Portfolio</a></li>
                <li><a href="/#pricing" className="hover:text-[#0A66FF] transition-colors">Pricing</a></li>
                <li><a href="/#contact" className="hover:text-[#0A66FF] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-slate-900 dark:text-white font-bold mb-4">Services</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#0A66FF] transition-colors">AI Automation</a></li>
                <li><a href="#" className="hover:text-[#0A66FF] transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-[#0A66FF] transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-[#0A66FF] transition-colors">Business Dashboards</a></li>
              </ul>
            </div>
          </div>
          
          <div className="h-px bg-slate-200 dark:bg-slate-800 mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Movonix Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 font-medium">
              <Link to="/privacy-policy" className="hover:text-[#0A66FF] transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-[#0A66FF] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
