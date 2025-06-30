import Image from "next/image";
export default function AboutDesc() {
  return (
    <section className="bg-[#000000]">
      <div className="h-100% max-w-screen-xl pt-1 mx-auto">
        <div className="flex flex-col items-center ">
          <p className="p-5 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-600">
            LITTLE BIT OF ME
          </p>

          <p className="m-6 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-300">
            I’m a Geodetic & Geomatics Engineer (Geoinformatician). Lifelong
            Learner.
          </p>
          <p className="m-6 mt-0 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-300">
            Now, I focus on my learning in Full-Stack Website Developer for
            support my skill in Geographic Information System (GIS) Developer to
            build Web-based Geographic Information System (GIS). Cheers. 🌻
          </p>
          <p className="m-6 mt-0 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-300">
            I have an interest in hobbies such as writing essays on music and
            social topics.
          </p>
          <p className="m-6 mt-0 text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-300">
            Simply, I am a Geoinformatician with a passion for Web-based GIS and
            Full-Stack Developer and have hobbies in writing essays.
          </p>
        </div>
      </div>
    </section>
  );
}