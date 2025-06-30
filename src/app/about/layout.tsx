import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Restu Aka",
  description: "Page about Restu Aka, a fullstack developer",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
  
        {children}
     
    </>
  );
}
