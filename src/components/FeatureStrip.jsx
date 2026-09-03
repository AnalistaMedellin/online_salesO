import { Percent, Crown, Truck, ShieldCheck } from "lucide-react";

const features = [
    { icon: Percent, title: "INVENTARIO GARANTIZADO", description: "Disponibilidad constante." },
    { icon: Crown, title: "PRECIOS COMPETITIVOS", description: "Mejores márgenes para tu negocio." },
    { icon: Truck, title: "LOGÍSTICA EFICIENTE", description: "Despacho prioritario." },
    { icon: ShieldCheck, title: "COMUNIDAD VIP", description: "Beneficios y soporte personalizado." },
];

function FeatureStrip() {
    return (
        <section className="bg-[#0A0A0C] px-5 sm:px-6 py-5">
            <div className="max-w-[900px] mx-auto">
                <div className="border border-[#5B108B]/50 bg-[#0D0D10] rounded-sm overflow-hidden">
                    <div className="grid grid-cols-2">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`flex items-center gap-3 px-4 sm:px-6 py-4 ${index % 2 === 0 ? "border-r border-white/[0.08]" : ""} ${index >= 2 ? "border-t border-white/[0.08]" : ""}`}
                            >
                                <feature.icon size={21} strokeWidth={1.7} className="shrink-0 text-[#C9A227]" />
                                <div className="min-w-0">
                                    <p className="text-[9px] sm:text-[11px] font-bold tracking-[0.03em] text-white">
                                        {feature.title}
                                    </p>
                                    <p className="mt-0.5 text-[8px] sm:text-[10px] leading-3 text-[#8F8F98]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureStrip;
