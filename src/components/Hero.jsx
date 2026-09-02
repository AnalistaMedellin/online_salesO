import { Percent, Truck, ShieldCheck, Crown, MessageCircle } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";



const badges = [
    
        {icon: Percent, text: "MÁRGENES PREFERENCIALES"},
        {icon: Truck, text: "DESPACHO PRIORITARIO"},
        {icon: ShieldCheck, text: "ATENCIÓN CORPORATIVA DEDICADA"},
        {icon: Crown, text: "ACCESO A LOTES VIP"},
];
function Hero() {
    const { openModal } = useContactModal();
    return (
        <section className="bg-[#0A0A0C] px-6 py-16">
            <div className="max-w-[1280px] mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide">
                    TRANSFORMA LA <span className="text-[#8B5CF6]">RENTABILIDAD</span> DE TU NEGOCIO AUTOMOTRIZ:
                </h1>
                <p className="mt-4 text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-wide">
                    AUMENTA HASTA UN <span className="text-[#F3C969]">30%</span> EL MARGEN DE TU MOSTRADOR
                </p>

                <p className="mt-6 max-w-2xl text-[#A0A0A8] text-base">
                    Activa tu cuenta en el nuevo canal de venta corporativa de Autovenz. Asegura inventario
                    para tu taller o almacén, con despacho prioritario y beneficios exclusivos para la
                    Comunidad VIP.
                </p>

                <div className="mt-8 flex flex-wrap gap-6">
                    {badges.map((badge) => (
                    <div key={badge.text} className="flex items-center gap-2 text-sm text-[#A0A0A8]">
                        <badge.icon size={20} className="text-[#8B5CF6]" />
                        {badge.text}
                    </div>
        ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <button
                        onClick={openModal}
                        className="flex items-center gap-2 bg-[#6D28D9] text-white text-sm font-bold px-5 py-3 rounded-full hover:bg-[#8B5CF6]"
                    >
                        <MessageCircle size={20} />
                        COTIZAR POR WHATSAPP Y ACTIVAR MI 30% DE DESCUENTO
                    </button>

                    <a href="#" className="flex items-center gap-2 border border-[#D4A94B] text-[#D4A94B] font-bold px-6 py-4 rounded-full hover:bg-[#D4A94B] hover:text-black">
                        HABLAR CON UN ASESOR CORPORATIVO
                    </a>

                </div>
            </div>           
        </section>
    );
}
export default Hero;