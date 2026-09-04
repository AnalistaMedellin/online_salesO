import { useState } from "react";
import { X } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../config";

const initialForm = { name: "", business: "", city: "", phone: "" };

function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [form, setForm] = useState(initialForm);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `${WHATSAPP_MESSAGE}

Nombre: ${form.name}
Negocio: ${form.business}
Ciudad: ${form.city}
Teléfono: ${form.phone}`;

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    setForm(initialForm);
    closeModal();
  };

  const inputClass =
    "h-[45px] bg-[#0A0A0C] border border-[#2E2E33] rounded-sm px-4 text-sm text-white placeholder:text-[#8F8F98] focus:outline-none focus:border-[#5B108B] transition-colors duration-200";

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-5 sm:px-6 py-8">
      <div className="w-full max-w-md max-h-full overflow-y-auto bg-[#121214] border border-white/[0.08] rounded-sm p-6 sm:p-7 relative shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        {/* Acento dorado */}
        <span className="absolute top-0 left-0 w-10 h-[2px] bg-[#C9A227]" />

        <button
          onClick={closeModal}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#A0A0A8] hover:text-white transition-colors"
          aria-label="Cerrar formulario"
        >
          <X size={20} strokeWidth={1.8} />
        </button>

        <h3 className="pr-8 text-xl sm:text-2xl font-black uppercase tracking-[-0.01em]">
          <span className="text-white">Activa tu </span>
          <span className="text-[#C9A227]">descuento</span>
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-5 text-[#A0A0A8]">
          Cuéntanos un poco de tu negocio y te llevamos directo a WhatsApp con tu asesor.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            required
            className={inputClass}
          />
          <input
            type="text"
            name="business"
            value={form.business}
            onChange={handleChange}
            placeholder="Nombre del almacén o negocio"
            required
            className={inputClass}
          />
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Ciudad"
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            required
            className={inputClass}
          />

          <button
            type="submit"
            className="mt-2 h-[48px] bg-[#5B108B] text-white font-bold text-sm rounded-full transition-colors duration-200 hover:bg-[#7113AA]"
          >
            CONTINUAR A WHATSAPP
          </button>

          <p className="text-[11px] text-center text-[#8F8F98]">
            Tu información será utilizada únicamente para gestionar tu solicitud.
          </p>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
