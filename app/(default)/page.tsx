export const metadata = {
  title: "Pergon Studio",
  description:
    "Diseño y dearrollo de páginas y aplicaciones web totalmente personalizadas, adaptadas a las necesidades y requerimientos específicos de cada cliente",
};

import Hero from "@/components/hero";
import Nosotros from "@/components/nosotros";
import Servicios from "@/components/servicios";
import Contactanos from "@/components/contactanos";
import Planes from "@/components/planes";

export default function Home() {
  return (
    <>
      <Hero />
      <Nosotros />
      <Servicios />
      <Planes />
      <Contactanos />
    </>
  );
}
