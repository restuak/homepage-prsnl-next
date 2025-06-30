"use client";

import { Albert_Sans } from "next/font/google";
import "./globals.css";
// import { usePathname } from "next/navigation";
// import gsap from "gsap";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { Inter } from "next/font/google";
// import { useGSAP } from "@gsap/react";

const AlbertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});


// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// }

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout( {
  // const pathname = usePathname();

  // useGSAP(
  //   () => {
  //     ScrollSmoother.create({
  //       smooth: 2,
  //       effects: true,
  //     });
  //   },
  //   {
  //     dependencies: [pathname],
  //     revertOnUpdate: true,
  //   }
  // );
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
      id="smooth-wrapper"
    >
      <body
        suppressHydrationWarning
        className={`${AlbertSans.className}  antialiased`}
        id="smooth-wrapper"
      >
        <div id="smooth-content">{children}</div>
      </body>
    </html>
  );
}
