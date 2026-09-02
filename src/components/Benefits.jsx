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
    }
];

function Benefits() {
    return (
        <section id="beneficios" className="bg-[#0A0A0C] px-6 py-16">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-3xl font-black uppercase text-center">
                    BENEFICIOS QUE IMPULSAN TU <span className="text-[#8B5BF6]">NEGOCIO</span>
                </h2>   
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="text-center">
                        <div className="mx-auto w-16 h-16 rounded-full bg-[#1A1A1D] border border-[#8B5CF6] flex items-center justify-center">
                            <benefit.icon size={28} className="mx-auto text-[#8B5BF6]" />
                        </div>
                    <h3 className="mt-4 font-bold uppercase">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-[#A0A0A8]">{benefit.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}
export default Benefits;    
