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

  const landingPageServices = [
    {
      kategori: "Arsitektur Halaman",
      deliverable: "11 Section Landing Page",
      detail: "Pembangunan 11 section sesuai arsitektur konten yang disepakati untuk konversi maksimal.",
    },
    {
      kategori: "Sistem Desain",
      deliverable: "Implementasi 'Ruang Pulih'",
      detail: "Penerapan design system 'Ruang Pulih' secara komprehensif pada antarmuka.",
    },
    {
      kategori: "Responsivitas",
      deliverable: "Cross-Device Fluidity",
      detail: "Tampilan mobile responsive, diuji secara deterministik pada iOS dan Android.",
    },
    {
      kategori: "Interaksi & Animasi",
      deliverable: "Integrasi Framer Motion",
      detail: "Animasi scroll berbasis Framer Motion untuk memberikan tactile feedback fluid.",
    },
    {
      kategori: "Routing Konversi",
      deliverable: "WhatsApp CTA Pintar",
      detail: "Integrasi tombol WhatsApp dengan pesan pre-filled yang kontekstual.",
    },
    {
      kategori: "Analitik Data",
      deliverable: "Setup Google Analytics",
      detail: "Pemasangan Google Analytics untuk pelacakan performa dan konversi presisi.",
    },
    {
      kategori: "Infrastruktur Lokasi",
      deliverable: "Native Maps Embed",
      detail: "Integrasi cerdas Google Maps — Kedoya Utara, Jakarta Barat.",
    },
    {
      kategori: "Deployment",
      deliverable: "Rilis Produksi",
      detail: "Deploy ke domain resmi HOPE dengan proses pre-launch verification lengkap.",
    },
  ];

  const companyProfilePages = [
    {
      kategori: "/beranda",
      deliverable: "Homepage",
      detail: "Wajah merek digital, mengomunikasikan 3 USP terkuat secara langsung.",
    },
    {
      kategori: "/tentang-kami",
      deliverable: "About",
      detail: "Narasi kisah pendirian, metodologi, dan filosofi klinis.",
    },
    {
      kategori: "/layanan",
      deliverable: "Services",
      detail: "Penjabaran sesi individual dan protokol teleconsultation.",
    },
    {
      kategori: "/tim",
      deliverable: "Team",
      detail: "Profil lengkap beserta kredensial dari para praktisi.",
    },
    {
      kategori: "/kontak",
      deliverable: "Contact",
      detail: "Formulir booking, routing WhatsApp CTA, dan peta lokasi.",
    },
  ];

  const cmsAndBlog = [
    {
      kategori: "/blog",
      deliverable: "Dynamic Blog Terpadu",
      detail: "Ruang untuk artikel edukasi dan insight wellness, dikelola mandiri.",
    },
    {
      kategori: "Sistem Manajemen",
      deliverable: "Portal Admin CMS",
      detail: "Sistem Headless CMS untuk pengelolaan konten (teks, foto, artikel) secara otonom.",
    },
  ];

  const exclusions = [
    {
      item: "Copywriting Creation",
      detail: "Pembuatan copywriting baru — pengembangan menggunakan copy yang telah disediakan oleh HOPE.",
    },
    {
      item: "Asset Origination",
      detail: "Pembuatan, editing, atau retouching foto dan ilustrasi — seluruh aset visual disediakan oleh HOPE.",
    },
    {
      item: "Transaction Systems",
      detail: "Pembuatan sistem booking online otomatis atau integrasi payment gateway langsung di website.",
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
            03 / Lingkup Pekerjaan
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight text-white mb-6">
            Lingkup Pekerjaan<br />
            <em className="italic font-normal text-zinc-400">dan Deliverables</em>
          </h2>
          <div className="w-12 h-1 bg-white/20 rounded-full mb-8"></div>
          <p className="max-w-3xl text-lg text-zinc-400 leading-relaxed tracking-[-0.01em]">
            Satu paket pengembangan mencakup dua komponen arsitektur yang saling tersinkronisasi: <strong className="text-zinc-200 font-medium">Landing Page</strong> sebagai instrumen konversi untuk lalu lintas berbayar, dan <strong className="text-zinc-200 font-medium">Company Profile Terpadu</strong> termasuk blog — yang sepenuhnya ditenagai oleh sistem <strong className="text-zinc-200 font-medium">CMS dan portal admin</strong> untuk manajemen konten mandiri.
          </p>
        </motion.div>

        {/* Premium Service Specification Table: Landing Page */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className="p-8 md:p-10 border-b border-white/10 bg-white/[0.02]">
            <h3 className="text-2xl font-semibold text-white tracking-[-0.02em]">Landing Page / Mesin Konversi</h3>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-5 bg-black/20 text-xs uppercase tracking-widest text-zinc-500 font-medium sticky top-0 z-10 backdrop-blur-md">
              <div className="md:col-span-3">Kategori</div>
              <div className="md:col-span-4">Deliverables</div>
              <div className="md:col-span-5">Detail Teknis</div>
            </div>

            {/* Table Rows */}
            {landingPageServices.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-6 transition-all duration-300 hover:bg-white/[0.04] hover:scale-[1.005] origin-left group"
              >
                <div className="md:col-span-3">
                  <span className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors duration-300">{item.kategori}</span>
                </div>
                <div className="md:col-span-4 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5 shrink-0 group-hover:bg-zinc-400 transition-colors duration-300"></div>
                  <span className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-300">{item.deliverable}</span>
                </div>
                <div className="md:col-span-5">
                  <span className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">{item.detail}</span>
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
          className="mb-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className="p-8 md:p-10 border-b border-white/10 bg-white/[0.02]">
            <h3 className="text-2xl font-semibold text-white tracking-[-0.02em]">Company Profile / Struktur Utama</h3>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-5 bg-black/20 text-xs uppercase tracking-widest text-zinc-500 font-medium sticky top-0 z-10 backdrop-blur-md">
              <div className="md:col-span-3">Kategori (Direktori)</div>
              <div className="md:col-span-4">Deliverables</div>
              <div className="md:col-span-5">Detail Teknis</div>
            </div>

            {/* Table Rows */}
            {companyProfilePages.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-6 transition-all duration-300 hover:bg-white/[0.04] hover:scale-[1.005] origin-left group"
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">{item.kategori}</span>
                </div>
                <div className="md:col-span-4 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5 shrink-0 group-hover:bg-zinc-400 transition-colors duration-300"></div>
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">{item.deliverable}</span>
                </div>
                <div className="md:col-span-5">
                  <span className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">{item.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Service Specification Table: CMS & Admin Portal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className="p-8 md:p-10 border-b border-white/10 bg-white/[0.02]">
            <h3 className="text-2xl font-semibold text-white tracking-[-0.02em]">CMS & Admin Portal / Distribusi Konten</h3>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-5 bg-black/20 text-xs uppercase tracking-widest text-zinc-500 font-medium sticky top-0 z-10 backdrop-blur-md">
              <div className="md:col-span-3">Kategori</div>
              <div className="md:col-span-4">Deliverables</div>
              <div className="md:col-span-5">Detail Teknis</div>
            </div>

            {/* Table Rows */}
            {cmsAndBlog.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-10 py-6 transition-all duration-300 hover:bg-white/[0.04] hover:scale-[1.005] origin-left group"
              >
                <div className="md:col-span-3 flex items-center gap-2">
                  <span className={item.kategori.startsWith('/') ? "font-mono text-sm text-zinc-400 group-hover:text-white transition-colors duration-300" : "text-sm font-medium text-zinc-400 group-hover:text-white transition-colors duration-300"}>{item.kategori}</span>
                  {item.kategori === '/blog' && (
                    <span className="text-[9px] uppercase tracking-wider bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-white/10">Baru</span>
                  )}
                </div>
                <div className="md:col-span-4 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5 shrink-0 group-hover:bg-zinc-400 transition-colors duration-300"></div>
                  <span className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-300">{item.deliverable}</span>
                </div>
                <div className="md:col-span-5">
                  <span className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">{item.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exclusions Block & Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 backdrop-blur-xl bg-black/40 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
          >
            <h4 className="text-lg font-semibold text-zinc-300 tracking-[-0.01em] mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"></path></svg>
              </span>
              Di Luar Ruang Lingkup (Tidak Termasuk)
            </h4>
            <div className="flex flex-col gap-5">
              {exclusions.map((exclusion, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex flex-col md:flex-row md:items-start gap-2 md:gap-6 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                >
                  <span className="text-sm font-medium text-zinc-300 md:w-1/3 shrink-0 group-hover:text-white transition-colors duration-300">{exclusion.item}</span>
                  <span className="text-sm text-zinc-500 leading-relaxed md:w-2/3 group-hover:text-zinc-400 transition-colors duration-300">{exclusion.detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-[1.01] hover:bg-white/[0.07] group"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-white transition-colors duration-300"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <strong className="block text-xl font-semibold text-white tracking-[-0.01em] mb-4">Satu Paket Terintegrasi</strong>
            <p className="text-[15px] text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
              Landing Page dan Company Profile dibangun dalam satu siklus pengembangan yang holistik. Design system yang konsisten memastikan pengalaman visual yang presisi, profesional, dan dapat diandalkan oleh calon pasien.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
