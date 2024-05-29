import CuadriculaSvg from "./ui/cuadricula-svg";

export default function Servicios() {
  return (
    <section id="servicios" className="relative">
      <CuadriculaSvg />
      <div className="absolute z-10 left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gradient-to-b from-pergonBlue to-pergonBlueDark transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">Servicios</h2>
            <div className="w-24 h-[2px] bg-gradient-to-r m-auto from-pergonBlueDark to-pergonBlue mb-4"></div>
            <p className="text-xl text-gray-600">
              Ofrecemos distintos servicios para las personas más exigentes,
              desde una simple página web hasta e-commerce, blog o sistemas.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-world-www w-16 h-16 p-1 -mt-1 mb-2 rounded-full"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                  className="fill-current text-pergonBlue"
                />
                <path
                  d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"
                  className="text-white"
                />
                <path
                  d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"
                  className="text-white"
                />
                <path
                  d="M12.5 3a16.989 16.989 0 0 1 1.828 4"
                  className="text-white"
                />
                <path
                  d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"
                  className="text-white"
                />
                <path
                  d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"
                  className="text-white"
                />
                <path
                  d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"
                  className="text-white"
                />
                <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" className="text-white" />
                <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" className="text-white" />
                <path
                  d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"
                  className="text-white"
                />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Sitios Web Personalizados
              </h4>
              <p className="text-gray-600 text-center">
                Creación de sitios web a medida, adaptados a las necesidades y
                objetivos específicos del cliente, utilizando tecnologías
                modernas y mejores prácticas de desarrollo.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-app-window w-16 h-16 p-1 -mt-1 mb-2 rounded-full bg-pergonBlue"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                  className="text-white"
                />
                <path
                  d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                  className="text-white"
                />
                <path d="M6 8h.01" className="text-white" />
                <path d="M9 8h.01" className="text-white" />
              </svg>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Aplicaciones Web
              </h4>
              <p className="text-gray-600 text-center">
                Diseño y desarrollo de aplicaciones web interactivas y
                funcionales que pueden incluir sistemas de gestión, plataformas
                de comercio electrónico, y aplicaciones SaaS (Software as a
                Service).
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-filters w-16 h-16 p-1 -mt-1 mb-2 rounded-full bg-pergonBlue"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                  className="text-white"
                />
                <path
                  d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"
                  className="text-white"
                />
                <path d="M8 11a5 5 0 1 0 3.998 1.997" className="text-white" />
                <path
                  d="M12.002 19.003a5 5 0 1 0 3.998 -8.003"
                  className="text-white"
                />
              </svg>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Diseño UX/UI
              </h4>
              <p className="text-gray-600 text-center">
                Servicios de diseño de experiencia de usuario (UX) e interfaz de
                usuario (UI) para asegurar que los sitios web y aplicaciones
                sean intuitivos, atractivos y fáciles de usar.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-seo w-16 h-16 p-1 -mt-1 mb-2 rounded-full bg-pergonBlue"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                  className="text-white"
                />
                <path
                  d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"
                  className="text-white"
                />
                <path d="M14 16h-4v-8h4" className="text-white" />
                <path d="M11 12h2" className="text-white" />
                <path
                  d="M17 8m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
                  className="text-white"
                />
              </svg>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Optimización SEO
              </h4>
              <p className="text-gray-600 text-center">
                Servicios de optimización para motores de búsqueda (SEO) para
                mejorar la visibilidad y el ranking de los sitios web en los
                resultados de búsqueda, aumentando el tráfico orgánico.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart w-16 h-16 p-1 -mt-1 mb-2 rounded-full bg-pergonBlue"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                  className="text-white"
                />
                <path
                  d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                  className="text-white"
                />
                <path
                  d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                  className="text-white"
                />
                <path d="M17 17h-11v-14h-2" className="text-white" />
                <path d="M6 5l14 1l-1 7h-13" className="text-white" />
              </svg>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Comercio Electrónico
              </h4>
              <p className="text-gray-600 text-center">
                Creación de tiendas en línea y plataformas de comercio
                electrónico, incluyendo la integración de sistemas de pago,
                gestión de inventario y funcionalidades de carrito de compras.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-api w-16 h-16 p-1 -mt-1 mb-2 rounded-full bg-pergonBlue"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                  className="text-white"
                />
                <path d="M4 13h5" className="stroke-current text-white" />
                <path
                  d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"
                  className="stroke-current text-white"
                />
                <path d="M20 8v8" className="stroke-current text-white" />
                <path
                  d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"
                  className="stroke-current text-white"
                />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Integración de APIs
              </h4>
              <p className="text-gray-600 text-center">
                Desarrollo e integración de APIs y servicios de terceros para
                ampliar funcionalidades, como sistemas de pago, servicios de
                envío, redes sociales y otras plataformas externas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
