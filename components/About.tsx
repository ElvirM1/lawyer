"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.12, ease: EASE },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Image column */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative max-w-[440px] mx-auto lg:mx-0">
              {/* Offset border decoration */}
              <div className="absolute bottom-[-14px] right-[-14px] inset-0 border border-[#C8A96A]/40 rounded-xl pointer-events-none z-0" />

              {/* Aspect ratio container for fill image */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.16)] bg-[#1e1e1e]">
                <Image
                  src="/images/portrait.png"
                  alt="Murat Krasniqi Avokat"
                  fill
                  className="object-contain [object-position:50%_12%] scale-[1.08]"
                  sizes="(max-width: 1024px) 90vw, 440px"
                  priority
                />
                {/* Subtle dark-to-card-bg fade at bottom so it merges with background */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1e1e1e] to-transparent pointer-events-none" />
                {/* Very subtle vignette on sides */}
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#1e1e1e]/60 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#1e1e1e]/60 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              custom={1}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="absolute bottom-6 lg:bottom-8 -right-4 lg:-right-6 bg-[#111] text-white px-6 py-5 shadow-xl rounded-lg z-10"
            >
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#C8A96A] leading-none mb-1.5">
                10+
              </p>
              <p className="text-[9px] tracking-[0.22em] uppercase text-[#aaa] font-medium">
                Vite Përvojë
              </p>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <div className="flex flex-col">
            <motion.p
              custom={0}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96A] font-semibold mb-6"
            >
              Rreth Meje
            </motion.p>

            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-[46px] text-[#0f0f0f] leading-[1.1] tracking-[-0.01em] mb-7"
            >
              Mbrojtja e të drejtave <span className="italic">tuaja</span>
              <br />
              është prioriteti im.
            </motion.h2>

            <motion.div
              custom={2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="h-px w-12 bg-[#C8A96A] mb-8"
            />

            <motion.p
              custom={3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="text-[#555] leading-[1.9] mb-5 font-light text-[15px]"
            >
              Jam Murat Krasniqi, avokat i licencuar me mbi një dekadë përvojë
              në fushën e drejtësisë civile, penale dhe biznesore. Aktivitetin
              tim profesional e ushtroj në Pejë, duke shërbyer klientë nga e
              gjithë Kosova me angazhim, diskrecion dhe profesionalizëm të
              lartë.
            </motion.p>

            <motion.p
              custom={4}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="text-[#555] leading-[1.9] mb-10 font-light text-[15px]"
            >
              Qasja ime ndaj çdo çështjeje është e individualizuar dhe e
              mbështetur në analiza të thella juridike. Besoj se çdo klient
              meriton përfaqësim dinjitoz dhe zgjidhje efektive — pa kompromis
              mbi standardet etike dhe profesionale.
            </motion.p>

            <motion.div
              custom={5}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              {[
                "E Drejta Civile",
                "E Drejta Penale",
                "E Drejta Biznesore",
                "Konsulencë Ligjore",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.15em] uppercase text-[#C8A96A] border border-[#C8A96A]/40 px-4 py-2 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
