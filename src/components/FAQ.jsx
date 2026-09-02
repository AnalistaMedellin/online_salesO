import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "¿Es seguro cotizar y comprar por WhatsApp?", answer: "Totalmente. Nuestro sistema está centralizado mediante un CRM corporativo. Conversas directamente con la gerencia de AutoVenz, garantizando que el historial, la cotización y la factura sean 100% seguros y auditables. " },
  { question: "¿Cuál es el monto mínimo de compra para acceder a los descuentos?", answer: "Para acceder a los descuentos de contado (CASH) y VIP, el ticket mínimo es de $800.000 COP. Para opciones con estudio de crédito, el mínimo es de $1.200.000 COP. Esto nos permite garantizar un flete rápido y eficiente." },
  { question: "¿Qué pasa si me equivoco de referencia al comprar online", answer: "No tienes de qué preocuparte, tu compra está completamente respaldada por un acompañamiento humano y profesional. Sabemos que pedir repuestos requiere exactitud, por lo que nunca estarás solo ni tomarás decisiones a ciegas. Antes de facturar y coordinar el despacho, tu Asesor Corporativo asignado aplicará un filtro de Indagación y Cualificación para entender a fondo la necesidad exacta de tu mostrador. Durante este paso, revisaremos nuestro catálogo digital estandarizado. Hacemos equipo contigo: cruzamos la información y validamos juntos cada referencia para garantizar precisión absoluta antes de que la mercancía salga de nuestras bodegas hacia tu negocio." },
  { question: "¿Cómo accedo a la Comunidad VIP?", answer: "La Comunidad VIP se activa a través de tu Asesor Corporativo asignado, vinculando tu cuenta a lotes estratégicos con condiciones preferenciales: 40% de descuento a 30 días de crédito, o 50% pagando de contado. El acceso se habilita según tu historial de recompra y volumen de negocio con AutoVenz, así que entre más constante seas por el canal digital, más rápido escalas de nivel." },
  { question: "¿Qué medios de pago y crédito manejan?", answer: "Manejamos pago de contado (transferencia, consignación) y opciones de crédito directo con AutoVenz, sujetas a un estudio previo según el monto y la trayectoria comercial de tu taller, almacén o flota. Tu Asesor Corporativo te guía en todo el proceso y te confirma qué modalidad aplica a tu cuenta antes de facturar." },
  { question: "¿Puedo mezclar línea nueva con lotes VIP en un mismo pedido?", answer: "Sí. De hecho es una de las ventajas del canal digital: puedes combinar línea nueva con lotes estratégicos VIP en una misma factura para maximizar tu margen por pedido. Tu Asesor Corporativo te ayuda a armar la mezcla ideal según lo que necesite tu mostrador." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas-frecuentes" className="bg-[#0A0A0C] px-6 py-16">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl font-black uppercase text-center">
          PREGUNTAS <span className="text-[#8B5CF6]">FRECUENTES</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="bg-[#1A1A1D] border border-[#2E2E33] rounded-lg p-5">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <Minus size={20} className="shrink-0" /> : <Plus size={20} className="shrink-0" />}
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm text-[#A0A0A8]">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
