
import Navbar from "@/components/navbar";
import AboutDesc from "./components/aboutdesc";
import Footer from "@/components/footer";
import AboutBg from "./components/aboutbg";
export default function AboutView() {
  return (
    <main className="bg-black">
      <div id="home" className="">
        <Navbar />
        <AboutBg />
        <AboutDesc />
        <Footer />
      </div>
    </main>
  );
}
