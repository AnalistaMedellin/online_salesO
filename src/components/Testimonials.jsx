import { useState } from "react";
import { Star,ChevronLeft, ChevronRight,User } from "lucide-react";

const testimonials = [
    {
        quote:"Desde que compré por el canal directo de Autovenz, mis márgenes cambiaron. Entrar a la Comunidad VIP y aprovechar los descuentos de contado en packs de suspensión me permitió capitalizar mi mostrador mucho más rápido.",
        author: "Almacén Automotriz, Medellín",
        rating: 5
    },
    {

        quote: "La logística es impecable. Hacemos pedidos superiores a $1.500.000 COP, nos aplican el descuento de recompra del 30%, y los repuestos de línea pesada llegan sin demoras.",
        author: "Flota de Transporte de Carga",
        rating: 5
    },
    {
        quote: "La atención por WhatsApp es ágil. Mi asesor me avisa de las ofertas relámpago y me ayuda a armar el pedido que mejor le conviene a mi mostrador. Es un proveedor que se preocupa por mi rentabilidad.",
        author: "Almacén de Autopartes",
    },
];

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () => {
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
};

    const goNext = () => {
    setActiveIndex((activeIndex + 1) % testimonials.length);
};

const current = testimonials[activeIndex];

return (
    <section id="testimonios" className="bg-[#0A0A0C] px-5 sm:px-6 pt-4 pb-10 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16">
        <div className="max-w-[1100px] mx-auto">

            {/* Encabezado */}
            <div className="max-w-2xl mb-8 sm:mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-[2px] bg-[#C9A227]" />
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#C9A227]">
                        EXPERIENCIAS REALES
                    </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.02em] leading-[0.95] text-white">
                    NUESTROS CLIENTES <span className="text-[#C9A227]">HABLAN</span>
                </h2>
            </div>

            {/* Carrusel */}
            <div className="flex items-center justify-center gap-3 sm:gap-6">
                <button
                    onClick={goPrev}
                    aria-label="Testimonio anterior"
                    className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border border-white/[0.12] text-[#8F8F98] transition-colors duration-300 hover:border-[#C9A227]/40 hover:text-[#C9A227]"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.7} />
                </button>

                <div className="relative w-full max-w-xl border border-[#5B108B]/40 bg-[#0D0D10] p-6 sm:p-10">
                    {/* Línea de acento */}
                    <div className="absolute top-0 left-0 w-10 sm:w-14 h-[2px] bg-[#C9A227]" />

                    {/* Número técnico */}
                    <span className="absolute top-3 right-4 sm:top-6 sm:right-6 text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-white/[0.2]">
                        0{activeIndex + 1} / 0{testimonials.length}
                    </span>

                    <div className="flex justify-center gap-1 text-[#C9A227]">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <Star key={n} size={14} fill="currentColor" strokeWidth={0} />
                        ))}
                    </div>

                    <p className="mt-5 sm:mt-6 text-center text-sm sm:text-lg leading-6 sm:leading-8 italic text-[#D4D4D9]">
                        "{current.quote}"
                    </p>

                    <div className="mt-7 sm:mt-8 flex flex-col items-center gap-2.5">
                        <span className="w-8 h-[1px] bg-[#5B108B]" />
                        <div className="flex items-center gap-2">
                            <User size={16} strokeWidth={1.7} className="text-[#8F8F98]" />
                            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.04em] text-white">
                                {current.author}
                            </span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={goNext}
                    aria-label="Siguiente testimonio"
                    className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border border-white/[0.12] text-[#8F8F98] transition-colors duration-300 hover:border-[#C9A227]/40 hover:text-[#C9A227]"
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.7} />
                </button>
            </div>

        </div>
    </section>
    );
}

export default Testimonials;
