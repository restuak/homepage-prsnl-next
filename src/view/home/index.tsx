"use client";
import Welcome from "@/components/welcome";
import Navbar from "@/components/navbar";
// import About from "@/components/about";
// import Works from "@/components/works";
// import Contact from "@/components/contact";
import { Albert_Sans } from "next/font/google";

const AlbertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});


export default function HomeView() {
  return (
    <main
      className={`${AlbertSans.className} bg-[url(/bg.svg)] bg-cover bg-no-repeat bg-center bg-[#09090b]`}
      id="smooth-wrapper"
    >
      <div id="smooth-content">
        <Navbar />

        <Welcome />

        {/* <About /> */}

        {/* <Works /> */}

        {/* <Contact /> */}
      </div>
    </main>
  );
}
