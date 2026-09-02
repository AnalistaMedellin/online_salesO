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

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#1A1A1D] border border-[#2E2E33] rounded-xl p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-[#A0A0A8] hover:text-white"
          aria-label="Cerrar formulario"
        >
          <X size={24} />
        </button>

        <h3 className="text-xl font-black uppercase">
          Activa tu <span className="text-[#8B5CF6]">descuento</span>
        </h3>
        <p className="mt-2 text-sm text-[#A0A0A8]">
          Cuéntanos un poco de tu negocio y te llevamos directo a WhatsApp con tu asesor.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            required
            className="bg-[#0A0A0C] border border-[#2E2E33] rounded-lg px-4 py-3 text-sm placeholder:text-[#A0A0A8] focus:outline-none focus:border-[#8B5CF6]"
          />
          <input
            type="text"
            name="business"
            value={form.business}
            onChange={handleChange}
            placeholder="Nombre del taller o almacén"
            required
            className="bg-[#0A0A0C] border border-[#2E2E33] rounded-lg px-4 py-3 text-sm placeholder:text-[#A0A0A8] focus:outline-none focus:border-[#8B5CF6]"
          />
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Ciudad"
            required
            className="bg-[#0A0A0C] border border-[#2E2E33] rounded-lg px-4 py-3 text-sm placeholder:text-[#A0A0A8] focus:outline-none focus:border-[#8B5CF6]"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            required
            className="bg-[#0A0A0C] border border-[#2E2E33] rounded-lg px-4 py-3 text-sm placeholder:text-[#A0A0A8] focus:outline-none focus:border-[#8B5CF6]"
          />

          <button
            type="submit"
            className="mt-2 bg-[#6D28D9] text-white font-bold px-6 py-3 rounded-full hover:bg-[#8B5CF6]"
          >
            CONTINUAR A WHATSAPP
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
