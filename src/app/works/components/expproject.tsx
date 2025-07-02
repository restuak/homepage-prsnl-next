"use client";
import ScrollUp from "@/components/animate/scrollup";
import FlowingMenu from "@/components/animate/FlowingMenu";
import { SampleProject } from "@/components/animate/statisworkdepan";
import FooterIn from "@/components/footerin";
export default function ExpProject() {
  return (
    <main className="bg-black" id="projectworks">
      <div className="h-100% max-w-screen-xl pt-1 mx-auto">
        <div className="container p-5 flex flex-col items-center pt-[5%]">
          <p className="p-5 pb-0 animate-fade-down font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-zinc-200">
            SELECTED PROJECT
          </p>
          <p className=" m-6 mt-3 mp-0 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl justify-center content-center text-center text-zinc-600">
            These are some projects that I have worked on, most of which are Web
            App Map based Geographic Information System (GIS)
          </p>
        </div>
        {/* <div className="container pt-0 pb-20 flex flex-wrap justify-center gap-10">
          <div className="bg-zinc-500 mt-2 items-center card w-70 md:w-95 shadow-sm">
            <figure>
              <img
                src="https://images.theconversation.com/files/331264/original/file-20200429-51489-190wiy4.png?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-zinc-800">
              <h2 className="card-title">
                Web App GIS Road Analyst in Java
                <div className="badge badge-secondary bg-zinc-600 border-zinc-300">
                  NEW
                </div>
              </h2>
              <p>
                This project involves developing a web-based GIS application for
                road analysis using Java. It integrates various mapping
                libraries and tools to provide interactive and analytical
                features for geographic data visualization and manipulation.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">ReactJS</div>
                <div className="badge badge-outline">TailwindCSS</div>
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">ReactBit</div>
                <div className="badge badge-outline">Rest API</div>
                <div className="badge badge-outline">POstman</div>
                <div className="badge badge-outline">ArcGIS Ol</div>
                <div className="badge badge-outline">MapBox</div>
                <div className="badge badge-outline">Leaflet</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-500 mt-2 items-center card w-70 md:w-95 shadow-sm">
            <figure>
              <img
                src="https://images.theconversation.com/files/331264/original/file-20200429-51489-190wiy4.png?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-zinc-800">
              <h2 className="card-title">
                Web App GIS Road Analyst in Java
                <div className="badge badge-secondary bg-zinc-600 border-zinc-300">
                  NEW
                </div>
              </h2>
              <p>
                This project involves developing a web-based GIS application for
                road analysis using Java. It integrates various mapping
                libraries and tools to provide interactive and analytical
                features for geographic data visualization and manipulation.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">ReactJS</div>
                <div className="badge badge-outline">TailwindCSS</div>
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">ReactBit</div>
                <div className="badge badge-outline">Rest API</div>
                <div className="badge badge-outline">POstman</div>
                <div className="badge badge-outline">ArcGIS Ol</div>
                <div className="badge badge-outline">MapBox</div>
                <div className="badge badge-outline">Leaflet</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-500 mt-2 items-center card w-70 md:w-95 shadow-sm">
            <figure>
              <img
                src="https://images.theconversation.com/files/331264/original/file-20200429-51489-190wiy4.png?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-zinc-800">
              <h2 className="card-title">
                Web App GIS Road Analyst in Java
                <div className="badge badge-secondary bg-zinc-600 border-zinc-300">
                  NEW
                </div>
              </h2>
              <p>
                This project involves developing a web-based GIS application for
                road analysis using Java. It integrates various mapping
                libraries and tools to provide interactive and analytical
                features for geographic data visualization and manipulation.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">ReactJS</div>
                <div className="badge badge-outline">TailwindCSS</div>
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">ReactBit</div>
                <div className="badge badge-outline">Rest API</div>
                <div className="badge badge-outline">POstman</div>
                <div className="badge badge-outline">ArcGIS Ol</div>
                <div className="badge badge-outline">MapBox</div>
                <div className="badge badge-outline">Leaflet</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-500 mt-2 items-center card w-70 md:w-95 shadow-sm">
            <figure>
              <img
                src="https://images.theconversation.com/files/331264/original/file-20200429-51489-190wiy4.png?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-zinc-800">
              <h2 className="card-title">
                Web App GIS Road Analyst in Java
                <div className="badge badge-secondary bg-zinc-600 border-zinc-300">
                  NEW
                </div>
              </h2>
              <p>
                This project involves developing a web-based GIS application for
                road analysis using Java. It integrates various mapping
                libraries and tools to provide interactive and analytical
                features for geographic data visualization and manipulation.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">ReactJS</div>
                <div className="badge badge-outline">TailwindCSS</div>
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">ReactBit</div>
                <div className="badge badge-outline">Rest API</div>
                <div className="badge badge-outline">POstman</div>
                <div className="badge badge-outline">ArcGIS Ol</div>
                <div className="badge badge-outline">MapBox</div>
                <div className="badge badge-outline">Leaflet</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-500 mt-2 items-center card w-70 md:w-95 shadow-sm">
            <figure>
              <img
                src="https://images.theconversation.com/files/331264/original/file-20200429-51489-190wiy4.png?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-zinc-800">
              <h2 className="card-title">
                Web App GIS Road Analyst in Java
                <div className="badge badge-secondary bg-zinc-600 border-zinc-300">
                  NEW
                </div>
              </h2>
              <p>
                This project involves developing a web-based GIS application for
                road analysis using Java. It integrates various mapping
                libraries and tools to provide interactive and analytical
                features for geographic data visualization and manipulation.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">ReactJS</div>
                <div className="badge badge-outline">TailwindCSS</div>
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">ReactBit</div>
                <div className="badge badge-outline">Rest API</div>
                <div className="badge badge-outline">POstman</div>
                <div className="badge badge-outline">ArcGIS Ol</div>
                <div className="badge badge-outline">MapBox</div>
                <div className="badge badge-outline">Leaflet</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-500 mt-2 items-center card w-70 md:w-95 shadow-sm">
            <figure>
              <img
                src="https://images.theconversation.com/files/331264/original/file-20200429-51489-190wiy4.png?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-zinc-800">
              <h2 className="card-title">
                Web App GIS Road Analyst in Java
                <div className="badge badge-secondary bg-zinc-600 border-zinc-300">
                  NEW
                </div>
              </h2>
              <p>
                This project involves developing a web-based GIS application for
                road analysis using Java. It integrates various mapping
                libraries and tools to provide interactive and analytical
                features for geographic data visualization and manipulation.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">ReactJS</div>
                <div className="badge badge-outline">TailwindCSS</div>
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">ReactBit</div>
                <div className="badge badge-outline">Rest API</div>
                <div className="badge badge-outline">POstman</div>
                <div className="badge badge-outline">ArcGIS Ol</div>
                <div className="badge badge-outline">MapBox</div>
                <div className="badge badge-outline">Leaflet</div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="text-2xl pt-1 pb-20"
          style={{ height: "350px", position: "relative" }}
        >
          <FlowingMenu items={SampleProject} />
        </div>
      </div>
      <FooterIn />
      <ScrollUp />
    </main>
  );
}
