/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Zap, 
  Mail, 
  Sparkles, 
  Plus,
  Minus,
  Globe,
  MousePointer2,
  CheckCircle2,
  MessageSquare,
  Search,
  Gauge
} from 'lucide-react';

// Navbar as a separate component that accepts current path
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-white border-b-4 border-black">
      <RouterLink to="/" className="text-2xl font-display font-bold tracking-tight text-black flex items-center gap-3 no-underline">
        <div className="w-3 h-3 bg-accent-primary border-2 border-black"></div>
        flowhesive
      </RouterLink>
      <div className="hidden md:flex items-center gap-8 text-sm font-bold text-black uppercase tracking-wider">
        <a href="/#solutions" className="hover:text-accent-primary transition-colors no-underline">What we do</a>
        <RouterLink to="/work" className="hover:text-accent-primary transition-colors no-underline">Our Work</RouterLink>
        <a href="/#process" className="hover:text-accent-primary transition-colors no-underline">How it works</a>
        <a href="/#pricing" className="hover:text-accent-primary transition-colors no-underline">Pricing</a>
      </div>
      <div className="flex items-center gap-4">
        <RouterLink to="/#contact" aria-label="Start a project with flowhesive" className="hidden md:block px-6 py-2.5 text-sm font-bold text-black bg-accent-primary border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wider no-underline">
          Get in touch
        </RouterLink>
      </div>
    </nav>
  );
};

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden bg-white text-black">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12 text-xs font-bold tracking-widest text-black uppercase rotate-[-2deg]">
            <Sparkles className="w-4 h-4 text-accent-primary" />
            <span>Websites • Leads • Support</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-[7.5vw] leading-[1.05] tracking-tight text-black font-bold mb-6">
            <motion.span variants={wordAnimation} className="inline-block mr-3 md:mr-6">We</motion.span>
            <motion.span variants={wordAnimation} className="inline-block mr-3 md:mr-6">build</motion.span>
            <motion.span variants={wordAnimation} className="inline-block mr-3 md:mr-6">websites</motion.span>
            <br className="hidden md:block" />
            <motion.span variants={wordAnimation} className="inline-block mr-3 md:mr-6">that</motion.span>
            <motion.span variants={wordAnimation} className="inline-block mr-3 md:mr-6">get</motion.span>
            <motion.span variants={wordAnimation} className="inline-block mr-3 md:mr-6">you</motion.span>
            <motion.span variants={wordAnimation} className="inline-block text-accent-primary bg-black px-4 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,201,0,1)] rotate-[2deg]">leads.</motion.span>
          </h1>
          
          <h4 className="font-handwriting text-3xl md:text-4xl text-black mt-8 rotate-[-1deg]">
            (and we handle all the boring tech stuff too)
          </h4>
        </motion.div>
        
        <motion.div 
          className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="max-w-xl text-lg md:text-xl text-black font-medium leading-relaxed border-l-4 border-accent-primary pl-6">
            No confusing jargon, no hidden fees. Just a reliable partner to look after your online presence while you focus on running your business.
          </h2>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="font-handwriting text-2xl text-black font-bold">
              Packages starting at £500
            </div>
            <a href="#solutions" aria-label="See our digital solutions" className="group flex items-center gap-3 text-lg font-bold bg-white border-2 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-black uppercase tracking-wider">
              <span>See how we help</span>
              <ArrowRight className="w-5 h-5 group-hover:text-accent-primary transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MarqueeContent = () => (
  <div className="flex items-center">
    {[...Array(4)].map((_, i) => (
      <React.Fragment key={i}>
        <span className="mx-8 font-display text-2xl md:text-3xl font-bold tracking-tight text-accent-primary hover:text-white transition-colors cursor-default uppercase">Websites</span>
        <span className="text-white/30 text-2xl">✦</span>
        <span className="mx-8 font-display text-2xl md:text-3xl font-bold tracking-tight text-accent-primary hover:text-white transition-colors cursor-default uppercase">Automations</span>
        <span className="text-white/30 text-2xl">✦</span>
        <span className="mx-8 font-display text-2xl md:text-3xl font-bold tracking-tight text-accent-primary hover:text-white transition-colors cursor-default uppercase">Support</span>
        <span className="text-white/30 text-2xl">✦</span>
      </React.Fragment>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <div className="py-6 border-y-4 border-black bg-warm-surface overflow-hidden flex whitespace-nowrap relative">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};

const Solutions = () => {
  const targets = [
    {
      num: "01",
      problem: "Get More Leads",
      title: "Websites that actually work",
      description: "We don't just make things look pretty. We build websites designed specifically to turn your visitors into paying customers. Simple, fast, and effective.",
      color: "text-accent-primary"
    },
    {
      num: "02",
      problem: "Total Peace of Mind",
      title: "We handle the tech",
      description: "Hosting, security, updates, backups—forget about it. We look after your entire website so you never have to worry about it going down or getting hacked.",
      color: "text-accent-secondary"
    },
    {
      num: "03",
      problem: "Save Time",
      title: "Simple Automations",
      description: "Tired of missing emails or copying data? We set up simple systems so that whenever someone fills out a form, it goes straight to your phone or inbox instantly.",
      color: "text-accent-primary"
    }
  ];

  return (
    <section id="solutions" className="py-32 px-6 md:px-12 bg-warm-cream text-black border-t-4 border-black relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Sticky Header Side */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-black bg-white mb-8 text-xs font-bold tracking-widest text-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
              <div className="w-2 h-2 bg-black"></div>
              <span>What we do</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-tight mb-6 font-bold">
              Everything you need <br/>
              <span className="text-black/60">to grow online.</span>
            </h2>
            <p className="text-black text-lg font-medium leading-relaxed">
              No jargon, no complicated tech speak. Just the tools and support you need to get more customers and save time.
            </p>
          </div>
        </div>

        {/* Sleek List Side */}
        <div className="lg:w-2/3 flex flex-col">
          {targets.map((target, index) => (
            <motion.div 
              key={index}
              className="group relative p-8 mb-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col md:flex-row gap-6 md:gap-12 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="md:w-1/3 flex flex-col gap-2 pt-1">
                <span className="font-handwriting text-3xl text-black font-bold">{target.num}</span>
                <span className={`font-mono text-xs font-bold tracking-wider uppercase text-black`}>{target.problem}</span>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-black">{target.title}</h3>
                <p className="text-zinc-700 text-base leading-relaxed font-medium">
                  {target.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Websites',
      description: 'Clean, fast, and easy to use. We build websites that look great on phones and computers, and most importantly, get people to contact you.',
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      id: '02',
      title: 'Automations',
      description: 'Stop doing things by hand. We connect your website to your email, phone, and calendar so things happen automatically while you sleep.',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: '03',
      title: 'Support',
      description: "We don't just build it and leave. We stick around to keep everything updated, secure, and running smoothly so you never have to stress.",
      icon: <Smartphone className="w-6 h-6" />,
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-white text-black border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight font-bold">
            Everything you <br/><span className="text-black/60">actually need.</span>
          </h2>
          <p className="max-w-sm text-black text-lg font-medium">
            No confusing packages or hidden fees. Just the essential services to get your business running online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={`group relative p-10 bg-warm-surface border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-accent-primary">
                  {service.icon}
                </div>
                <div className="font-handwriting text-2xl font-bold text-accent-primary">
                  {service.id}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 tracking-tight text-white">{service.title}</h3>
              <p className="text-white/70 leading-relaxed font-medium text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesBento = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white text-black border-t-4 border-black relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 2px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight mb-4 font-bold">
            Plus all the features <br />
            <span className="text-black/60">of a great agency.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[320px]">
          
          {/* Card 1: Websites (Tall, left) */}
          <motion.div 
            className="md:row-span-2 bg-white border-4 border-black p-8 flex flex-col relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Beautiful Websites</h3>
              <p className="text-zinc-700 font-medium text-base">Never lose a lead to a bad design again.</p>
            </div>
            <div className="flex-1 bg-accent-primary border-4 border-black p-4 relative overflow-hidden flex flex-col shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="w-full h-8 bg-white rounded-md border-2 border-black mb-3 flex items-center px-3 shrink-0">
                <div className="w-2 h-2 rounded-full border border-black mr-1.5"></div>
                <div className="w-2 h-2 rounded-full border border-black mr-1.5"></div>
                <div className="w-2 h-2 rounded-full border border-black"></div>
              </div>
              <div className="space-y-3 flex-1">
                <div className="w-3/4 h-4 bg-zinc-200 rounded-sm"></div>
                <div className="w-1/2 h-4 bg-zinc-200 rounded-sm"></div>
                <div className="w-full h-24 bg-zinc-200 rounded-md mt-4 border-2 border-black/10"></div>
                <div className="w-full h-12 bg-accent-secondary/20 rounded-md mt-2 border-2 border-accent-secondary/30 flex items-center justify-center">
                  <span className="text-accent-secondary font-medium text-sm">Get in touch</span>
                </div>
              </div>
              <motion.div 
                className="absolute right-12 bottom-12 text-black z-10"
                animate={{ x: [-30, 0, -30], y: [30, 0, 30] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <MousePointer2 className="w-8 h-8 fill-black" />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Automations (Wide, top right) */}
          <motion.div 
            className="md:col-span-2 bg-white border-4 border-black p-8 flex flex-col relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Smart Automations</h3>
              <p className="text-zinc-700 font-medium text-base">Visualize your workflows and save hours.</p>
            </div>
            <div className="flex-1 flex gap-4 overflow-hidden">
              {[
                { title: 'New Lead', color: 'bg-accent-primary text-black' },
                { title: 'Contacted', color: 'bg-white text-black' },
                { title: 'Won', color: 'bg-black text-white' }
              ].map((col, i) => (
                <div key={i} className="w-48 shrink-0 bg-zinc-100 border-4 border-black p-3 flex flex-col shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.05)]">
                  <div className={`text-xs font-bold px-2 py-1 border-2 border-black w-fit mb-3 ${col.color} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                    {col.title}
                  </div>
                  <motion.div 
                    className="w-full h-20 bg-white border-2 border-black mb-2 p-3 flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    whileHover={{ y: -2, x: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
                  >
                    <div className="w-1/2 h-2 bg-black"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-black"></div>
                      <div className="w-1/3 h-2 bg-zinc-200 rounded-sm"></div>
                    </div>
                  </motion.div>
                  {i === 0 && (
                    <motion.div 
                      className="w-full h-20 bg-white rounded-md border-2 border-black shadow-sm p-3 flex flex-col justify-between"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-2/3 h-2 bg-zinc-200 rounded-sm"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-zinc-200"></div>
                        <div className="w-1/2 h-2 bg-zinc-200 rounded-sm"></div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Support (Wide, middle right) */}
          <motion.div 
            className="md:col-span-2 bg-white border-4 border-black p-8 flex flex-col relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Ongoing Support</h3>
              <p className="text-zinc-700 font-medium text-base">Rich notes and quick updates whenever you need them.</p>
            </div>
            <div className="flex-1 bg-accent-secondary border-4 border-black p-6 relative flex flex-col justify-center shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.1)]">
               <div className="flex items-start gap-3 mb-4 bg-white p-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                 <MessageSquare className="w-5 h-5 text-black mt-0.5" />
                 <div>
                   <div className="text-black font-bold mb-1 text-sm uppercase tracking-wider">Update Request:</div>
                   <p className="text-black font-medium text-sm">"Hey team, can we update the opening hours on the contact page to 9am - 6pm?"</p>
                 </div>
               </div>
               <div className="flex items-start gap-3 bg-black text-white p-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] ml-8">
                 <CheckCircle2 className="w-5 h-5 text-accent-primary mt-0.5" />
                 <div>
                   <div className="text-accent-primary font-bold mb-1 text-sm uppercase tracking-wider">Done:</div>
                   <p className="text-white font-medium text-sm">Updated across the website and your Google Business profile.</p>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Card 4: SEO (Small, bottom left) */}
          <motion.div 
            className="bg-white border-4 border-black p-8 flex flex-col relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">SEO Ready</h3>
              <p className="text-zinc-700 font-medium text-base">Built to be found on Google.</p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex gap-2">
                <div className="px-4 py-2 border-4 border-black font-mono text-xl font-bold bg-accent-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-5deg]">G</div>
                <div className="px-4 py-2 border-4 border-black font-mono text-xl font-bold bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[2deg]">Search</div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Lightning Fast (Wide, bottom right) */}
          <motion.div 
            className="md:col-span-2 bg-black text-white border-4 border-black p-8 flex flex-col relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Lightning Fast</h3>
              <p className="text-zinc-400 font-medium text-base">Boost visibility and user experience.</p>
            </div>
            <div className="flex-1 bg-zinc-900 border-4 border-black p-5 flex flex-col justify-center shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.5)]">
               <div className="flex flex-col gap-4">
                 {[
                   { icon: <Gauge className="w-5 h-5 text-accent-primary" />, label: 'Performance', score: '99' },
                   { icon: <Search className="w-5 h-5 text-accent-primary" />, label: 'SEO', score: '100' },
                   { icon: <Smartphone className="w-5 h-5 text-accent-primary" />, label: 'Mobile', score: '100' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                     <div className="w-10 h-10 border-2 border-white bg-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                       {item.icon}
                     </div>
                     <div className="flex-1 h-4 bg-black border-2 border-white overflow-hidden p-0.5">
                       <motion.div 
                         className="h-full bg-accent-primary"
                         initial={{ width: 0 }}
                         whileInView={{ width: `${item.score}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                       />
                     </div>
                     <div className="font-mono font-bold text-accent-primary w-8 text-right">{item.score}</div>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "We Chat",
      desc: "We jump on a quick call to understand your business, what you're struggling with, and what you want to achieve."
    },
    {
      num: "02",
      title: "We Build",
      desc: "You sit back while we design and build your new website or set up your automations. We keep you updated every step of the way."
    },
    {
      num: "03",
      title: "We Support",
      desc: "We launch your project and stick around to look after it. If anything breaks or needs updating, we're just an email away."
    }
  ];

  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-white text-black border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight mb-6 font-bold">
            How we work <span className="text-accent-primary bg-black px-4 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,201,0,1)] rotate-[-2deg] inline-block">together.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-black text-lg font-medium mt-8">
            A simple, stress-free process. We don't overcomplicate things with endless meetings and confusing spreadsheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-1 bg-black" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative z-10 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-accent-primary border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-handwriting text-3xl font-bold text-black mb-8 rotate-[-5deg]">
                {step.num}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-700 font-medium leading-relaxed max-w-sm text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const stickers = [
    { text: "FAST SUPPORT", top: "10%", left: "-10%", rotate: -6, delay: 0 },
    { text: "SEO EXPERTS", top: "5%", right: "-5%", rotate: 4, delay: 0.2 },
    { text: "LEAD GEN", top: "50%", left: "-15%", rotate: -4, delay: 0.4 },
    { text: "NO JARGON", bottom: "10%", left: "-5%", rotate: 5, delay: 0.6 },
    { text: "ALWAYS ONLINE", bottom: "15%", right: "-10%", rotate: -5, delay: 0.8 },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-warm-surface text-white border-t-4 border-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-handwriting text-3xl md:text-4xl text-accent-primary mb-6 rotate-[-2deg]">
              Meet your new digital team
            </h4>
            <div className="w-px h-16 bg-white/20 mb-8 ml-4 hidden md:block"></div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-bold mb-8">
              A dedicated team, building websites that actually work for you.
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg">
              We don't just hand over a website and disappear. We stick around to ensure your digital presence is always performing at its best, bringing in leads, and saving you time. Our proven process provides you with a safe pair of hands to deal with your business's technical challenges.
            </p>
          </motion.div>
        </div>

        {/* Right Content - Image and Stickers */}
        <div className="lg:w-1/2 w-full relative mt-12 lg:mt-0">
          <motion.div 
            className="relative w-full aspect-square max-w-[500px] mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Warm Amber Background Block */}
            <div className="absolute inset-0 bg-accent-primary translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8" />
            
            {/* Image Container */}
            <div className="absolute inset-0 bg-zinc-700 overflow-hidden border-4 border-warm-surface">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working together" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Stickers */}
            {stickers.map((sticker, i) => (
              <motion.div
                key={i}
                className="absolute bg-accent-primary border-[3px] border-black px-4 py-2 font-handwriting text-xl md:text-2xl font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 whitespace-nowrap cursor-default"
                style={{ 
                  top: sticker.top, 
                  bottom: sticker.bottom, 
                  left: sticker.left, 
                  right: sticker.right,
                  rotate: sticker.rotate
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + sticker.delay, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
              >
                {sticker.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: "E-Commerce & Retail", desc: "High-converting storefronts and automated inventory syncing." },
    { name: "B2B SaaS & Tech", desc: "Marketing sites and custom web apps that drive user acquisition." },
    { name: "Professional Services", desc: "Lead generation funnels and CRM integrations for agencies and consultants." },
    { name: "Healthcare & Wellness", desc: "Secure patient portals and automated booking systems." }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-surface text-white border-t border-text-main/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-text-main/10 bg-bg mb-8 text-xs font-mono tracking-widest text-text-muted uppercase">
              <div className="w-1.5 h-1.5 bg-accent-primary"></div>
              <span>Industries</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-tight mb-6">
              Who we <br/>
              <span className="text-text-muted">work with.</span>
            </h2>
            <p className="text-text-muted text-lg font-light leading-relaxed">
              Our engineering principles apply across sectors, but we have deep expertise in these core industries.
            </p>
          </div>
        </div>
        <div className="lg:w-2/3 flex flex-col">
          {industries.map((ind, index) => (
            <div key={index} className="group py-10 border-t border-text-main/10 first:border-t-0 flex flex-col md:flex-row gap-6 md:gap-12 items-start hover:bg-text-main/[0.02] transition-colors -mx-6 px-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-display font-medium text-text-main group-hover:text-accent-primary transition-colors">{ind.name}</h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-text-muted text-base leading-relaxed font-light">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-warm-surface text-white border-t-4 border-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight mb-6 font-bold">
            Client <span className="text-black bg-accent-primary px-4 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[2deg] inline-block">success.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-warm-cream border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12 md:p-16 flex flex-col justify-between rotate-[-1deg] hover:rotate-0 transition-transform">
            <p className="text-xl md:text-2xl font-bold leading-relaxed text-black mb-12">
              "flowhesive completely transformed our operations. The custom CRM and automated workflows they built saved us over 20 hours a week in manual data entry. Worth every penny."
            </p>
            <div>
              <div className="font-handwriting text-3xl font-bold text-black">Sarah Jenkins</div>
              <div className="font-mono text-xs text-zinc-600 font-bold mt-1 uppercase">Operations Director, TechFlow</div>
            </div>
          </div>
          <div className="bg-warm-cream border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12 md:p-16 flex flex-col justify-between rotate-[1deg] hover:rotate-0 transition-transform">
            <p className="text-xl md:text-2xl font-bold leading-relaxed text-black mb-12">
              "Our new website isn't just beautiful—it actually converts. We've seen a 40% increase in inbound leads since launching. The team's attention to detail is unmatched."
            </p>
            <div>
              <div className="font-handwriting text-3xl font-bold text-black">Marcus Thorne</div>
              <div className="font-mono text-xs text-zinc-600 font-bold mt-1 uppercase">Founder, Thorne Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-4 border-white mb-4 bg-warm-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
      <button 
        className="w-full flex justify-between items-center text-left focus:outline-none group p-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h4 className="text-xl md:text-2xl font-display font-bold text-white pr-8">
          {question}
        </h4>
        <div className={`p-2 border-4 border-white transition-colors ${isOpen ? 'bg-accent-primary text-black' : 'bg-transparent text-white group-hover:bg-accent-primary group-hover:text-black'}`}>
          {isOpen ? <Minus className="w-6 h-6 font-bold" /> : <Plus className="w-6 h-6 font-bold" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-warm-cream border-t-4 border-white"
          >
            <p className="p-6 text-black font-medium leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Our packages start at £500 for a clean, professional website that gets you leads. If you need something more complex, like a custom app or complicated automations, we'll give you a clear, upfront quote before we start."
    },
    {
      q: "What do you mean by 'automations'?",
      a: "It's just a fancy word for making things happen automatically. For example, when a customer fills out a form on your site, we can make it automatically text your phone, add them to your email list, and put them in a spreadsheet. It saves you hours of manual work."
    },
    {
      q: "Do I have to update the website myself?",
      a: "Not at all. We handle all the technical updates, security checks, and backups. If you want to change some text or add a new photo, just email us and we'll do it for you."
    },
    {
      q: "How long does it take?",
      a: "Most standard websites take about 2 to 4 weeks from our first chat to the day it goes live. We move fast, but we never rush."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-warm-surface text-white border-t-4 border-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight mb-6 font-bold">
            Common <span className="text-black bg-accent-primary px-4 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] inline-block">questions.</span>
          </h2>
          <p className="text-white/70 text-lg font-medium mt-8">
            Everything you need to know about working with us.
          </p>
        </div>
        
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 relative overflow-hidden bg-white text-black border-t-4 border-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-black bg-white text-black font-bold text-xs tracking-widest uppercase mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
              Transparent Pricing
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 leading-tight font-bold">
              Ready to get <br/>
              <span className="text-black/60">more leads?</span>
            </h2>
            <p className="text-zinc-700 text-lg max-w-xl font-medium leading-relaxed mb-8">
              Professional websites that actually help your business grow, starting at an affordable price point. No hidden fees, no surprises.
            </p>
            <ul className="space-y-4">
              {['Custom Design & Build', 'Google Friendly (SEO)', 'Fast & Secure Hosting'].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-black">
                  <div className="w-2 h-2 bg-black"></div>
                  <span className="font-bold text-sm tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-auto">
            <a href="#contact" aria-label="Get a web development quote" className="w-full md:w-auto px-10 py-5 bg-accent-primary text-black border-4 border-black font-display text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-4 group uppercase tracking-wider">
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-warm-surface text-white pt-32 pb-12 px-6 md:px-12 border-t-4 border-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-8 leading-tight font-bold">
              Let's <br/>
              <span className="text-black bg-accent-primary px-4 py-1 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] inline-block">talk.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-md mb-12 font-medium leading-relaxed">
              Ready to get a website that actually works for your business? Send us a message and we'll get back to you today.
            </p>
            <a href="mailto:hello@flowhesive.com" aria-label="Email flowhesive" className="inline-flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-transform">
              <Mail className="w-6 h-6 text-accent-primary" aria-hidden="true" />
              hello@flowhesive.com
            </a>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-warm-cream border-4 border-white px-6 py-4 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-black placeholder:text-zinc-500 font-bold"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-warm-cream border-4 border-white px-6 py-4 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-black placeholder:text-zinc-500 font-bold"
              />
            </div>
            <textarea 
              placeholder="How can we help you?" 
              rows={5}
              className="w-full bg-warm-cream border-4 border-white px-6 py-4 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-black placeholder:text-zinc-500 resize-none font-bold"
            />
            <button type="submit" aria-label="Send message to flowhesive" className="w-full bg-accent-primary text-black font-display text-xl font-bold py-4 mt-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wider">
              Send Message
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-4 border-white/30 text-white/60 text-sm font-bold">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-accent-primary"></div>
            &copy; {new Date().getFullYear()} flowhesive. All rights reserved.
          </div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" aria-label="Follow us on Twitter" className="hover:text-accent-primary transition-colors">Twitter</a>
            <a href="#" aria-label="Follow us on LinkedIn" className="hover:text-accent-primary transition-colors">LinkedIn</a>
            <a href="#" aria-label="Follow us on Instagram" className="hover:text-accent-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─── WORK PAGE (Our Work / Portfolio) ───────────────────────────────────────
const dummy1 = `data:text/html;charset=utf-8,${encodeURIComponent(`<!DOCTYPE html><html><head><style>body{margin:0;font-family:sans-serif;background:#f3f4f6;padding:40px}.card{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:24px;margin-bottom:16px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:32px}.metric{font-size:32px;font-weight:600}</style></head><body><div class="grid"><div class="card"><div class="metric">£12,450</div><div style="color:#10b981">↑ 14%</div></div><div class="card"><div class="metric">142</div><div style="color:#10b981">↑ 3 new</div></div><div class="card"><div class="metric">£3,200</div><div style="color:#ef4444">5 overdue</div></div></div></body></html>`)}`;
const dummy2 = `data:text/html;charset=utf-8,${encodeURIComponent(`<!DOCTYPE html><html><head><style>body{margin:0;font-family:sans-serif;background:#fafafa;padding:40px}.job{background:#fff;border:1px solid #e5e5e5;border-radius:10px;padding:20px;margin-bottom:12px;display:flex;justify-content:space-between}</style></head><body><div class="job"><div><strong>09:00 AM</strong> HVAC Maintenance</div><span style="background:#ecfdf5;color:#059669;padding:4px 12px;border-radius:99px;font-size:13px">Completed</span></div><div class="job"><div><strong>11:30 AM</strong> Emergency Leak</div><span style="background:#eff6ff;color:#2563eb;padding:4px 12px;border-radius:99px;font-size:13px">In Progress</span></div></body></html>`)}`;

const ProjectFrame = ({ project }: { project: any }) => {
  const [interactive, setInteractive] = useState(false);
  return (
    <div className="flex flex-col gap-4 group" onMouseLeave={() => setInteractive(false)}>
      <div className="flex justify-between items-end px-2">
        <div>
          <h3 className="text-2xl font-display font-bold text-black">{project.name}</h3>
          <div className="font-mono text-xs text-black font-bold mt-1 uppercase tracking-wider">{project.type}</div>
        </div>
      </div>
      <div className="border-4 border-black bg-white flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="h-10 border-b-4 border-black flex items-center px-4 gap-4 bg-accent-primary">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 bg-white border-2 border-black" />
            <div className="w-3 h-3 bg-white border-2 border-black" />
            <div className="w-3 h-3 bg-white border-2 border-black" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border-2 border-black px-4 py-1 text-[10px] font-bold text-black flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Globe className="w-3 h-3" />
              {project.displayUrl}
            </div>
          </div>
          <div className="w-10"></div>
        </div>
        <div className="relative w-full aspect-video bg-black overflow-hidden">
          {project.screenshot ? (
            <img 
              src={project.screenshot} 
              alt={`${project.name} screenshot`}
              className="w-full h-full object-cover object-top transition-all duration-[8s] ease-in-out"
              style={{ objectPosition: interactive ? 'bottom' : 'top' }}
            />
          ) : (
            <iframe 
              src={project.url} 
              className="absolute top-0 left-0 w-[400%] h-[400%] md:w-[250%] md:h-[250%] origin-top-left scale-[0.25] md:scale-[0.4] border-none" 
              loading="lazy" 
              title={project.name}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          )}
          {!interactive && !project.screenshot && (
            <div 
              className="absolute inset-0 bg-white/10 z-10 cursor-pointer flex items-center justify-center backdrop-blur-[1px] transition-all duration-300"
              onClick={() => setInteractive(true)}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent-secondary text-black px-6 py-3 font-medium text-sm flex items-center gap-2 shadow-xl">
                Click to interact <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          )}
          {!interactive && project.screenshot && (
            <div 
              className="absolute inset-0 bg-white/10 z-10 cursor-pointer flex items-center justify-center backdrop-blur-[1px] transition-all duration-300"
              onMouseEnter={() => setInteractive(true)}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent-secondary text-black px-6 py-3 font-medium text-sm flex items-center gap-2 shadow-xl">
                Hover to scroll <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const WorkPage = () => {
  const projects = [
    { name: "Barestack", url: "https://barestack.org", type: "Web App", displayUrl: "barestack.org", screenshot: "/barestack-ss.png" },
    { name: "Pouchlab", url: "https://pouchlab.co.uk", type: "E-Commerce", displayUrl: "pouchlab.co.uk", screenshot: "/pouchlab-ss.png" },
    { name: "AI Vaping", url: "https://aivaping.com", type: "Marketing Site", displayUrl: "aivaping.com", screenshot: "/aiv-ss.png" },
    { name: "TradeFlow", url: dummy1, type: "B2B CRM Dashboard", displayUrl: "tradeflow-crm.com" },
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <Navbar />
      <div className="pt-32 pb-32 px-6 md:px-12 border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-black bg-accent-primary mb-8 text-xs font-bold tracking-widest text-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[1deg]">
              <div className="w-2 h-2 bg-black"></div>
              <span>Our Work</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight mb-6 font-bold">
              Real results for <br/>
              <span className="text-black/60">real businesses.</span>
            </h2>
            <p className="text-black text-lg font-medium max-w-xl">
              Don't just take our word for it. Take a look at some of the websites and systems we've built for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: (i % 2) * 0.1 }}
                className={i % 2 !== 0 ? "lg:mt-24" : ""}
              >
                <ProjectFrame project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── HOMEPAGE ────────────────────────────────────────────────────────────────
const HomePage = () => {
  return (
    <div className="min-h-screen selection:bg-accent-primary selection:text-bg font-sans">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Solutions />
        {/* Portfolio removed from homepage - now on /work */}
        <Services />
        <FeaturesBento />
        <Process />
        <ExpertiseSection />
        <Industries />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

// ─── MAIN APP WITH ROUTING ───────────────────────────────────────────────────
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<WorkPage />} />
    </Routes>
  );
}
