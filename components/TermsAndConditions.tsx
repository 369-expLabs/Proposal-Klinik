import React from 'react';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 25 }
        },
    };

    const legalClauses = [
        {
            title: "Kepemilikan dan Hak Akses",
            points: [
                "Setelah pelunasan, HOPE menjadi pemilik penuh seluruh aset digital: kode, desain, konten, dan akses domain.",
                "Majesta Solution tidak menyimpan hak eksklusif atas website yang diserahterimakan.",
                "Akses penuh ke repository kode diberikan setelah go-live dan pelunasan.",
                "Akses CMS dan portal admin diserahkan pada hari go-live bersamaan dengan pelatihan penggunaan.",
            ]
        },
        {
            title: "Revisi",
            points: [
                "Maksimal 3 putaran revisi termasuk dalam scope tanpa biaya tambahan.",
                "Revisi di luar 3 putaran atau perubahan yang keluar dari scope awal akan diestimasi dan disepakati terlebih dahulu.",
                "Satu putaran revisi = satu kumpulan feedback yang dikumpulkan dalam satu waktu. Feedback bertahap dihitung sebagai putaran terpisah.",
            ]
        },
        {
            title: "Keterlambatan dari Pihak HOPE",
            points: [
                "Timeline 30 hari berlaku sejak DP diterima, dengan asumsi aset diserahkan pada Hari 1 sampai 5.",
                "Apabila aset terlambat diserahkan, timeline bergeser secara proporsional dan bukan merupakan tanggung jawab Majesta Solution.",
            ]
        },
        {
            title: "Pembatalan",
            points: [
                "Apabila HOPE membatalkan proyek secara sepihak tanpa alasan yang logis dan jelas, DP tidak dapat dikembalikan.",
                "Apabila keputusan pembatalan disertai alasan yang jelas dan dapat dipertanggungjawabkan, DP dikembalikan sebesar 50%.",
                "Apabila Majesta Solution membatalkan karena kondisi di luar kendali (force majeure), DP dikembalikan sepenuhnya.",
            ]
        },
        {
            title: "Hosting Tahunan",
            points: [
                "Layanan hosting Majesta ditagihkan sebesar Rp 500.000 per tahun, jatuh tempo setiap tahun pada bulan yang sama dengan tanggal go-live.",
                "Apabila HOPE memilih untuk tidak melanjutkan layanan hosting Majesta, seluruh source code dan aset diserahkan untuk dipindahkan ke hosting pilihan HOPE.",
            ]
        }
    ];

    return (
        <div className="relative min-h-[100dvh] bg-zinc-950 font-geist text-zinc-300 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Ambient Depth: Liquid Glass + Noise */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.15] mix-blend-overlay"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
            ></div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24"
                >
                    <div className="font-mono text-xs font-medium tracking-[0.12em] text-zinc-500 mb-4 uppercase">
                        09 / Syarat & Ketentuan
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight text-white mb-6">
                        Syarat dan<br />
                        <em className="italic font-normal text-zinc-400">Ketentuan</em>
                    </h2>
                    <div className="w-12 h-1 bg-white/20 rounded-full mb-8"></div>
                </motion.div>

                {/* Asymmetric Two-Column Disclosure Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-6"
                >
                    {legalClauses.map((clause, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500 hover:scale-[1.005] hover:bg-white/[0.08]"
                        >
                            {/* Category Title (Sticky Left) */}
                            <div className="lg:sticky lg:top-24 self-start">
                                <h3 className="text-2xl font-semibold text-white tracking-[-0.02em] leading-tight group-hover:text-zinc-200 transition-colors">
                                    {clause.title}
                                </h3>
                            </div>

                            {/* Clauses (Stacked Right) */}
                            <div className="flex flex-col gap-6">
                                {clause.points.map((point, pointIndex) => (
                                    <div key={pointIndex} className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2.5 shrink-0 group-hover:bg-zinc-300 transition-colors duration-500"></div>
                                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-[65ch] group-hover:text-zinc-300 transition-colors duration-500">
                                            {/* Highlight specific structural/important words if necessary, otherwise straight text rendering */}
                                            {point.split(/(HOPE|Majesta Solution|DP)/g).map((part, i) => {
                                                if (['HOPE', 'Majesta Solution', 'DP'].includes(part)) {
                                                    return <strong key={i} className="text-zinc-200 font-medium">{part}</strong>;
                                                }
                                                return part;
                                            })}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
