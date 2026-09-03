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
    <footer className="bg-[#0A0A0C] px-6 py-10 sm:py-12">
      <div className="max-w-[1280px] mx-auto text-center">
        <img src={autovenzLogo} alt="Autovenz — Repuestos que mueven tu negocio" className="h-9 mx-auto" />

        <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-10">
          {badges.map((badge, index) => (
            <div
              key={badge.text}
              className={`flex items-center justify-center gap-2 text-xs sm:text-sm text-[#A0A0A8] ${
                index === 2 ? "col-span-2" : ""
              }`}
            >
              <badge.icon size={16} strokeWidth={1.7} className="text-[#C9A227]" />
              {badge.text}
            </div>
          ))}
        </div>

        <div className="mt-8 w-10 h-px bg-white/[0.08] mx-auto" />

        <p className="mt-6 text-xs text-[#8F8F98]">
          © {year} Autovenz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
