import { useState } from "react";
import { Star,ChevronLeft, ChevronRight,User } from "lucide-react";

const testimonials = [
    {
        quote:"Desde que compré por el canal directo de Autovenz, mis márgenes cambiaron. Entrar a la Comunidad VIP y aprovechar el 50% de descuento de contado en packs de suspensión me permitió capitalizar mi mostrador mucho más rápido.",
        author: "Almacén Automotriz, Medellín",
        rating: 5
    },
    {
    
        quote: "La logística es impecable. Hacemos pedidos superiores a $1.500.000 COP, nos aplican el descuento de recompra del 30%, y los repuestos de línea pesada llegan sin demoras.",
        author: "Flota de Transporte de Carga",
        rating: 5
    },
    {
        quote: "La atención por WhatsApp es ágil. Mi asesor me avisa de las ofertas relámpago y armamos pedidos mezclando línea nueva con los lotes VIP. Es un proveedor que se preocupa por mi rentabilidad.",
        author: "Taller Mecánico",
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
    <section id="testimonios" className="bg-[#0A0A0C] px-6 py-16">
        <div className="max-w-[1280px] mx-auto">
            <h2 className="text-3xl font-black uppercase text-center">
                NUESTROS CLIENTES <span className="text-[#8B5CF6]">HABLAN</span>
            </h2>
            <div className="mt-10 flex items-center justify-center gap-2 sm:gap-4">
                <button onClick={goPrev} className="shrink-0 text-[#A0A0A8] hover:text-white">
                    <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>
                <div className="max-w-xl bg-[#1A1A1D] border border-[#2E2E33] rounded-xl p-5 sm:p-8 text-center">
                    <div className="flex justify-center gap-1 text-[#F3C969]">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <Star key={n} size={16} fill="currentColor" />
                        ))}
                    </div>
                    <p className="mt-4 text-[#A0A0A8] italic">"{current.quote}"</p>
                    <div className="mt-6 flex flex-col items-center gap-2">
                        <User size={32} className="text-[#8B5CF6]" />
                        <span className="font-bold">{current.author}</span>
                    </div>
                </div>
                <button onClick={goNext} className="shrink-0 text-[#A0A0A8] hover:text-white">
                    <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>
            </div>
        </div>
    </section>
    );
}

export default Testimonials;