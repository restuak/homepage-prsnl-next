import GridDistortion from "./griddistortion";
import ScrollVelocity from "./ScrollVelocity";


export default function AboutBg() {
    return (
      <main className="bg-white">
        <div className="h-screen">


          <div className="absolute top-[83%] w-full items-center justify-center text-center">
            <ScrollVelocity
              texts={["ABOUTME—"]}
              velocity={280}
              className="bg-none text-zinc-600 text-9xl tracking-widest font-light"
            />
          </div>
          <div style={{}}>
            <GridDistortion
              imageSrc="../restuaka.webp"
              // grid={200}
              // mouse={0.1}
              // strength={0.1}
              // relaxation={0.9}
              className="h-screen w-full"
            />
          </div>
        </div>
      </main>
    );
    }

