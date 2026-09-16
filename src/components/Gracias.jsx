import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

function Gracias() {
  const navigate = useNavigate();
  const [whatsappLink, setWhatsappLink] = useState(null);

  useEffect(() => {
    const link = sessionStorage.getItem("pendingWhatsappLink");

    if (!link) {
      navigate("/", { replace: true });
      return;
    }

    setWhatsappLink(link);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtualPageview",
      pagePath: "/gracias",
      pageTitle: "Gracias - Lead generado",
    });
  }, [navigate]);

  const handleWhatsappClick = () => {
    sessionStorage.removeItem("pendingWhatsappLink");
  };

  return (
    <section className="min-h-screen bg-[#0A0A0C] flex items-center justify-center px-6 text-center">
      <div>
        <div className="mx-auto flex items-center justify-center w-14 h-14 border border-[#C9A227]/40 rounded-sm">
          <CheckCircle size={28} strokeWidth={1.7} className="text-[#C9A227]" />
        </div>

        <h1 className="mt-6 text-2xl sm:text-3xl font-black uppercase text-white">
          ¡Gracias por tu <span className="text-[#C9A227]">solicitud</span>!
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#A0A0A8]">
          Continúa la conversación con tu asesor corporativo en WhatsApp.
        </p>

        {whatsappLink && (
          <a
            href={whatsappLink}
            onClick={handleWhatsappClick}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#25D366] text-[#0A0A0C] font-bold uppercase text-sm px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Ir a WhatsApp
          </a>
        )}
      </div>
    </section>
  );
}

export default Gracias;
