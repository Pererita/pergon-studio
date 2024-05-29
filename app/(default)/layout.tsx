"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajusta el tiempo según sea necesario
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="preloader" style={preloaderStyle}>
          {/* Aquí puedes poner cualquier animación CSS o SVG que desees para tu preloader */}
          SOY LA POLLA...
        </div>
      ) : (
        <>
        <main className="grow">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}

const preloaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#fff",
  color: "#00348e",
  fontSize: "24px",
};
