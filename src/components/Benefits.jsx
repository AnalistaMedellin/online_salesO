import { TrendingUp, Clock, Crown, Headset } from "lucide-react";

const benefits = [
    {
        icon: TrendingUp,
        title: "Rentabilidad inmediata",
        description: "Con tu primera compra por el canal digital, al reactivar tu cuenta, obtienes un 30% de descuento en todo el portafolio.",
    },
    {
        icon: Clock,
        title: "Premio a la constancia",
        description: "Desde tu segunda compra, accedes a un descuento preferencial: 25% a crédito y 30% al contado, premiando tu fidelidad.",
    },
    {
        icon: Crown,
        title: "Comunidad VIP",
        description: "Aceso a lotes estratégicos y beneficios exclusivos para clientes vinculados a nuestra comunidad VIP.",
    },
    {
        icon: Headset,
        title: "Atención coportiva dedicada",
        description: "Un asesor inside sales asignado, que gestiona tus cotizaciones y despachos en tiempo real por whatsapp - sin intermediarios.",
    },
];

function Benefits() {
    return (
        <section id="beneficios" className="bg-[#0A0A0C] px-5 sm:px-6 pt-10 pb-2 sm:py-14 lg:py-16">
            <div className="max-w-[1100px] mx-auto">

                {/* Encabezado */}
                <div className="max-w-2xl mb-10 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-[2px] bg-[#C9A227]" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#C9A227]">
                            BENEFICIOS EXCLUSIVOS
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.02em] leading-[0.95] text-white">
                        BENEFICIOS QUE IMPULSAN TU <span className="text-[#C9A227]">NEGOCIO</span>
                    </h2>
                </div>

                {/* Grid de beneficios */}
                <div className="grid grid-cols-2 border border-white/[0.08] bg-[#0D0D10]">
                    {benefits.map((benefit, index) => (
                        <article
                            key={benefit.title}
                            className={`group relative p-3 sm:p-8 lg:p-10 transition-colors duration-300 hover:bg-[#111116] ${index % 2 === 0 ? "border-r border-white/[0.08]" : ""} ${index >= 2 ? "border-t border-white/[0.08]" : ""}`}
                        >
                            {/* Línea de acento */}
                            <div className="absolute top-0 left-0 w-8 sm:w-12 h-[2px] bg-[#5B108B] transition-all duration-300 group-hover:w-20 group-hover:bg-[#C9A227]" />

                            {/* Icono */}
                            <div className="mx-auto flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 border border-[#C9A227]/30 bg-[#C9A227]/[0.04] rounded-sm mb-3 sm:mb-6">
                                <benefit.icon strokeWidth={1.7} className="w-4 h-4 sm:w-[22px] sm:h-[22px] text-[#C9A227]" />
                            </div>

                            {/* Título */}
                            <h3 className="text-center text-[11px] sm:text-base font-bold uppercase tracking-[0.04em] text-white leading-tight">
                                {benefit.title}
                            </h3>

                            {/* Descripción */}
                            <p className="mt-1.5 sm:mt-3 max-w-md text-[10px] sm:text-sm leading-4 sm:leading-6 text-[#8F8F98]">
                                {benefit.description}
                            </p>

                            {/* Número */}
                            <span className="absolute top-3 right-3 sm:top-6 sm:right-6 text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-white/[0.15]">
                                0{index + 1}
                            </span>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Benefits;
