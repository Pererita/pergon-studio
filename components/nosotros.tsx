import Card from "@/components/ui/card";
import BackgroundSvg from "@/components/ui/background-svg";

export default function Nosotros() {
  return (
    <section className="relative">
      <BackgroundSvg />
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

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none" data-aos="zoom-y-out">
            <Card
              title="Plan Básico"
              description="Perfecto para algo sencillo pero útil"
              price="200"
            />
            <Card
              title="Intermedio"
              description="Perfecto para una web sencilla pero útil"
              price="300"
            />
            <Card
              title="Completo"
              description="Perfecto para una web sencilla pero útil"
              price="500"
            />
            <Card
              title="Personalizado"
              description="Perfecto para una web sencilla pero útil"
              price="XXX"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
