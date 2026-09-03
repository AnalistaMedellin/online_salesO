import { Percent, Truck, ShieldCheck, Crown, ArrowRight } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import warehouseImage from "../assets/warehouse_autovenz.svg";
import warehouseImageMobile from "../assets/imagen_warehouse.svg";

const badges = [
    { icon: Percent, text: "MÁRGENES PREFERENCIALES" },
    { icon: Truck, text: "DESPACHO PRIORITARIO" },
    { icon: ShieldCheck, text: "ATENCIÓN CORPORATIVA DEDICADA" },
    { icon: Crown, text: "ACCESO A LOTES VIP" },
];

function Hero() {
    const { openModal } = useContactModal();

    return (
        <section className="relative overflow-hidden bg-[#0A0A0C]">
            <img
                src={warehouseImageMobile}
                alt="Almacén Autovenz"
                className="lg:hidden absolute inset-0 w-full h-full object-cover object-[center_65%] "

            />
            <img
                src={warehouseImage}
                alt="Almacén Autovenz"
                className="hidden lg:block absolute inset-0 w-full h-full object-cover"
            />
            {/* Degradado morado */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B108B]/80 via-[#0A0A0C]/80 to-transparent" />
            <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/70 via-[#0A0A0C]/35 to-transparent" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/85 to-[#0A0A0C]/30" />

            <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr] min-h-[680px] sm:min-h-[720px] lg:min-h-[calc(100vh-72px)]">

                    {/* Contenido */}
                    <div className="flex items-center py-8 sm:py-10 lg:py-20">
                        <div className="w-full max-w-[720px]">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-10 h-[2px] bg-[#C9A227]" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#C9A227]">
                                    CANAL DE VENTA CORPORATIVA
                                </span>
                            </div>

                            <h1 className="uppercase font-black tracking-[-0.025em] leading-[0.95]">
                                <span className="block text-[clamp(1.5rem,2.5vw,2.5rem)] text-white">
                                    TRANSFORMA LA <span className="text-[#C9A227]">RENTABILIDAD</span> DE TU NEGOCIO AUTOMOTRIZ:
                                </span>
                                <br />
                                <span className="block text-[clamp(2rem,3.5vw,3.5rem)] text-white">
                                    AUMENTA EL MARGEN DE TU MOSTRADOR
                                </span>
                                <span className="block text-[clamp(2rem,3.5vw,3.5rem)] text-[#C9A227]">
                                    HASTA UN 30%
                                </span>
                            </h1>

                            <p className="mt-7 max-w-[650px] text-sm sm:text-base leading-7 text-white/90">
                                Activa tu cuenta en el nuevo canal de venta corporativa de Autovenz. Asegura inventario
                                para tu taller o almacén, con despacho prioritario y beneficios exclusivos para la
                                <span className="text-[#C9A227] font-semibold"> Comunidad VIP.</span>
                            </p>

                            <div className="mt-8 grid grid-cols-2 xl:grid-cols-4 gap-5">
                                {badges.map((badge) => (
                                    <div key={badge.text} className="flex items-center gap-2.5">
                                        <badge.icon size={19} strokeWidth={1.8} className="shrink-0 text-[#C9A227]" />
                                        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.06em] leading-4 text-[#D0D0D5]">
                                            {badge.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-9 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={openModal}
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#5B108B] hover:bg-[#7113AA] text-white text-[11px] sm:text-xs font-bold px-5 py-4 rounded-md transition-all"
                                >
                                    <WhatsAppIcon className="w-[19px] h-[19px]" />
                                    <span>COTIZAR POR WHATSAPP Y ACTIVAR MI 30% DE DESCUENTO</span>
                                </button>

                                <button
                                    onClick={openModal}
                                    className="flex-1 flex items-center justify-center gap-2 border border-[#C9A227] bg-[#0A0A0C]/60 text-[#C9A227] hover:bg-[#C9A227] hover:text-black text-[11px] sm:text-xs font-bold px-5 py-4 rounded-md transition-all"
                                >
                                    HABLAR CON UN ASESOR CORPORATIVO
                                    <ArrowRight size={17} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
