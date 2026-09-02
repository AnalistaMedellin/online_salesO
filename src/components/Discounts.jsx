import { UserPlus, ShoppingCart, Crown, Lock } from "lucide-react";


const tiers = [

    {
        number: "01",
        icon: UserPlus,
        title: "REACTIVACIÓN / PRIMERA COMPRA",
        description: "Primera compra por el canal digital, o reactivación de una cuenta inactiva.",
        discounts: ["30% EN TODO EL PORTAFOLIO"],
    },

    {
        number: "02",
        icon: ShoppingCart,
        title: "RECOMPRA",
        description: "A partir de la segunda compra, poo nuestro canal digital.",
        discounts: ["25% PAGANDO A CREDITO", "30% PAGANDO A CONTADO"],

    },

    {
        number: "03",
        icon: Crown,
        title: "COMUNIDAD VIP",
        description: "Lotes estrategicos, clientes vinclulado a comunidad VIP, con beneficios exclusivos.",
        discounts: ["40% A 30 DÍAS DE CRÉDITO", "50% DE CONTADO"],
        locked: true,
    },
];

function Discounts() {
    return (
        <section id="descuentos" className="bg-[#121214] px-6 py-16">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-3xl font-black uppercase text-center">
                    ESTRUCTURA DE DESCUENTOS POR <span className="text-[#8B5BF6]">NIVELES</span>
                </h2>
                <p className="mt-2 text-center text-[#A0A0A8]">
                    ENTRA FÁCIL,MEJORA EN CADA COMPRA
                </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tiers.map((tier) => (
                    <div key={tier.number} className="bg-[#1A1A1D] border border-[#2E2E33] rounded-lg p-6">
                        <span className="text-[#8B5CF6] font-bold">{tier.number}</span>
                        <tier.icon size={28} className="text-white mt-2"/>
                        <h3 className="mt-3 font-bold uppercase">{tier.title}</h3>
                        <p className="mt-2 text-sm text-[#A0A0A8]">{tier.description}</p>
                        <div className="mt-4 space-y-1">
                            {tier.locked ? (
                                <div className="flex items-center gap-2 text-[#A0A0A8]">
                                    <Lock size={20} />
                                    <span className="font-bold">DESCUENTOS BLOQUEADOS</span>
                                </div>
                            ) : (
                                tier.discounts.map((d) => (
                                    <p key={d} className="text-2xl font-black text-[#F3C969]">{d}</p>
                                ))
                            )}
                        </div>
                    </div>
                ))}
                    <div className = "bg-gradient-to-b from-[#1A1A1D] to-black border border-[#D4A94B] rounded-xl p-6 flex flex-col items-center justify-center text-center">
                        <Crown size={32} className="text-[#F3C969]" />
                        <h3 className="mt-3 text-3xl font-black text-[#F3C969]">VIP</h3>
                        <p className="mt-2 text-sm text-[#A0A0A8]">BENEFICIOS EXCLUSIVOS PARA QUIENES QUIEREN MÁS RENTABILIDAD.</p>
                    </div>
            </div>
            </div>
        </section>

    )
};



export default Discounts;