import InputEmail from "@/components/input-email";
import BackgroundSvg from '@/components/ui/background-svg';

export default function Contactanos() {
  return (
    <section id="contactanos" className="relative">
      {/* Illustration behind content */}
      <BackgroundSvg 
      height=""
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2">Contáctanos</h2>
            <div className="w-24 h-[2px] bg-gradient-to-r m-auto from-pergonBlueDark to-pergonBlue mb-4"></div>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Para contratar nuestros servicios y aclarar dudas sobre los
              mismos, puedes comunicarte con nosotros a través de nuestras redes
              sociales o escribiendo tu email para enviarte ciertas
              explicaciones
            </p>
          </div>
        </div>
      </div>

      <InputEmail />
    </section>
  );
}
