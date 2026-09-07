import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, GOOGLE_SHEETS_WEBHOOK_URL } from "../config";

const initialForm = { name: "", business: "", city: "", phone: "", purchaseVolume: "", productQuantity: "" };

const purchaseVolumeOptions = [
  "Menos de $800.000",
  "$800.000 - $1.200.000",
  "$1.200.000 - $3.000.000",
  "Más de $3.000.000",
];

const productQuantityOptions = [
  "1 - 10 unidades",
  "11 - 50 unidades",
  "51 - 100 unidades",
  "Más de 100 unidades",
];

function getLeadQualification(purchaseVolume, productQuantity) {
  const volumeScore = purchaseVolumeOptions.indexOf(purchaseVolume);
  const quantityScore = productQuantityOptions.indexOf(productQuantity);
  const totalScore = volumeScore + quantityScore;

  if (totalScore >= 5) return "Alto";
  if (totalScore >= 2) return "Medio";
  return "Bajo";
}

function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const qualification = getLeadQualification(form.purchaseVolume, form.productQuantity);

    const message = `${WHATSAPP_MESSAGE}

Nombre: ${form.name}
Negocio: ${form.business}
Ciudad: ${form.city}
Teléfono: ${form.phone}
Compra mensual aproximada: ${form.purchaseVolume}
Cantidad de productos por pedido: ${form.productQuantity}
Calificación del lead: ${qualification}`;

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    sessionStorage.setItem("pendingWhatsappLink", whatsappLink);

    fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...form, qualification }),
    }).catch(() => {});

    setForm(initialForm);
    closeModal();
    navigate("/gracias");
  };

  const inputClass =
    "h-[45px] bg-[#0A0A0C] border border-[#2E2E33] rounded-sm px-4 text-sm text-white placeholder:text-[#8F8F98] focus:outline-none focus:border-[#5B108B] transition-colors duration-200";

  const selectClass = `${inputClass} appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:12px] bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238F8F98%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')]`;

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
          <select
            name="purchaseVolume"
            value={form.purchaseVolume}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>¿Cuánto compras en repuestos al mes?</option>
            {purchaseVolumeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <select
            name="productQuantity"
            value={form.productQuantity}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>¿Cuántos productos manejas por pedido?</option>
            {productQuantityOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

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
