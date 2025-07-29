import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restu Aka's Personal Website ",
  description:
    "Personal Portofolio Restu Aka a Geoinformatics Enginnerin and passion with Fullstack Developer Website and GIS Web App Map",
};

const AlbertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export default function RootLayout({
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
