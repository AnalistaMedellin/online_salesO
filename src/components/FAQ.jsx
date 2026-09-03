import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "¿Es seguro cotizar y comprar por WhatsApp?", answer: "Totalmente. Nuestro sistema está centralizado mediante un CRM corporativo. Conversas directamente con la gerencia de AutoVenz, garantizando que el historial, la cotización y la factura sean 100% seguros y auditables. " },
  { question: "¿Cuál es el monto mínimo de compra para acceder a los descuentos?", answer: "Para acceder a los descuentos de contado (CASH) y VIP, el ticket mínimo es de $800.000 COP. Para opciones con estudio de crédito, el mínimo es de $1.200.000 COP. Esto nos permite garantizar un flete rápido y eficiente." },
  { question: "¿Qué pasa si me equivoco de referencia al comprar online", answer: "No tienes de qué preocuparte, tu compra está completamente respaldada por un acompañamiento humano y profesional. Sabemos que pedir repuestos requiere exactitud, por lo que nunca estarás solo ni tomarás decisiones a ciegas. Antes de facturar y coordinar el despacho, tu Asesor Corporativo asignado aplicará un filtro de Indagación y Cualificación para entender a fondo la necesidad exacta de tu mostrador. Durante este paso, revisaremos nuestro catálogo digital estandarizado. Hacemos equipo contigo: cruzamos la información y validamos juntos cada referencia para garantizar precisión absoluta antes de que la mercancía salga de nuestras bodegas hacia tu negocio." },
  { question: "¿Cómo accedo a la Comunidad VIP?", answer: "La Comunidad VIP se activa a través de tu Asesor Corporativo asignado, vinculando tu cuenta a lotes estratégicos con condiciones preferenciales: 40% de descuento a 30 días de crédito, o 50% pagando de contado. El acceso se habilita según tu historial de recompra y volumen de negocio con AutoVenz, así que entre más constante seas por el canal digital, más rápido escalas de nivel." },
  { question: "¿Qué medios de pago y crédito manejan?", answer: "Manejamos pago de contado (transferencia, consignación) y opciones de crédito directo con AutoVenz, sujetas a un estudio previo según el monto y la trayectoria comercial de tu taller, almacén o flota. Tu Asesor Corporativo te guía en todo el proceso y te confirma qué modalidad aplica a tu cuenta antes de facturar." },
  { question: "¿Puedo mezclar línea nueva con lotes VIP en un mismo pedido?", answer: "Los pedidos de línea nueva y los lotes VIP se manejan por separado. Los lotes VIP son un beneficio exclusivo para la Comunidad VIP, con su propio proceso de asignación. Tu Asesor Corporativo te cuenta cómo acceder a la Comunidad VIP y qué opciones tienes disponibles." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas-frecuentes" className="bg-[#0A0A0C] px-5 sm:px-6 py-10 sm:py-14 lg:py-16">
      <div className="max-w-[760px] mx-auto">

        {/* Encabezado */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#C9A227]">
              INFORMACIÓN Y AYUDA
            </span>
            <span className="w-10 h-[2px] bg-[#C9A227]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] text-white">
            PREGUNTAS <span className="text-[#C9A227]">FRECUENTES</span>
          </h2>
        </div>

        {/* Acordeón */}
        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`bg-[#0D0D10] border rounded-sm transition-colors duration-200 ${
                  isOpen ? "border-[#5B108B]/50" : "border-white/[0.08]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-4 py-3.5 sm:px-5 sm:py-4"
                >
                  <span className="text-sm sm:text-base font-bold text-white">{faq.question}</span>
                  {isOpen ? (
                    <Minus size={16} strokeWidth={2} className="shrink-0 text-[#C9A227]" />
                  ) : (
                    <Plus size={16} strokeWidth={2} className="shrink-0 text-[#C9A227]" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-4">
                    <div className="w-6 h-[2px] bg-[#5B108B] mb-3" />
                    <p className="text-sm leading-6 text-[#A0A0A8]">{faq.answer}</p>
                  </div>
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
