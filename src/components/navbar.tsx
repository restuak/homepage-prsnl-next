"use client";
import { useState } from "react";
import Link from "next/link";
// import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="animate-fade-down animate-once animate-delay-2000 animate-ease-out flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 md:py-6 fixed w-full backdrop-blur-md z-50">
      <div className="cursor-pointer">
        <span className="text-xl md:text-2xl font-semibold tracking-wide">
          <div className="">
            <span className="text-zinc-600 hover:text-zinc-300 transition-all duration-200 ease-in-out cursor-pointer">
              <Link href="/">RESTUAKA</Link>
            </span>
          </div>
        </span>
      </div>

      <div className=" hidden md:flex items-center gap-10 text-lg font-semibold tracking-wide ">
        <span className="text-zinc-600 hover:text-zinc-300 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/about">ABOUT</Link>
        </span>
        <span className="text-zinc-600 hover:text-zinc-300  transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/works">WORKS</Link>
        </span>
        <span className="text-zinc-600 hover:text-zinc-300 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href={"#contact"}>CONTACT</Link>
        </span>
      </div>

      <div className="flex flex-col gap-[6px] md:hidden" onClick={toggleMenu}>
        <span
          className={`block h-[2px] w-6 bg-zinc-600 ${
            isMenuOpen ? "-rotate-45 origin-center translate-y-[8px]" : ""
          } transition-all duration-200 ease-in-out`}
        ></span>
        <span
          className={`block h-[2px] bg-zinc-600 ${
            isMenuOpen ? "w-0" : "w-6"
          } transition-all duration-200`}
        ></span>
        <span
          className={`block h-[2px] w-6 bg-zinc-600 ${
            isMenuOpen ? "rotate-45 origin-center -translate-y-[8px]" : ""
          } transition-all duration-200`}
        ></span>
      </div>

      <div
        className={`flex md:hidden flex-col gap-14 text-center absolute right-[0px] left-[0px] top-[-750px] justify-center align-text-center bg-zinc-200 pb-[140px] pt-[140px]  text-black  ${
          isMenuOpen ? "-translate-y-[-824px] " : ""
        } transition-all duration-400 ease-in-out`}
      >
        <span className="text-5xl font-bold tracking-wide text-zinc-600 hover:text-zinc-900 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/">HOME</Link>
        </span>
        <span className="text-3xl font-semibold tracking-wide text-zinc-500 hover:text-zinc-900 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/about">ABOUT</Link>
        </span>
        <span className="text-3xl font-semibold tracking-wide text-zinc-500 hover:text-zinc-900 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="/works">WORKS</Link>
        </span>
        <span className="text-3xl font-semibold tracking-wide text-zinc-500 hover:text-zinc-900 transition-all duration-200 ease-in-out cursor-pointer">
          <Link href="#contact">CONTACT</Link>
        </span>
      </div>
    </section>
  );
}

// "use client";
// import { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const NavItems = ({ isNavOpen, setIsNavOpen }) => {
//   const [isMobile, setIsMobile] = useState(false);

//   const handleItemClick = () => {
//     setIsNavOpen(false);
//   };
//   const navVariant = {
//     open: {
//       clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//     closed: {
//       clipPath: "circle(0px at calc(100% - 120px) 35px)",
//       transition: {
//         delay: 0.5,
//         type: "spring",
//         stiffness: 400,
//         damping: 30,
//       },
//     },
//   };
//   useEffect(() => {
//     const updateScreenWidth = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     // Initial check and event listener
//     updateScreenWidth();
//     window.addEventListener("resize", updateScreenWidth);

//     // Clean up the event listener on unmount
//     return () => {
//       window.removeEventListener("resize", updateScreenWidth);
//     };
//   }, []);

//   // Check screen width and adjust clipPath for smaller screens
//   if (isMobile) {
//     (navVariant.open = {
//       clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
//       transition: {
//         type: "tween",
//       },
//     }),
//       (navVariant.closed = {
//         clipPath: "circle(0px at calc(100% - 35px) 35px)",
//         transition: {
//           delay: 0.5,
//           type: "spring",
//           stiffness: 400,
//           damping: 40,
//         },
//       });
//   } else {
//     (navVariant.open = {
//       clipPath: `circle(2444px at calc(100% - 40px) 40px)`,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     }),
//       (navVariant.closed = {
//         clipPath: "circle(0px at calc(100% - 120px) 35px)",
//         transition: {
//           delay: 0.5,
//           type: "spring",
//           stiffness: 400,
//           damping: 40,
//         },
//       });
//   }
//   const itemVariants = {
//     open: (custom) => ({
//       opacity: 1,
//       x: 0,
//       rotate: 0,
//       transition: {
//         delay: custom,
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     }),
//     closed: {
//       opacity: 0,
//       x: -80,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//   };

//   return (
//     <>
//       <motion.div
//         className={`fixed z-[45] w-full h-screen flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden`}
//         variants={navVariant}
//         animate={isNavOpen ? "open" : "closed"}
//         initial={false}
//       >
//         <div className="relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-gray-700 min-w-[100vw] ">
//           <div className="flex flex-col items-center space-y-8 my-auto mx-0 z-50">
//             {/* title */}
//             <motion.h1
//               variants={itemVariants}
//               animate={isNavOpen ? "open" : "closed"}
//               className="text-6xl font-bold text-white "
//             >
//               Menu
//             </motion.h1>
//             <Link href="/#home">
//               <div
//                 className="text-2xl font-bold text-white"
//                 onClick={handleItemClick}
//               >
//                 <motion.h2
//                   className="text-white"
//                   variants={itemVariants}
//                   animate={isNavOpen ? "open" : "closed"}
//                   custom={0.1}
//                 >
//                   Home
//                 </motion.h2>
//               </div>
//             </Link>
//             <Link href="/about">
//               <div
//                 onClick={handleItemClick}
//                 className="text-2xl font-bold text-white"
//               >
//                 <motion.h2
//                   className="text-white"
//                   variants={itemVariants}
//                   animate={isNavOpen ? "open" : "closed"}
//                   custom={0.2}
//                 >
//                   About
//                 </motion.h2>
//               </div>
//             </Link>
//             <Link href="/projects">
//               <div
//                 onClick={handleItemClick}
//                 className="text-2xl font-bold text-white"
//               >
//                 <motion.h2
//                   className="text-white"
//                   variants={itemVariants}
//                   animate={isNavOpen ? "open" : "closed"}
//                   custom={0.3}
//                 >
//                   Projects
//                 </motion.h2>
//               </div>
//             </Link>
//             <Link href="/#contact">
//               <div
//                 onClick={handleItemClick}
//                 className="text-2xl font-bold text-white"
//               >
//                 <motion.h2
//                   className="text-white"
//                   variants={itemVariants}
//                   animate={isNavOpen ? "open" : "closed"}
//                   custom={0.4}
//                 >
//                   Contact
//                 </motion.h2>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// const Navbar = () => {
//   const navRef = useRef(null);
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <>
//       <nav
//         ref={navRef}
//         className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${
//           isNavOpen
//             ? "backdrop-filter backdrop-blur-md bg-gray-700 bg-opacity-50"
//             : "backdrop-filter backdrop-blur-md"
//         } inset-0  bg-opacity-50 flex flex-row justify-between items-center h-16 z-50 `}
//       >
//         <div>
//           <h1
//             className={`text-2xl ml-2 md:ml-0 transition-colors ease duration-500 ${
//               isNavOpen ? "text-white" : ""
//             }`}
//           >
//             Alvalens
//           </h1>
//         </div>
//         <div className="flex flex-row items-center">
//           <button
//             className="burger button flex flex-col justify-center items-center space-y-1.5 "
//             onClick={toggleNav}
//           >
//             <div
//               className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
//                 isNavOpen ? "rotate-45   bg-white translate-y-[2px]" : ""
//               }`}
//             ></div>
//             <div
//               className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
//                 isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
//               }`}
//             ></div>
//           </button>
//         </div>
//       </nav>
//       {/* items */}
//       <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
//     </>
//   );
// };
// export default Navbar;
