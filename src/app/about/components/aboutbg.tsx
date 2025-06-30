import GridDistortion from "./griddistortion";
import ScrollVelocity from "../block/TextAnimations/ScrollVelocity";
// import CircularText from "../block/TextAnimations/CircularText";

export default function AboutBg() {
    return (
      <main className="bg-white">
        <div className="h-screen">
          {/* <div className="col-span-5 relative">
            <CircularText
              text="FULLSTACK*WEB*"
              onHover="speedUp"
              spinDuration={30}
              className="absolute top-40 left-60 text-zinc-600 text-sm font-sans"
            />
          </div> */}

          <div className="absolute top-[83%] w-full items-center justify-center text-center">
            <ScrollVelocity
              texts={["ABOUTME—"]}
              velocity={280}
              className="bg-none text-zinc-600 text-9xl tracking-widest font-light"
            />
          </div>
          <div style={{}}>
            <GridDistortion
              imageSrc="../restuaka.jpg"
              grid={200}
              mouse={0.1}
              strength={0.1}
              relaxation={0.9}
              className="h-screen w-full"
            />
          </div>
        </div>
      </main>
    );
    }

