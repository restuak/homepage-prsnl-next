"use client";
import Welcome from "@/components/welcome";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Works from "@/components/works";
import Contact from "@/components/contact";
import { Albert_Sans } from "next/font/google";
import Quotes from "@/components/quotes";

const AlbertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export async function getStaticProps() {
  return {
    props: {
      name: "Restu Aka",
    },
  };
}
export default function HomeView() {
  return (
    <main
      className={`${AlbertSans.className} bg-[url(/bg.svg)] bg-cover bg-no-repeat bg-center bg-[#09090b]`}
    >
      <div className="" id="home">
        <Navbar />
        <Welcome />
        <About />
        <Works />
        <Quotes />
        <Contact />
      </div>
    </main>
  );
}
