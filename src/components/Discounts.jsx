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
];

function Discounts() {
    return (
        <section id="descuentos" className="bg-[#121214] px-6 py-10 sm:py-14 lg:py-16">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-center">
                    MÁS COMPRAS, <span className="text-[#C9A227]">MÁS RENTABILIDAD</span>
                </h2>
                <p className="mt-2 text-center text-[#A0A0A8]">
                    BENEFICIOS QUE CRECEN CON CADA COMPRA
                </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {tiers.map((tier) => (
                    <div key={tier.number} className="bg-[#1A1A1D] border border-[#2E2E33] rounded-lg p-5 text-center">
                        <tier.icon size={22} className="mx-auto text-white" />
                        <h3 className="mt-2 text-sm font-bold uppercase">{tier.title}</h3>
                        <p className="mt-1.5 text-xs text-[#A0A0A8]">{tier.description}</p>
                        <div className="mt-3 space-y-1">
                            {tier.locked ? (
                                <div className="flex items-center justify-center gap-2 text-[#A0A0A8]">
                                    <Lock size={16} />
                                    <span className="text-sm font-bold">DESCUENTOS BLOQUEADOS</span>
                                </div>
                            ) : (
                                tier.discounts.map((d) => {
                                    const match = d.match(/^(\d+%)\s*(.*)$/);
                                    return (
                                        <p key={d} className="text-sm font-bold text-white">
                                            {match ? (
                                                <>
                                                    <span className="text-xl font-black text-[#F3C969]">{match[1]}</span>{" "}
                                                    {match[2]}
                                                </>
                                            ) : (
                                                d
                                            )}
                                        </p>
                                    );
                                })
                            )}
                        </div>
                    </div>
                ))}
                    <div className="bg-gradient-to-b from-[#1A1A1D] to-black border border-[#D4A94B] rounded-xl p-5 flex flex-col items-center justify-center text-center">
                        <Crown size={22} className="text-[#F3C969]" />
                        <h3 className="mt-2 text-lg font-black text-[#F3C969]">COMUNIDAD VIP</h3>
                        <p className="mt-1.5 text-xs text-[#A0A0A8]">
                            Lotes estratégicos, clientes vinculados a la comunidad VIP, con beneficios exclusivos.
                        </p>
                        <div className="mt-3 flex items-center justify-center gap-2 text-[#A0A0A8]">
                            <Lock size={16} />
                            <span className="text-sm font-bold">DESCUENTOS BLOQUEADOS</span>
                        </div>
                    </div>
            </div>
            </div>
        </section>

    )
};



export default Discounts;