import Link from "next/link";
import AnimatedBackground from "@/components/ui/animated-background";
import IconSociales from "./ui/icon-sociales";
import CircleSvg from "./ui/circle-svg";

export default function Hero() {
  return (
    // Decoracion de fondo
    <section id="inicio" className="relative">
      {/* Animation background */}
      <AnimatedBackground />

      {/* Illustration behind hero content */}
      <CircleSvg />

      <div className="max-w-6xl h-screen mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="flex items-center h-screen pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Bienvenidos a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pergonBlueDark to-pergonBlue">
                Pergon Studio
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                En Pergon Studio, somos apasionados por transformar ideas en
                experiencias digitales impactantes. Nuestro equipo de expertos
                en diseño y desarrollo trabaja mano a mano contigo para crear
                soluciones web totalmente personalizadas que se ajusten a tus
                necesidades específicas.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <Link
                  href="/#nosotros"
                  className="btn transition duration-500 text-white bg-pergonBlue hover:bg-pergonBlueDark w-full transform animate-float mb-4 sm:w-auto sm:mb-0"
                >
                  ¡Empecemos!
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center mt-6 animate-bounce" 
              data-aos="zoom-y-out"
              data-aos-delay="400">
              <IconSociales />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
