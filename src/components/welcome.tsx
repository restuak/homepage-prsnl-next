"use client";
import { RiArrowDownWideFill } from "react-icons/ri";
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// const Welcome = () => {
//   const container = useRef();

//   useGSAP(
//     () => {
//       gsap.registerPlugin(ScrollTrigger);
//       ScrollTrigger.create({
//         trigger: ".box-c",
//         pin: true,
//         start: 103,
//         end: 30,
//         markers: true,
//       });
//     },
//     {
//       scope: container,
//     }
//   );
import { Albert_Sans } from "next/font/google";
const ASans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],

});
export default function Welcome () {
  return (
    <>
      <main className=" h-screen max-w-screen-xl flex flex-col justify-center px-6 md:px-10 mx-auto">
        <div>
          <div className="font-bold " data-speed="1.5">
            <h1>
              <span
                className={`${ASans.className}  font-semibold tracking-tight hover:text-zinc-600 hover:border-b first:mt-0 text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl animate-fade animate-once animate-delay-120 text-zinc-100`}
              >
                I&apos;M RESTU AKA
              </span>
              <span className="text-2xl pt-5 sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600 ">
                <p
                  className="pt-13 animate-fade-right animate-once animate-delay-1000 animate-ease-in-out"
                  data-speed="1.5"
                >
                  a{" "}
                  <span className="text-zinc-400 hover:text-zinc-600">
                    geoinformatician
                  </span>
                </p>
              </span>
              <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600 ">
                <p
                  className="animate-fade-right animate-once animate-delay-500 animate-ease-in-out"
                  data-speed="1.5"
                >
                  with passion in
                </p>
              </span>
              <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600  ">
                <p
                  className="animate-fade-right animate-once animate-delay-1000 animate-ease-in-out"
                  data-speed="1.5"
                >
                  <span className="text-zinc-400 hover:text-zinc-600">
                    fullstack developer
                  </span>
                </p>
              </span>
              <span>
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600 ">
                  <p className="animate-fade-right animate-once animate-delay-500 animate-ease-in-out">
                    for build
                  </p>
                </span>
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600  ">
                  <p className="animate-fade-right animate-once animate-delay-1000 animate-ease-in-out ">
                    web-based{" "}
                    <span className="text-zinc-400 hover:text-zinc-600">
                      gis
                    </span>
                  </p>
                </span>
              </span>
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-10 overflow-y-hidden">
          <div className="animate-fade-up animate-once animate-delay-2000 animate-ease-out z-20 flex flex-col items-center cursor-pointer">
            <span className="animate-bounce text-4xl text-bold text-zinc-600">
              <RiArrowDownWideFill />
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

