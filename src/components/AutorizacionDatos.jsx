import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { GOOGLE_SHEETS_AUTORIZACION_WEBHOOK_URL, WHATSAPP_NUMBER } from "../config";

const initialForm = {
  nombre: "",
  documento: "",
  esRepresentanteLegal: false,
  representanteNombre: "",
  representanteDocumento: "",
};

function AutorizacionDatos() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    fetch(GOOGLE_SHEETS_AUTORIZACION_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(form),
    }).catch((error) => {
      console.error("No se pudo registrar la autorización en Sheets:", error);
    });

    setIsSubmitted(true);

    let message = `He aceptado la autorización para consulta y reporte ante operadores de información financiera y crediticia.

Nombre / Razón social: ${form.nombre}
C.C. / NIT: ${form.documento}`;

    if (form.esRepresentanteLegal) {
      message += `
Representante legal: ${form.representanteNombre}
C.C. representante legal: ${form.representanteDocumento}`;
    }

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  };

  const inputClass =
    "h-[45px] bg-[#0A0A0C] border border-[#2E2E33] rounded-sm px-4 text-sm text-white placeholder:text-[#8F8F98] focus:outline-none focus:border-[#5B108B] transition-colors duration-200";

  return (
    <section className="min-h-screen bg-[#0A0A0C] px-5 sm:px-6 py-10 sm:py-14">
      <div className="max-w-[640px] mx-auto">
        <header className="text-center">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-[-0.01em] text-white leading-tight">
            Autorización para Consulta y Reporte ante{" "}
            <span className="text-[#C9A227]">Operadores de Información Financiera y Crediticia</span>
          </h1>
          <p className="mt-3 text-sm text-[#A0A0A8]">
            AUTOVENZ S.A.S. — NIT 901.149.777-3
          </p>
        </header>

        <p className="mt-8 text-sm sm:text-base text-[#A0A0A8] text-center">
          Para continuar con el estudio de su solicitud de crédito, lea y acepte la siguiente autorización.
        </p>

        <div className="mt-6 border border-white/[0.08] rounded-sm p-5 sm:p-6 space-y-4 text-xs sm:text-sm leading-6 text-[#A0A0A8]">
          <p className="text-white font-bold text-center uppercase">
            Autorización para Consulta y Reporte
            <br />
            ante Operadores de Información Financiera y Crediticia
          </p>

          <p>
            Con el propósito de realizar el estudio de crédito y, en su caso, establecer, desarrollar y mantener
            una relación comercial con AUTOVENZ S.A.S., solicitamos la siguiente autorización:
          </p>

          <p className="text-white font-bold">AUTORIZACIÓN</p>

          <p>
            El abajo firmante, actuando en nombre propio o en calidad de representante legal de la persona
            jurídica identificada en esta autorización, manifiesta que la información suministrada a AUTOVENZ
            S.A.S. es veraz, completa y actualizada y, de manera libre, previa, expresa e informada, autoriza a
            AUTOVENZ S.A.S., NIT 901.149.777-3, para:
          </p>

          <p>
            <span className="text-white font-bold">1. CONSULTA DE INFORMACIÓN</span>
            <br />
            Consultar ante DataCrédito Experian y/o cualquier otro operador de información financiera, crediticia,
            comercial o de servicios legalmente autorizado, la información relacionada con el comportamiento
            financiero, crediticio y comercial del titular, exclusivamente para efectos del análisis y
            administración del riesgo crediticio derivado de la relación comercial con AUTOVENZ S.A.S.
          </p>

          <p>
            <span className="text-white font-bold">2. REPORTE DE INFORMACIÓN</span>
            <br />
            Reportar, actualizar, rectificar y, cuando legalmente corresponda, retirar ante dichos operadores la
            información relacionada con el nacimiento, modificación, cumplimiento, incumplimiento, mora, estado y
            extinción de las obligaciones comerciales adquiridas con AUTOVENZ S.A.S., incluyendo información
            positiva y negativa, de conformidad con la legislación aplicable.
          </p>

          <p>
            <span className="text-white font-bold">3. ACTUALIZACIÓN Y VERACIDAD</span>
            <br />
            AUTOVENZ S.A.S. procurará que la información suministrada a los operadores sea veraz, completa, exacta,
            actualizada y comprobable, y realizará las actualizaciones o rectificaciones que legalmente
            correspondan.
          </p>

          <p>
            <span className="text-white font-bold">4. REPORTE NEGATIVO</span>
            <br />
            La presente autorización no constituye por sí sola un reporte negativo. Cuando legalmente corresponda
            efectuar un reporte de información negativa, AUTOVENZ S.A.S. realizará previamente las comunicaciones
            y cumplirá los términos, condiciones y procedimientos establecidos en la legislación vigente.
          </p>

          <p>
            <span className="text-white font-bold">5. DERECHOS DEL TITULAR</span>
            <br />
            El titular podrá ejercer los derechos que le reconoce la legislación aplicable en materia de hábeas
            data, incluyendo conocer, consultar, actualizar y rectificar la información relacionada con sus
            obligaciones, así como presentar consultas o reclamos respecto de la información reportada.
          </p>

          <p>
            La presente autorización se entiende otorgada para las finalidades anteriormente descritas y durante
            el tiempo en que exista o pueda derivarse una relación comercial u obligación con AUTOVENZ S.A.S.,
            dentro de los límites establecidos por la legislación colombiana.
          </p>
        </div>

        {isSubmitted ? (
          <div className="mt-8 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-14 h-14 border border-[#C9A227]/40 rounded-sm">
              <CheckCircle size={28} strokeWidth={1.7} className="text-[#C9A227]" />
            </div>
            <h2 className="mt-5 text-lg sm:text-xl font-black uppercase text-white">
              Autorización <span className="text-[#C9A227]">registrada</span>
            </h2>
            <p className="mt-2 text-sm text-[#A0A0A8]">
              Gracias, hemos registrado tu autorización. Te estamos redirigiendo a WhatsApp con tu asesor...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Nombre completo / Razón social"
              required
              className={inputClass}
            />
            <input
              type="text"
              name="documento"
              value={form.documento}
              onChange={handleChange}
              placeholder="C.C. / NIT"
              required
              className={inputClass}
            />

            <label className="flex items-center gap-2 mt-1 text-sm text-[#A0A0A8] cursor-pointer">
              <input
                type="checkbox"
                name="esRepresentanteLegal"
                checked={form.esRepresentanteLegal}
                onChange={handleChange}
                className="w-4 h-4 accent-[#5B108B]"
              />
              Soy representante legal de una empresa
            </label>

            {form.esRepresentanteLegal && (
              <>
                <input
                  type="text"
                  name="representanteNombre"
                  value={form.representanteNombre}
                  onChange={handleChange}
                  placeholder="Nombre del representante legal"
                  required
                  className={inputClass}
                />
                <input
                  type="text"
                  name="representanteDocumento"
                  value={form.representanteDocumento}
                  onChange={handleChange}
                  placeholder="C.C. del representante legal"
                  required
                  className={inputClass}
                />
              </>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 h-[48px] bg-[#5B108B] text-white font-bold text-sm rounded-full transition-colors duration-200 hover:bg-[#7113AA] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              ✅ Acepto la autorización
            </button>
          </form>
        )}

        <p className="mt-10 text-center text-xs text-[#8F8F98]">
          AUTOVENZ S.A.S. — NIT 901.149.777-3
        </p>
      </div>
    </section>
  );
}

export default AutorizacionDatos;
