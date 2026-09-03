import { Play, X } from "lucide-react";
import { useState } from "react";
import companyVideo from "../assets/Company_video.mp4";
import companyImage from "../assets/Company_image.jpeg";

function CompanyVideo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-[#0A0A0C] px-5 sm:px-6 pt-2 pb-10 sm:py-14 lg:py-16">
            <div className="max-w-[900px] mx-auto text-left">
                <div className="flex items-center justify-start gap-3 mb-4">
                    <span className="w-10 h-[2px] bg-[#C9A227]" />
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#C9A227] uppercase">
                        CONOCE AUTOVENZ
                    </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.02em] leading-[0.95] text-white mb-10">
                    CONOCE EL EQUIPO DETRÁS DE TU <span className="text-[#C9A227]">NEGOCIO</span>
                </h2>

                <div className="relative rounded-xl overflow-hidden aspect-video bg-[#121214]">
                    <img
                        src={companyImage}
                        alt="Equipo Autovenz"
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white"
                    >
                        <Play size={24} className="text-black ml-1" fill="black" />
                    </button>
                    <span className="absolute bottom-4 left-4 bg-black/70 text-xs font-bold px-3 py-1 rounded-full">
                        INSTITUCIONAL
                    </span>
                </div>

                <p className="mt-8 text-base sm:text-lg text-white/90">
                    Personas, experiencia y respaldo para atender tu negocio.
                </p>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-6 right-6 text-white"
                    >
                        <X size={32} />
                    </button>

                    <div className="w-full max-w-3xl max-h-[85vh] bg-[#1A1A1D] rounded-xl overflow-hidden flex items-center justify-center">
                        <video
                            src={companyVideo}
                            controls
                            autoPlay
                            className="w-full h-full max-h-[85vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default CompanyVideo;
