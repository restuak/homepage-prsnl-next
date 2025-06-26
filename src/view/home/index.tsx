"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "../../components/loading";
export default function HomeView() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Aos.init({
      offset: 100,
      once: true,
    });
  });

  return (
    <main className="">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="" id="home">

       
        </div>
      )}
    </main>
  );
}
