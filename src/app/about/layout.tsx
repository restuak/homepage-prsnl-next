import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Restu Aka | Restu Aka's Personal Website",
  description:
    "Page about Restu Aka, a geoinformatician and fullstack developer",
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
