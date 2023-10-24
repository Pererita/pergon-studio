"use client";

import { useEffect } from "react";
import { Circle } from "react-preloaders";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Circle background="#fff" color="#00348e" />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
