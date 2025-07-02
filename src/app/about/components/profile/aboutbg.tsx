import GridDistortion from "./griddistortion";
import ScrollVelocity from "./ScrollVelocity";
// import CircularText from "./CircularText";

export default function AboutBg() {
    return (
      <main className="bg-white">
        <div className="h-screen">
          {/* <div className="col-span-5 relative">
            <CircularText
              text="FULLSTACK*WEBGIS*DEVELOPER"
              onHover="speedUp"
              spinDuration={50}
              className="h-1/5 w-1/5 text-2xl font-bold font-sans text-zinc-600 flex relative justify-center items-center gap-6 flex-wrap"
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

