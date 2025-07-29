
import { motion } from "motion/react";
export default function Quotes() {

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center ">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mb-8 max-w-6xl px-8 font-serif italic font-bold text-zinc-400 text-3xl min-md:text-4xl"
          >
            &ldquo;I'm the dog that ate your birthday cake/ It's A Wonderful
            Life&rdquo;
          </motion.p>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="text-left">
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-lg text-zinc-500 font-light min-md:text-2xl "
              >
                —Sparklehorse
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
