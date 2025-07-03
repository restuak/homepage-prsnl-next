import { motion } from "framer-motion";

motion;
export default function FooterIn() {
  return (
    <main id="contact" className="pb-20 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="flex flex-row justify-center items-center "
      >
        <div className="max-w-md">
          <h4 className="border-t-3 border-zinc-600 mb-0 text-xl md:text-3xl text-zinc-300">
            WANNA SAY SOMETHING?
          </h4>
          <a
            href="/#contact"
            rel="noopener noreferrer"
            aria-label="Get In Touch"
            className="p-3 flex justify-center items-center text-sm md:text-lg font-bold bg-zinc-300 w-full h-full rounded-b-2xl text-zinc-600 hover:text-zinc-200 hover:bg-zinc-600 transition-all ease-in-out duration-300 "
          >
            FREE TO CONNECT, GUYS!
          </a>
        </div>
      </motion.div>
    </main>
  );
}
