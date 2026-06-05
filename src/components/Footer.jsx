import { Linkedin, Mail, Twitter } from "lucide-react";
import { navItems } from "../data/content.js";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="bg-graphite-950 py-10 text-white">
      <div className="section-shell">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <Logo dark />
          <nav className="flex flex-wrap gap-5 text-sm text-white/[0.62]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-sm text-white/[0.58] lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Own Terra Ecosystems. Plataforma empresarial para operaciones inmobiliarias.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="mailto:contacto@ownterra.com" className="inline-flex items-center gap-2 transition hover:text-white">
              <Mail size={16} />
              contacto@ownterra.com
            </a>
            <a href="#" className="transition hover:text-white" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="transition hover:text-white" aria-label="X">
              <Twitter size={18} />
            </a>
            <a href="#" className="transition hover:text-white">
              Aviso de privacidad
            </a>
            <a href="#" className="transition hover:text-white">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
