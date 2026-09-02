// src/components/ChannelFeatures.jsx
import { MessageSquare, Laptop, Truck, Shuffle, Disc, CircleDot, Package, Gem, ArrowDown } from "lucide-react";

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
    description: "Combina línea nueva con lotes VIP para maximizar tu margen por factura.",
},
];

const orderItems = [
  { icon: CircleDot, label: "Suspensión" },
  { icon: Disc, label: "Frenos" },
  { icon: Package, label: "Línea nueva" },
  { icon: Gem, label: "Lotes VIP" },
];

function ChannelFeatures() {
  return (
    <section id="nuestro-canal" className="bg-[#121214] px-6 py-16">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl font-black uppercase text-center">
          NUESTRO CANAL DIGITAL <span className="text-[#8B5CF6]">INCLUYE</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-[#1A1A1D] border border-[#2E2E33] rounded-xl p-6">
                <feature.icon size={28} className="text-[#8B5CF6]" />
                <h3 className="mt-3 font-bold uppercase text-sm">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#A0A0A8]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1A1A1D] border border-[#2E2E33] rounded-xl p-6 text-center">
            <p className="text-sm text-[#A0A0A8]">Pedido del cliente</p>

            <div className="mt-4 flex items-center justify-center flex-wrap gap-2">
              {orderItems.map((item, index) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <item.icon size={22} className="text-[#8B5CF6]" />
                    <span className="text-xs text-[#A0A0A8]">{item.label}</span>
                  </div>
                  {index < orderItems.length - 1 && (
                    <span className="text-[#F3C969] font-bold">+</span>
                  )}
                </div>
              ))}
            </div>

            <ArrowDown className="mx-auto mt-4 text-[#F3C969]" size={24} />

            <p className="mt-4 font-bold text-[#F3C969]">Mayor margen por factura</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChannelFeatures;