import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import autovenzLogo from "../assets/AutoVenz_Logotipo-for-Dark.svg";
import { useContactModal } from "../context/ContactModalContext";

const navLinks = [
    { href: "#beneficios", label: "BENEFICIOS" },
    { href: "#descuentos", label: "DESCUENTOS" },
    { href: "#testimonios", label: "TESTIMONIOS" },
    { href: "#nuestro-canal", label: "NUESTRO CANAL" },
    { href: "#preguntas-frecuentes", label: "PREGUNTAS FRECUENTES" },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openModal } = useContactModal();

    return (
        <header className="sticky top-0 z-50 bg-[#0A0A0C] border-b border-[#2E2E33]">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">

                <img src={autovenzLogo} alt="Autovenz" className="h-8" />

                <nav className="hidden md:flex gap-8 text-sm text-[#A0A0A8] tracking-wide">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="hover:text-white">{link.label}</a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={openModal}
                        className="flex items-center gap-2 bg-[#6D28D9] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full hover:bg-[#8B5CF6]"
                        >
                        <MessageCircle size={18} />
                        <span className="hidden sm:inline">COTIZAR AHORA</span>
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white"
                        aria-label="Abrir menú"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden flex flex-col gap-4 px-6 py-6 border-t border-[#2E2E33] text-sm text-[#A0A0A8] tracking-wide">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
export default Header;