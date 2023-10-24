import Card from "@/components/ui/card";

export default function Planes() {
  return (
    <section id="planes" className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Planes</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Contamos con cuatro planes que se adaptan segun tus necesidades y
              requerimientos, lee atentamente y comunicate con nosotros si
              tienes dudas.
            </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            <div data-aos="fade-top" 
                data-aos-delay="100">
            <Card
              title="Plan Básico"
              description="Perfecto para algo sencillo pero útil"
              price="200"
              svgColor=""
              svgColorTwo=""
              svgColorThree=""
              spanClass=""
              spanClassTwo=""
              spanClassThree=""
            />
            </div>
            <div data-aos="fade-top" 
                data-aos-delay="200">
            <Card
              title="Intermedio"
              description="Perfecto para una web sencilla pero útil"
              price="300"
              svgColor="blue"
              svgColorTwo=""
              svgColorThree=""
              spanClass="gray"
              spanClassTwo=""
              spanClassThree=""
            />
            </div>
            <div data-aos="fade-top" 
                data-aos-delay="300">
            <Card
              title="Completo"
              description="Perfecto para una web sencilla pero útil"
              price="500"
              svgColor="blue"
              svgColorTwo="blue"
              svgColorThree=""
              spanClass="gray"
              spanClassTwo="gray"
              spanClassThree=""
            />
            </div>
            <div data-aos="fade-top" 
                data-aos-delay="400">
            <Card
              title="Personalizado"
              description="Perfecto para una web sencilla pero útil"
              price="900"
              svgColor="blue"
              svgColorTwo="blue"
              svgColorThree="blue"
              spanClass="gray"
              spanClassTwo="gray"
              spanClassThree="gray"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
