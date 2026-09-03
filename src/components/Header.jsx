import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
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
        <header className="sticky top-0 z-50 bg-[#0A0A0C]/95 backdrop-blur-md border-b border-white/[0.08]">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
                <div className="h-[72px] flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="https://autovenz.com/?lang=es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0"
                    >
                        <img
                            src={autovenzLogo}
                            alt="Autovenz"
                            className="h-8 sm:h-9 w-auto"
                        />
                    </a>

                    {/* Desktop navigation */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative text-[11px] xl:text-xs font-semibold tracking-[0.08em] text-[#A0A0A8] transition-colors duration-200 hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={openModal}
                            className="group flex items-center gap-2 bg-[#5B108B] hover:bg-[#7113AA] text-white text-[11px] sm:text-xs font-bold tracking-[0.05em] px-4 sm:px-5 py-2.5 sm:py-3 rounded-md transition-all duration-200 shadow-[0_0_20px_rgba(91,16,139,0.2)] hover:shadow-[0_0_25px_rgba(91,16,139,0.4)]"
                        >
                            <WhatsAppIcon
                                className="w-[17px] h-[17px] transition-transform duration-200 group-hover:scale-110"
                            />
                            <span className="hidden sm:inline">
                                COTIZAR AHORA
                            </span>
                        </button>

                        {/* Mobile menu */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden flex items-center justify-center w-10 h-10 text-white border border-white/[0.08] rounded-md hover:border-[#5B108B] transition-colors"
                            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
                        </button>
                    </div>
                </div>

                {/* Mobile navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden border-t border-white/[0.08] py-5">
                        <div className="flex flex-col">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="py-3.5 text-xs font-semibold tracking-[0.08em] text-[#A0A0A8] border-b border-white/[0.05] last:border-0 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;