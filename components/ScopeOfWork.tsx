import React from 'react';
import { motion } from 'framer-motion';

export default function ScopeOfWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
  };

  const services = [
    {
      category: "11-Section Landing Page",
      deliverable: "Conversion Surface Architecture",
      status: "Included",
      details: "Pembangunan 11 section landing page sesuai arsitektur konten yang disepakati.",
    },
    {
      category: "Design System",
      deliverable: "Ruang Pulih Implenetation",
      status: "Included",
      details: "Implementasi design system 'Ruang Pulih' secara komprehensif.",
    },
    {
      category: "Responsive Engineering",
      deliverable: "Cross-Device Fluidity",
      status: "Included",
      details: "Mobile responsive, diuji secara deterministik pada iOS dan Android.",
    },
    {
      category: "Motion & Physics",
      deliverable: "Framer Motion Integration",
      status: "Included",
      details: "Animasi scroll berbasis Framer Motion untuk tactile feedback.",
    },
    {
      category: "Acquisition Routing",
      deliverable: "WhatsApp CTA",
      status: "Included",
      details: "Integrasi WhatsApp CTA dengan pesan pre-filled kontekstual.",
    },
    {
      category: "Analytics",
      deliverable: "Google Analytics Setup",
      status: "Included",
      details: "Setup Google Analytics untuk tracking konversi presisi.",
    },
    {
      category: "Location Intelligence",
      deliverable: "Native Maps Embed",
      status: "Included",
      details: "Google Maps embed — Kedoya Utara, Jakarta Barat.",
    },
    {
      category: "Deployment",
      deliverable: "Production Release",
      status: "Included",
      details: "Deploy ke domain resmi HOPE dengan pre-launch verification lengkap.",
    },
  ];

  const pages = [
    {
      path: "/beranda",
      deliverable: "Homepage",
      details: "Wajah merek, 3 USP terkuat.",
    },
    {
      path: "/tentang-kami",
      deliverable: "About",
      details: "Kisah pendirian, metodologi, filosofi klinis.",
    },
    {
      path: "/layanan",
      deliverable: "Services",
      details: "Sesi individual, teleconsultation protocol.",
    },
    {
      path: "/tim",
      deliverable: "Team",
      details: "Profil lengkap beserta kredensial praktisi.",
    },
    {
      path: "/kontak",
      deliverable: "Contact",
      details: "Form booking, WhatsApp CTA, peta akuisisi.",
    },
    {
      path: "/blog",
      deliverable: "Dynamic Blog",
      details: "Artikel edukasi, insight wellness, pengelolaan via CMS terintegrasi.",
    },
  ];
  
  const exclusions = [
    {
      item: "Copywriting Synthesis",
      details: "Tidak termasuk: pembuatan copywriting baru — menggunakan copy yang sudah tersedia dari materi HOPE.",
    },
    {
      item: "Asset Origination",
      details: "Tidak termasuk: pembuatan, editing, atau retouching foto dan ilustrasi — aset disediakan oleh HOPE.",
    },
    {
      item: "Payment Gateway",
      details: "Tidak termasuk: sistem booking online atau integrasi payment gateway.",
    },
  ];

  return (
    <div className="relative min-h-[100dvh] bg-zinc-950 font-geist text-zinc-300 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Ambient Depth: Liquid Glass + Noise */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.15] mix-blend-overlay" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="font-mono text-xs font-medium tracking-[0.12em] text-zinc-500 mb-4 uppercase">
            03 / Scope Pekerjaan
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight text-white mb-6">
            Scope Pekerjaan<br />
            <em className="italic font-normal text-zinc-400">dan Deliverables</em>
          </h2>
          <div className="w-12 h-1 bg-white/20 rounded-full mb-8"></div>
          <p className="max-w-3xl text-lg text-zinc-400 leading-relaxed tracking-[-0.01em]">
            Satu paket pengembangan mencakup dua komponen website yang saling melengkapi: <strong className="text-zinc-200 font-medium">Landing Page</strong> sebagai mesin konversi untuk paid ads traffic, dan <strong className="text-zinc-200 font-medium">Company Profile Website</strong> enam halaman termasuk blog — semuanya dilengkapi <strong className="text-zinc-200 font-medium">CMS dan portal admin</strong> agar HOPE bisa mengelola konten secara mandiri.
          </p>
        </motion.div>

        {/* Premium Service Specification Table: Landing Page */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className="p-8 md:p-10 border-b border-white/10 bg-white/[0.02]">
            <h3 className="text-2xl font-semibold text-white tracking-[-0.02em]">Landing Page / Mesin Konversi</h3>
          </div>
          
          <div className="flex flex-col">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-4 border-b border-white/10 bg-black/20 text-xs uppercase tracking-widest text-zinc-500 font-medium">
              <div className="md:col-span-3">Feature Category</div>
              <div className="md:col-span-4">Deliverables</div>
              <div className="md:col-span-5">Status / Details</div>
            </div>
            
            {/* Table Rows */}
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-6 border-b border-white/5 last:border-0 transition-all duration-300 hover:bg-white/[0.03] hover:scale-[1.005] group"
              >
                <div className="md:col-span-3">
                  <span className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">{service.category}</span>
                </div>
                <div className="md:col-span-4">
                  <span className="text-sm text-zinc-300">{service.deliverable}</span>
                </div>
                <div className="md:col-span-5 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                    <span className="text-xs uppercase tracking-wider text-zinc-400">{service.status}</span>
                  </div>
                  <span className="text-sm text-zinc-500 leading-relaxed mt-1">{service.details}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Service Specification Table: Company Profile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className="p-8 md:p-10 border-b border-white/10 bg-white/[0.02]">
            <h3 className="text-2xl font-semibold text-white tracking-[-0.02em]">Company Profile / 6 Halaman</h3>
          </div>
          
          <div className="flex flex-col">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-4 border-b border-white/10 bg-black/20 text-xs uppercase tracking-widest text-zinc-500 font-medium">
              <div className="md:col-span-3">Route Path</div>
              <div className="md:col-span-4">Deliverables</div>
              <div className="md:col-span-5">Details</div>
            </div>
            
            {/* Table Rows */}
            {pages.map((page, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-6 border-b border-white/5 last:border-0 transition-all duration-300 hover:bg-white/[0.03] hover:scale-[1.005] group"
              >
                <div className="md:col-span-3">
                  <span className="font-mono flex items-center gap-2 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {page.path}
                    {page.path === '/blog' && (
                      <span className="text-[9px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white ml-2">Baru</span>
                    )}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <span className="text-sm font-medium text-zinc-200">{page.deliverable}</span>
                </div>
                <div className="md:col-span-5">
                  <span className="text-sm text-zinc-400 leading-relaxed">{page.details}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exclusions Block & Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 backdrop-blur-xl bg-black/40 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
          >
            <h4 className="text-lg font-semibold text-zinc-300 tracking-[-0.01em] mb-6 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
              Out of Scope (Tidak Termasuk)
            </h4>
            <div className="flex flex-col divide-y divide-white/5">
              {exclusions.map((exclusion, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="py-4 first:pt-0 last:pb-0 transition-all duration-300 hover:px-2 hover:bg-white/[0.02] rounded-lg -mx-2 px-2"
                >
                  <strong className="block text-sm text-zinc-200 mb-1">{exclusion.item}</strong>
                  <span className="text-sm text-zinc-500 leading-relaxed">{exclusion.details}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-[1.01] hover:bg-white/[0.07]"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <strong className="block text-lg font-semibold text-white tracking-[-0.01em] mb-3">Satu Paket, Satu Proyek</strong>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Landing Page dan Company Profile dibangun dalam satu siklus pengembangan yang terintegrasi. Design system yang konsisten memastikan pengalaman visual yang presisi antara kedua komponen website.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
