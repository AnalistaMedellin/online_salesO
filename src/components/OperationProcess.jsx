import { useState } from "react";
import { Play, Package, Wrench, Truck, CheckCircle, ArrowRight, X } from "lucide-react";

const steps = [
  { icon: Package, label: "INVENTARIO" },
  { icon: Wrench, label: "PREPARACIÓN" },
  { icon: Truck, label: "DESPACHO" },
  { icon: CheckCircle, label: "ENTREGA" },
];

function OperationProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#0A0A0C] px-6 py-16">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-sm font-bold text-[#F3C969] text-center">OPERACIÓN RELOJ SUIZO</p>
        <h2 className="mt-2 text-3xl font-black uppercase text-center">
          UNA OPERACIÓN DISEÑADA PARA RESPONDER A TIEMPO
        </h2>

        <div className="mt-10 relative rounded-xl overflow-hidden aspect-video bg-[#1A1A1D] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80"
            alt="Operación Autovenz"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white"
          >
            <Play size={24} className="text-black ml-1" fill="black" />
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <step.icon size={24} className="text-[#8B5CF6]" />
                <span className="text-sm font-bold">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="text-[#2E2E33]" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-3xl aspect-video bg-[#1A1A1D] rounded-xl flex items-center justify-center">
            {/* TODO: reemplazar por <video> o <iframe> cuando exista el video real */}
            <p className="text-[#A0A0A8]">Video próximamente</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default OperationProcess;
