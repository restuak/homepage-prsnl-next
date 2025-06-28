"use client";
import Welcome from "@/components/welcome";
import Navbar from "@/components/navbar";

export default function HomeView() {
  return (
    <main className="">
      <div id="home">
        <Navbar />
        <Welcome />
      </div>
    </main>
  );
}
