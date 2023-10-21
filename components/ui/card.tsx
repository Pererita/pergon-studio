interface CardProps {
  title: string;
  description: string;
  price: string;
  svgColor: string;
  svgColorTwo: string;
  svgColorThree: string;
  spanClass: string;
  spanClassTwo: string;
  spanClassThree: string;
}

export default function Card({ title, description, price, svgColor, svgColorTwo, svgColorThree, spanClass, spanClassTwo, spanClassThree }: CardProps) {
  return (
    <div className="w-full max-w-sm p-4 m-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
      <h5 className="mb-2 text-xl font-semibold text-pergonBlueDark text-center">
        {title}
      </h5>
      <p className="font-normal text-gray-500 text-center mb-2">
        {description}
      </p>
      <div className="flex items-baseline text-pergonBlue justify-center">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex space-x-3 items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 text-pergonBlue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Responsive
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="flex-shrink-0 w-4 h-4 text-pergonBlue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Diseño y desarrollo
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="flex-shrink-0 w-4 h-4 text-pergonBlue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Configuración de Hosting y Dominio
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="flex-shrink-0 w-4 h-4 text-pergonBlue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Selección de plantillas prediseñadas
          </span>
        </li>
        <li className={`flex space-x-3 decoration-gray-500 ${spanClass === "gray" ? '' : 'line-through'}`}>
          <svg
            className={`flex-shrink-0 w-4 h-4 ${svgColor === "blue" ? 'text-pergonBlue' : 'text-gray-400'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Animaciones
          </span>
        </li>
        <li className={`flex space-x-3 decoration-gray-500 ${spanClass === "gray" ? '' : 'line-through'}`}>
          <svg
            className={`flex-shrink-0 w-4 h-4 ${svgColor === "blue" ? 'text-pergonBlue' : 'text-gray-400'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            SEO y posicionamiento web
          </span>
        </li>
        <li className={`flex space-x-3 decoration-gray-500 ${spanClass === "gray" ? '' : 'line-through'}`}>
          <svg
            className={`flex-shrink-0 w-4 h-4 ${svgColor === "blue" ? 'text-pergonBlue' : 'text-gray-400'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Tema claro y oscuro
          </span>
        </li>
        <li className={`flex space-x-3 decoration-gray-500 ${spanClassTwo === "gray" ? '' : 'line-through'}`}>
          <svg
            className={`flex-shrink-0 w-4 h-4 ${svgColorTwo === "blue" ? 'text-pergonBlue' : 'text-gray-400'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Diseño de logos e imágenes
          </span>
        </li>
        <li className={`flex space-x-3 decoration-gray-500 ${spanClassTwo === "gray" ? '' : 'line-through'}`}>
          <svg
            className={`flex-shrink-0 w-4 h-4 ${svgColorTwo === "blue" ? 'text-pergonBlue' : 'text-gray-400'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Diseño de seis post para redes sociales
          </span>
        </li>
        <li className={`flex space-x-3 decoration-gray-500 ${spanClassThree === "gray" ? '' : 'line-through'}`}>
          <svg
            className={`flex-shrink-0 w-4 h-4 ${svgColorThree === "blue" ? 'text-pergonBlue' : 'text-gray-400'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            E-commerce
          </span>
        </li>
        <li className={`flex space-x-3 decoration-gray-500 ${spanClassThree === "gray" ? '' : 'line-through'}`}>
          <svg
            className={`flex-shrink-0 w-4 h-4 ${svgColorThree === "blue" ? 'text-pergonBlue' : 'text-gray-400'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Sistemas de Gestión
          </span>
        </li>
        <li className={`flex space-x-3 decoration-gray-500 ${spanClassThree === "gray" ? '' : 'line-through'}`}>
          <svg
            className={`flex-shrink-0 w-4 h-4 ${svgColorThree === "blue" ? 'text-pergonBlue' : 'text-gray-400'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Intranet
          </span>
        </li>
      </ul>
      <button
        type="button"
        className="text-white bg-pergonBlue hover:bg-pergonBlueDark transition duration-500 animate-float focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Comprar
      </button>
    </div>
  );
}
