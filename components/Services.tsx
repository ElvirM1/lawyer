"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "E Drejta Civile",
    description:
      "Përfaqësim profesional në çështjet civile, duke përfshirë kontestet pronësore, kontratat, detyrimet dhe të drejtat e trashëgimisë. Çdo çështje trajtohet me kujdes dhe strategji juridike të fortë.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "E Drejta Penale",
    description:
      "Mbrojtje e fuqishme dhe e aftë në çdo fazë të procedurës penale. Bashkëpunoj ngushtesisht me klientët për të siguruar të drejtat kushtetuese dhe procesuale të çdokujt.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "E Drejta Biznesore",
    description:
      "Këshillim dhe përfaqësim ligjor për bizneset — nga themelimi i shoqërive tregtare, draftimet e kontratave, negociatat, deri te zgjidhja e mosmarrëveshjeve komerciale.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Konsulencë Ligjore",
    description:
      "Orientim profesional para çdo vendimi të rëndësishëm juridik. Ofroj mendim të qartë dhe praktik për t’ju ndihmuar të navigoni sistemin ligjor me siguri dhe qetësi.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    title: "Përfaqësim në Gjykatë",
    description:
      "Prezencë e vendosur dhe e aftë përpara gjykatave të të gjitha niveleve. Argumentoj me guxim dhe kompetencë për të mbrojtur interesat tuaja në çdo sallë gjyqi.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L5.25 4.97z"
        />
      </svg>
    ),
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.09, ease: EASE },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-[#f7f4ef]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* ── Header: split layout ── */}
        <div
          ref={ref}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 md:mb-20"
        >
          <div className="max-w-lg">
            <motion.p
              custom={0}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="text-[9px] tracking-[0.45em] uppercase text-[#C8A96A] font-semibold mb-5"
            >
              Shërbimet
            </motion.p>
            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="font-[family-name:var(--font-playfair)] text-[42px] md:text-[54px] text-[#0a0a0a] leading-[1.04] tracking-[-0.02em]"
            >
              Ekspertizë ligjore
              <br />
              <span className="italic font-normal">në çdo fushë</span>
            </motion.h2>
          </div>

          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="lg:max-w-[300px]"
          >
            <div className="h-px w-10 bg-[#C8A96A] mb-5" />
            <p className="text-[#777] leading-[1.85] font-light text-[14px]">
              Ofroj shërbime gjithëpërfshirëse ligjore, të adaptuara sipas
              nevojave specifike të çdo klienti dhe çështjeje.
            </p>
          </motion.div>
        </div>

        {/* ── Service rows ── */}
        <div
          className="flex flex-col"
          style={{ borderTop: "1px solid #e5e0d8" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i + 3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-0 py-10 cursor-default"
              style={{ borderBottom: "1px solid #e5e0d8" }}
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-[#C8A96A]/[0.028] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Number */}
              <div className="md:w-20 flex-shrink-0">
                <span className="font-[family-name:var(--font-playfair)] text-[13px] text-[#C8A96A]/50 font-semibold tracking-[0.1em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Icon */}
              <div className="md:w-16 flex-shrink-0 text-[#C8A96A]">
                {service.icon}
              </div>

              {/* Title + gold bar */}
              <div className="md:w-72 flex-shrink-0 flex flex-col gap-3">
                <h3 className="font-[family-name:var(--font-playfair)] text-[20px] text-[#0a0a0a] font-semibold leading-tight group-hover:text-[#0a0a0a] transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="h-px w-7 bg-[#C8A96A] group-hover:w-14 transition-all duration-500" />
              </div>

              {/* Description */}
              <p className="flex-1 text-[#5a5a5a] text-[13.5px] leading-[1.9] font-light md:pl-8">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="md:w-10 flex-shrink-0 flex justify-end">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-[#C8A96A] opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-400"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          custom={9}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="flex justify-center mt-14"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase font-semibold text-[#0a0a0a] hover:text-[#C8A96A] transition-colors duration-300"
          >
            <span>Kërko një konsultim</span>
            <span className="h-px w-10 bg-current group-hover:w-16 transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
