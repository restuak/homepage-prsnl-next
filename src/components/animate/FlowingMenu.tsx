// "use client";
// import React from "react";
// import { gsap } from "gsap";
// import ModalExp from "@/app/works/components/modalexp";
// import { projectDetail } from "@/app/works/components/projectstatic";

// interface MenuItemProps {
//   link: string;
//   text: string;
//   image: string;
//   tech: string[];
// }

// interface FlowingMenuProps {
//   items?: MenuItemProps[];
// }

// const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
//   return (
//     <div className="w-full h-full overflow-hidden">
//       <nav className="flex flex-col h-full m-0 p-0">
//         {items.map((item, idx) => (
//           <MenuItem key={idx} {...item} />
//         ))}
//       </nav>
//     </div>
//   );
// };

// const MenuItem: React.FC<MenuItemProps> = ({ link, text, image, tech }) => {
//   const itemRef = React.useRef<HTMLDivElement>(null);
//   const marqueeRef = React.useRef<HTMLDivElement>(null);
//   const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

//   const animationDefaults = { duration: 0.6, ease: "expo" };

//   const findClosestEdge = (
//     mouseX: number,
//     mouseY: number,
//     width: number,
//     height: number
//   ): "top" | "bottom" => {
//     const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
//     const bottomEdgeDist =
//       Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
//     return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
//   };

//   const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
//     if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
//       return;
//     const rect = itemRef.current.getBoundingClientRect();
//     const edge = findClosestEdge(
//       ev.clientX - rect.left,
//       ev.clientY - rect.top,
//       rect.width,
//       rect.height
//     );

//     const tl = gsap.timeline({ defaults: animationDefaults });
//     tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
//       .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
//       .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
//   };

//   const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
//     if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
//       return;
//     const rect = itemRef.current.getBoundingClientRect();
//     const edge = findClosestEdge(
//       ev.clientX - rect.left,
//       ev.clientY - rect.top,
//       rect.width,
//       rect.height
//     );

//     const tl = gsap.timeline({ defaults: animationDefaults }) as TimelineMax;
//     tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }).to(
//       marqueeInnerRef.current,
//       { y: edge === "top" ? "101%" : "-101%" }
//     );
//   };

//   const repeatedMarqueeContent = React.useMemo(() => {
//         <div>
//           {projectDetail.map((proj) => (
//             <ModalExp key={proj.id} {...proj} />
//           ))}
//         </div>


//     return Array.from({ length: 3 }).map((_, idx) => (
//       <React.Fragment key={idx}>
//         {/* <span className="text-zinc-900 uppercase font-normal text-xl leading-[1.2] p-[1vh_1vw_0]">
//                   {text}
//                   </span> */}
//         <div className="flex gap-5 text-zinc-900 uppercase font-normal text-[13px] md:text-xl leading-[1.2] p-[1vh_1vw_0]">
//           {tech.map((item, index) => (
//             <span key={index}>{item}</span>
//           ))}
//         </div>

//         <div
//           className="w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
//           style={{ backgroundImage: `url(${image})` }}
//         />
//       </React.Fragment>
//     ));



//   }, [text, tech]);

//   return (
//     <div
//       className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
//       ref={itemRef}
//     >
//       <a
//         className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-zinc-400 text-lg md:text-4xl hover:text-zinc-900 focus:text-zinc-200 focus-visible:text-zinc-900"
//         href={link}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {text}
//       </a>
//       <div
//         className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-zinc-200 translate-y-[101%]"
//         ref={marqueeRef}
//       >
//         <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
//           <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
//             {repeatedMarqueeContent}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlowingMenu;

// // Note: this is also needed
// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// //   theme: {
// //     extend: {
// //       translate: {
// //         '101': '101%',
// //       },
// //       keyframes: {
// //         marquee: {
// //           'from': { transform: 'translateX(0%)' },
// //           'to': { transform: 'translateX(-50%)' }
// //         }
// //       },
// //       animation: {
// //         marquee: 'marquee 15s linear infinite'
// //       }
// //     }
// //   },
// //   plugins: [],
// // };
