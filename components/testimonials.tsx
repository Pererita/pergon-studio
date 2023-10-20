import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";

export default function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="40%"
              y1="0%"
              x2="40%"
              y2="40%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="40%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12">
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
    </section>
  );
}
