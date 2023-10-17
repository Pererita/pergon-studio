import Card from "@/components/ui/card";

export default function Nosotros() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h2 mb-4">Planes</h2>
          <p className="text-xl text-gray-600" data-aos="zoom-y-out">
            Contamos con cuatro planes que se adaptan segun tus necesidades y
            requerimientos, lee atentamente y comunicate con nosotros si tienes
            dudas.
          </p>
        </div>

        <div className="flex flex-row items-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </div>
    </div>
  );
}
