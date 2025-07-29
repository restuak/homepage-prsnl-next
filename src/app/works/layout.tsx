import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Experience Restu Aka",
  description: "Page experience Restu Aka, a fullstack developer",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
