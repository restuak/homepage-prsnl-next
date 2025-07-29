"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollUp() {
  const [tombolScrollUp, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 50) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    tombolScrollUp && (
      <button
        onClick={ScrollUp}
        className="fixed bottom-6 right-0 z-50 p-3 w-full flex justify-center animate-bounce text-4xl text-bold text-zinc-400 transition"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp />
      </button>
    )
  );
}
