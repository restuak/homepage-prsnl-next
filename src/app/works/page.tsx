import Navbar from "@/components/navbar";
import ExpSkill from "./components/expskill";
// import ExpTimeline from "./components/exptimeline";
import Footer from "@/components/footer";
export default function ExperienceView() {
  return (
    <main className="bg-cover bg-no-repeat bg-center h-screen bg-white">
      <div id="home" className="">
        <Navbar />
        {/* <ExpTimeline /> */}
        <ExpSkill />
        <Footer />
      </div>
    </main>
  );
}
