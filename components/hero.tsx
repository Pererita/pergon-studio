import Link from "next/link";
import AnimatedBackground from "@/components/animated-background";
import IconSociales from "./ui/icon-sociales";

export default function Hero() {
  return (
    // Decoracion de fondo
    <section className="relative">
      {/* Animation background */}
      <AnimatedBackground />

      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#d0d0d0" offset="77.402%" />
              <stop stopColor="#999999" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

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
                  href="/"
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
