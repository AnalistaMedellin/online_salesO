// src/components/ChannelFeatures.jsx
import { MessageSquare, Laptop, Truck, Shuffle } from "lucide-react";

const features = [
{
    icon: MessageSquare,
    title: "Asesoría técnica especializada en vivo",
    description: "Con el equipo interno de Autovenz — no un bot genérico.",
},
{
    icon: Laptop,
    title: "Catálogo digital estandarizado",
    description: "Consulta inventario, disponibilidad y referencias al instante.",
},
{
    icon: Truck,
    title: "Logística acelerada",
    description: "Tiempos de entrega optimizados.",
},
{
    icon: Shuffle,
    title: "Venta cruzada inteligente",
    description: "Combina distintas líneas de producto en un mismo pedido para maximizar tu margen por factura.",
},
];

function ChannelFeatures() {
  return (
    <section id="nuestro-canal" className="bg-[#121214] px-5 sm:px-6 py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1100px] mx-auto">

        {/* Encabezado */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#C9A227]">
              CANAL DIGITAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.02em] leading-[0.95] text-white">
            NUESTRO CANAL DIGITAL <span className="text-[#C9A227]">INCLUYE</span>
          </h2>
        </div>

        {/* Grid de características 2x2 */}
        <div className="grid grid-cols-2 border border-white/[0.08] bg-[#0D0D10]">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`group relative p-3 sm:p-6 transition-colors duration-300 hover:bg-[#16161A] ${index % 2 === 0 ? "border-r border-white/[0.08]" : ""} ${index >= 2 ? "border-t border-white/[0.08]" : ""}`}
            >
              {/* Línea de acento */}
              <div className="absolute top-0 left-0 w-6 sm:w-10 h-[2px] bg-[#5B108B] transition-all duration-300 group-hover:w-16 group-hover:bg-[#C9A227]" />

              {/* Icono */}
              <feature.icon strokeWidth={1.7} size={16} className="text-[#C9A227] sm:w-5 sm:h-5" />

              {/* Título */}
              <h3 className="mt-2 sm:mt-3 text-[11px] sm:text-sm font-bold uppercase tracking-[0.02em] leading-tight text-white">
                {feature.title}
              </h3>

              {/* Descripción */}
              <p className="mt-1 sm:mt-1.5 text-[9.5px] sm:text-xs leading-[13px] sm:leading-5 text-[#8F8F98]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ChannelFeatures;
