import { ShieldCheck, Award, Headset } from "lucide-react";
import autovenzLogo from "../assets/AutoVenz_Logotipo-for-Dark.svg";

const badges = [
  { icon: ShieldCheck, text: "CALIDAD GARANTIZADA" },
  { icon: Award, text: "MARCAS LÍDERES" },
  { icon: Headset, text: "SOPORTE DEDICADO" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0C] border-t border-[#2E2E33] px-6 py-12">
      <div className="max-w-[1280px] mx-auto text-center">
        <img src={autovenzLogo} alt="Autovenz — Repuestos que mueven tu negocio" className="h-10 mx-auto" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          {badges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-sm text-[#A0A0A8]">
              <badge.icon size={18} className="text-[#8B5CF6]" />
              {badge.text}
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#A0A0A8]">
          © {year} Autovenz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
