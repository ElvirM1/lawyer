"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Përvojë Profesionale",
    description:
      "Mbi një dekadë praktikë aktive në gjykatat e Kosovës dhe konsulencë të suksesshme. Çdo çështje përfiton nga njohuritë e thella juridike dhe aftësia strategjike.",
  },
  {
    number: "02",
    title: "Besueshmëri Absolute",
    description:
      "Relacioni mes avokatit dhe klientit ndërtohet mbi besimin. Garantoj konfidencialitet të plotë, komunikim të hapur dhe integritet profesional pa kompromis.",
  },
  {
    number: "03",
    title: "Qasje Serioze",
    description:
      "Çdo çështje trajtohet me seriozitetin dhe vëmendjen që meriton — analizë e kujdesshme, dokumentim i plotë dhe strategji juridike e menduar mirë.",
  },
  {
    number: "04",
    title: "Përkushtim ndaj Klientit",
    description:
      "Jeni prioriteti im. Jam i disponueshëm, reagoj shpejt dhe ju mbaj të informuar në çdo hap të procesit. Suksesi juaj juridik është suksesi im.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

export default function WhyChooseMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why"
      className="py-24 md:py-32 bg-[#111] relative overflow-hidden"
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96A]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96A]/50 to-transparent" />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="max-w-xl mb-14 md:mb-16">
          <motion.p
            custom={0}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96A] font-semibold mb-6"
          >
            Pse Unë
          </motion.p>
          <motion.h2
            custom={1}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="font-[family-name:var(--font-playfair)] text-[40px] md:text-[50px] text-white leading-[1.08] tracking-[-0.01em] mb-6"
          >
            Çfarë më dallon
            <span className="italic text-[#C8A96A]"> nga të tjerët</span>
          </motion.h2>
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="h-px w-12 bg-[#C8A96A]"
          />
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              custom={i}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="group p-8 md:p-10 rounded-xl bg-[#161616] border border-white/[0.05] hover:border-[#C8A96A]/25 transition-all duration-400 hover:bg-[#1c1c1c]"
            >
              {/* Number */}
              <p className="font-[family-name:var(--font-playfair)] text-[52px] font-bold text-white/[0.04] group-hover:text-[#C8A96A]/12 transition-colors duration-500 mb-5 leading-none">
                {reason.number}
              </p>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-playfair)] text-[20px] text-white mb-4 font-semibold leading-snug">
                {reason.title}
              </h3>

              {/* Gold line */}
              <div className="h-px w-8 bg-[#C8A96A] mb-5 group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p className="text-[#9a9a9a] text-[14px] leading-[1.85] font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
