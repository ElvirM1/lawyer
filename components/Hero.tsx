"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.15, ease: EASE },
  }),
};

const stats = [
  { value: "10+", label: "Vite Përvojë" },
  { value: "100%", label: "Angazhim" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0c0d0f]"
    >
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.png"
          alt="Murat Krasniqi Avokat"
          fill
          className="object-cover [object-position:72%_top] lg:[object-position:center]"
          sizes="100vw"
          priority
        />

        {/* MOBILE ONLY: top-to-bottom overlay so text over the top is readable
            while the lawyer's face shows in the center/bottom of screen */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-black/80 via-black/55 to-black/25" />

        {/* DESKTOP ONLY: left-to-right gradient — dark left zone for text, right shows lawyer */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: [
              "linear-gradient(to right,",
              "  rgba(10,11,13,0.92) 0%,",
              "  rgba(10,11,13,0.82) 28%,",
              "  rgba(10,11,13,0.45) 50%,",
              "  rgba(10,11,13,0.10) 68%,",
              "  transparent 80%",
              ")",
            ].join(" "),
          }}
        />

        {/* Top vignette — navbar area */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/75 to-transparent" />

        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/75 to-transparent" />

        {/* Film grain — premium editorial texture */}
        <div
          className="absolute inset-0 opacity-[0.032] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      {/* ── Gold left edge accent ── */}
      <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-[#C8A96A]/50 to-transparent z-10 hidden lg:block" />

      {/* ── Content: left-aligned, sits in the dark zone ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 min-h-screen flex flex-col justify-end pb-28 sm:pb-20 lg:justify-center lg:pt-28 lg:pb-24">
        <div className="flex flex-col max-w-[530px]">
          {/* Overline — 2 lines with gold left bar */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex items-stretch gap-4 mb-7"
          >
            <div className="w-[2px] bg-gradient-to-b from-[#C8A96A] to-[#C8A96A]/30 rounded-full flex-shrink-0" />
            <div className="flex flex-col gap-[6px]">
              <span className="text-[9px] tracking-[0.42em] uppercase text-[#C8A96A] font-semibold leading-none">
                Avokat i Licencuar
              </span>
              <span className="text-[9px] tracking-[0.42em] uppercase text-[#C8A96A]/60 font-medium leading-none">
                Pejë, Kosovë
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[64px] text-white leading-[0.90] tracking-[-0.03em] mb-6"
          >
            Murat
            <br />
            <span className="italic font-normal text-[#C8A96A]">Krasniqi</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="h-px w-14 bg-[#C8A96A] mb-7"
          />

          {/* Tagline — hidden on mobile to keep content block short */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="hidden sm:block text-white/60 text-[15.5px] leading-[1.95] font-light mb-10 max-w-[380px]"
          >
            Mbrojtje ligjore profesionale në Pejë, Kosovë. Ekspertizë civile,
            penale dhe biznesore me mbi një dekadë përvojë.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap gap-4 mb-10 sm:mb-16"
          >
            <a
              href="#contact"
              className="relative px-8 py-[15px] rounded-lg bg-[#C8A96A] text-[#0c0d0f] text-[11px] tracking-[0.22em] uppercase font-bold overflow-hidden group transition-all duration-300 hover:shadow-[0_0_32px_rgba(200,169,106,0.45)]"
            >
              <span className="relative z-10">Kërko Konsultim</span>
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="px-8 py-[15px] rounded-lg border border-white/20 text-white/80 text-[11px] tracking-[0.22em] uppercase font-medium hover:border-[#C8A96A] hover:text-[#C8A96A] backdrop-blur-sm transition-all duration-300"
            >
              Shërbimet
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex items-center gap-12 pt-7 border-t border-white/[0.10]"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="font-[family-name:var(--font-playfair)] text-[30px] font-semibold text-white leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-[8.5px] tracking-[0.32em] uppercase font-medium text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 hidden sm:flex"
      >
        <p className="text-[7.5px] tracking-[0.4em] uppercase font-semibold text-white/25">
          Zbulo më shumë
        </p>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#C8A96A]/70 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
