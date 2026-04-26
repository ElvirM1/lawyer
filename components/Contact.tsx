"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

const contactInfo = [
  {
    label: "Telefon",
    value: "+383 44 260 652",
    href: "tel:+38344260652",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    label: "Orari i Punës",
    value: "E Hënë – E Premte",
    href: "#",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "Adresa",
    value: "Rr. Sali Gjuka, 90, Pejë, Kosovë",
    href: "https://maps.google.com/?q=Pejë,Kosovo",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Përshëndetje, jam ${formState.name}.\nNumri im: ${formState.phone}.\nJam i interesuar për një konsultim.\nMesazhi: ${formState.message}`;
    window.open(
      `https://wa.me/38344260652?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left: Info */}
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="text-[10px] tracking-[0.35em] uppercase text-[#C8A96A] font-semibold mb-6"
            >
              Kontakt
            </motion.p>
            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              className="font-[family-name:var(--font-playfair)] text-[40px] md:text-[50px] text-[#0f0f0f] leading-[1.08] tracking-[-0.01em] mb-6"
            >
              Flisni me
              <span className="italic"> mua sot</span>
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
              className="text-[#666] leading-relaxed font-light text-[15px] mb-12"
            >
              Kontaktoni sot për konsultim fillestar. Jam i disponueshëm të
              diskutoj çështjen tuaj juridike me konfidencialitet dhe
              profesionalizëm të plotë.
            </motion.p>

            {/* Contact details */}
            <div className="flex flex-col gap-6 mb-10">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  custom={i + 4}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  variants={fadeUp}
                  href={item.href === "#" ? undefined : item.href}
                  target={item.label === "Adresa" ? "_blank" : undefined}
                  rel={
                    item.label === "Adresa" ? "noopener noreferrer" : undefined
                  }
                  className={`flex items-start gap-4 group${
                    item.href === "#" ? " cursor-default" : ""
                  }`}
                >
                  <div className="mt-0.5 text-[#C8A96A] flex-shrink-0 group-hover:text-[#111] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#bbb] mb-1 font-medium">
                      {item.label}
                    </p>
                    <p className="text-[#333] text-[14px] group-hover:text-[#C8A96A] transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp */}
            <motion.a
              custom={7}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
              href="https://wa.me/38344260652"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg bg-[#25D366] text-white text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-[#1ebe5d] transition-colors duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.399 5.61L0 24l6.545-1.377A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.032-1.385l-.36-.214-3.733.785.8-3.647-.235-.376A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp
            </motion.a>
          </div>

          {/* Right: Form */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 bg-white border border-[#ebe7e0] rounded-xl p-8 md:p-10 shadow-sm"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2 font-medium"
                >
                  Emri Juaj
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Emri dhe mbiemri"
                  className="w-full border-b border-[#e5e1da] bg-transparent py-3 text-gray-900 caret-gray-900 text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-[#C8A96A] transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2 font-medium"
                >
                  Numri i Telefonit
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  placeholder="+383 44 ..."
                  className="w-full border-b border-[#e5e1da] bg-transparent py-3 text-gray-900 caret-gray-900 text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-[#C8A96A] transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2 font-medium"
                >
                  Mesazhi
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Shpjegoni shkurtimisht çështjen tuaj juridike..."
                  className="w-full border-b border-[#e5e1da] bg-transparent py-3 text-gray-900 caret-gray-900 text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-[#C8A96A] transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 self-start inline-flex items-center gap-3 px-8 py-3.5 rounded-lg bg-[#25D366] text-white text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-[#1ebe5d] transition-all duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.399 5.61L0 24l6.545-1.377A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.032-1.385l-.36-.214-3.733.785.8-3.647-.235-.376A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                Dërgo në WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
