import aprLogo from "../assets/APR_Logo_vector.svg";
import rubberSteelLogo from "../assets/Rubber_Steel_Parts_vector.svg";

function BrandLogos() {
  return (
    <section className="bg-[#121214] px-6 py-16">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-2xl font-black uppercase text-[#A0A0A8]">
          MARCAS QUE RESPALDAN NUESTRA PROPUESTA
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          <img src={aprLogo} alt="APR Suspension Systems" className="h-10" />
          <img src={rubberSteelLogo} alt="Rubber Steel Premium Parts" className="h-10" />
        </div>
      </div>
    </section>
  );
}

export default BrandLogos;
