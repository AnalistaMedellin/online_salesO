import { Play, X } from "lucide-react";
import { useState } from "react";

function VipVideo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="bg-[#121214] px-6 py-16">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-3xl font-black uppercase text-center">
                    CONOCE LA <span className="text-[#8B5BF6]">COMUNIDAD VIP</span>
                </h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative rounded-xl overflow-hidden aspect-video">
                        <img
                            src= "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
                            alt="COMUNIDAD VIP AUTOVENZ"
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white">
                            <Play size={24} className="text-black ml-1" fill="black" />
                        </button>
                        <span className="absolute bottom-4 left-4 bg-black/70 text-xs font-bold px-3 py-1 rounded-full">MANIFIESTO VIP (25 SEGUNDOS)</span>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">
                            Más que descuentos. Una comunidad diseñada para hacer crecer tu negocio.
                        </p>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-6 right-6 text-white">
                        <X size={32} />
                    </button>
                
            <div className="w-full max-w-3xl aspect-video bg-[#1A1A1D] rounded-xl flex items-center justify-center">
            {/* TODO: reemplazar por <video> o <iframe> cuando exista el video real */}
            <p className="text-[#A0A0A8]">Video próximamente</p>

            </div>
                </div>
            )}
        </section>
    );
}
export default VipVideo;