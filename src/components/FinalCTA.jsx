import { MessageCircle } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

function FinalCTA() {
  const { openModal } = useContactModal();

  return (
    <section className="bg-gradient-to-r from-[#4C1D95] to-[#6D28D9] px-6 py-16 text-center">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase">
          MÁS RENTABILIDAD. MÁS INVENTARIO. <span className="text-[#F3C969]">MÁS AUTOVENZ.</span>
        </h2>
        <p className="mt-4 text-white/80">
          Habla con un asesor corporativo y cotiza hoy.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-white text-[#6D28D9] font-bold px-6 py-4 rounded-full hover:bg-[#F3C969]"
          >
            <MessageCircle size={20} />
            COTIZAR POR WHATSAPP Y ACTIVAR MI 30% DE DESCUENTO
          </button>

          <a
            href="#"
            className="flex items-center gap-2 border border-[#F3C969] text-[#F3C969] font-bold px-6 py-4 rounded-full hover:bg-[#F3C969] hover:text-black"
          >
            HABLAR CON UN ASESOR CORPORATIVO
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
