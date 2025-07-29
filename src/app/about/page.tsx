
import Navbar from "@/components/navbar";
import AboutDesc from "./components/profile/aboutdesc";
import Footer from "@/components/footer";
import AboutBg from "./components/profile/aboutbg";
import Skills from "./components/skills/skills";
import Hobbies from "./components/hobbies/hobbies";

export default function AboutView() {
  return (
    <main className="bg-black">
      <div id="home" className="">
        <Navbar />
        <AboutBg />
        <AboutDesc />
        <Skills />
        <Hobbies/>
        <Footer />
      </div>
    </main>
  );
}
