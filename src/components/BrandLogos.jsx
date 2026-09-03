import aprLogo from "../assets/APR_Logo_vector.svg";
import rubberSteelLogo from "../assets/Rubber_Steel_Parts_vector.svg";

function BrandLogos() {
  return (
    <section className="bg-[#121214] px-5 sm:px-6 py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1100px] mx-auto text-center">

        {/* Encabezado */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-10 h-[2px] bg-[#C9A227]" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#C9A227]">
            RESPALDO DE MARCA
          </span>
          <span className="w-10 h-[2px] bg-[#C9A227]" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[-0.02em] text-white">
          MARCAS QUE NOS RESPALDAN
        </h2>

        {/* Logos */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-20">
          <img src={aprLogo} alt="APR Suspension Systems" className="h-9 sm:h-11 opacity-90" />
          <img src={rubberSteelLogo} alt="Rubber Steel Premium Parts" className="h-9 sm:h-11 opacity-90" />
        </div>
      </div>
    </section>
  );
}

export default BrandLogos;
