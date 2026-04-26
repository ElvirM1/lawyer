const navLinks = [
  { label: "Rreth Meje", href: "#about" },
  { label: "Shërbimet", href: "#services" },
  { label: "Pse Unë", href: "#why" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d0d] border-t border-[#ffffff08]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-[family-name:var(--font-playfair)] text-white text-xl font-semibold mb-1">
              Murat Krasniqi
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8A96A] mb-6">
              Avokat
            </p>
            <div className="h-[1px] w-10 bg-[#C8A96A]/50 mb-6" />
            <p className="text-[#666] text-[13px] leading-relaxed font-light">
              Shërbime ligjore profesionale me integritet dhe përkushtim. Pejë,
              Kosovë.
            </p>
            <p className="text-[#444] text-[11px] tracking-[0.12em] uppercase mt-5 leading-relaxed">
              Avokat i Licencuar
              <br />
              Oda e Avokatëve të Kosovës
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#555] mb-6 font-medium">
              Navigim
            </p>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#777] text-[13px] hover:text-[#C8A96A] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#555] mb-6 font-medium">
              Kontakt
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+38344260652"
                className="text-[#777] text-[13px] hover:text-[#C8A96A] transition-colors duration-300"
              >
                +383 44 260 652
              </a>
              <p className="text-[#777] text-[13px] leading-relaxed">
                E Hënë – E Premte
              </p>
              <address className="text-[#777] text-[13px] not-italic leading-relaxed">
                Rr. Sali Gjuka, 90
                <br />
                Pejë, Kosovë
              </address>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#ffffff06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-[12px] tracking-wide">
            © {year} Murat Krasniqi — Avokat. Të gjitha të drejtat e rezervuara.
          </p>
          <p className="text-[#333] text-[11px] tracking-[0.1em]">
            Oda e Avokatëve të Kosovës · Pejë
          </p>
        </div>
      </div>
    </footer>
  );
}
