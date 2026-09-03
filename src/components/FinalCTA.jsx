import { useContactModal } from "../context/ContactModalContext";

function FinalCTA() {
  const { openModal } = useContactModal();

  return (
    <section className="relative bg-gradient-to-b from-[#3D0C63] to-[#2A0846] px-6 py-10 sm:py-14 lg:py-16 text-center overflow-hidden">
      {/* Línea dorada de transición hacia el Footer */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#C9A227]/40" />

      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white">
          MÁS RENTABILIDAD. MÁS INVENTARIO.<br /> <span className="text-[#C9A227]">MÁS AUTOVENZ.</span>
        </h2>
        <p className="mt-4 text-white/70">
          Habla con un asesor corporativo y cotiza hoy.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-[#5B108B] border border-[#5B108B] text-white font-bold px-6 py-4 rounded-sm transition-colors duration-300 hover:bg-[#6D28D9]"
          >
            COTIZAR POR WHATSAPP Y ACTIVAR MI 30% DE DESCUENTO
          </button>

          <button
            onClick={openModal}
            className="flex items-center gap-2 border border-[#C9A227] text-[#C9A227] font-bold px-6 py-4 rounded-sm transition-colors duration-300 hover:bg-[#C9A227] hover:text-black"
          >
            HABLAR CON UN ASESOR CORPORATIVO
          </button>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
