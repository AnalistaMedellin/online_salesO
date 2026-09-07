import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

function Gracias() {
  const navigate = useNavigate();

  useEffect(() => {
    const whatsappLink = sessionStorage.getItem("pendingWhatsappLink");

    if (!whatsappLink) {
      navigate("/", { replace: true });
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtualPageview",
      pagePath: "/gracias",
      pageTitle: "Gracias - Lead generado",
    });

    const timer = setTimeout(() => {
      sessionStorage.removeItem("pendingWhatsappLink");
      window.location.href = whatsappLink;
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

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
          Te estamos redirigiendo a WhatsApp con tu asesor corporativo...
        </p>

        <div className="mt-6 w-6 h-6 mx-auto border-2 border-[#5B108B] border-t-transparent rounded-full animate-spin" />
      </div>
    </section>
  );
}

export default Gracias;
