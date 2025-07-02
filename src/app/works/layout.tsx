import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Experience Restu Aka | Restu Aka's Personal Website",
  description:
    "Page experience and skills Restu Aka, a fullstack developer, geodet, geomatics, geoinformatics,",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
