import { useState } from "react";
import { Play, Package, Wrench, Truck, CheckCircle, X } from "lucide-react";
import operationVideo from "../assets/operation_video.mp4";
import operation_image from "../assets/operation_image.png";

const steps = [
  { icon: Package, label: "INVENTARIO" },
  { icon: Wrench, label: "PREPARACIÓN" },
  { icon: Truck, label: "DESPACHO" },
  { icon: CheckCircle, label: "ENTREGA" },
];

function OperationProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#0A0A0C] px-5 sm:px-6 py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1100px] mx-auto">

        {/* Encabezado */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#C9A227]">
              ASÍ OPERAMOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.02em] leading-[0.95] text-white">
            DE LA BODEGA A <span className="text-[#C9A227]">TU NEGOCIO</span>
          </h2>
        </div>

        {/* Video */}
        <div className="relative rounded-sm overflow-hidden aspect-video bg-[#0D0D10] border border-white/[0.08] flex items-center justify-center">
          <img
            src={operation_image}
            alt="Operación Autovenz"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 m-auto w-12 h-12 sm:w-14 sm:h-14 rounded-sm bg-[#0A0A0C]/70 border border-[#C9A227]/40 flex items-center justify-center backdrop-blur-sm transition-colors duration-300 hover:border-[#C9A227] hover:bg-[#0A0A0C]/90"
          >
            <Play size={18} className="text-[#C9A227] ml-0.5" fill="currentColor" />
          </button>
        </div>

        {/* Pasos de operación */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-10 sm:gap-x-6">
          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center text-center gap-3">
              <div className="relative flex items-center justify-center">
                <span className="absolute -bottom-1 w-5 h-[2px] bg-[#5B108B]" />
                <step.icon size={26} strokeWidth={1.5} className="text-[#C9A227]" />
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.06em] text-white">
                {step.label}
              </span>
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

          <div className="w-full max-w-3xl max-h-[85vh] bg-[#0D0D10] border border-white/[0.08] rounded-sm overflow-hidden flex items-center justify-center">
            <video
              src={operationVideo}
              controls
              autoPlay
              className="w-full h-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default OperationProcess;
