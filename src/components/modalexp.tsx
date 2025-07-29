"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// import { Divide } from "lucide-react";
// import imagemin from "imagemin";
// import imageminJpegtran from "imagemin-jpegtran";
// import imageminPngquant from "imagemin-pngquant";

// const files = await imagemin(["prj/*.{jpg,png}"], {
//   destination: "prj/images",
//   plugins: [
//     imageminJpegtran(),
//     imageminPngquant({
//       quality: [0.6, 0.8],
//     }),
//   ],
// });

type Props = {
  id: string;
  title: string;
  img: string;
  tools: string[];
  desc: string;
  features: string[];
  images: string[];
};

export default function ModalExp({
  id,
  title,
  img,
  tools,
  desc,
  features,
  images,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="cursor-pointer container relative flex w-full h-[190px] mb-10 p-5 justify-center items-center bg-zinc-200 rounded-b-2xl shadow hover:shadow-lg transition"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-<ID>"
          data-state="closed"
          data-slot="dialog-trigger"
        >
          <div>
            <Image
              src={img}
              alt="Selected Project"
              width={200}
              height={100}
              quality={65}
              className="w-full h-25 object-cover  rounded mb-2 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="font-semibold text-xl lg:text-2xl text-zinc-800 uppercase text-center floating-label hover:text-zinc-500">
              {title}
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-full max-h-[80vh] overflow-y-auto bg-zinc-950 text-white border-zinc-700 ">
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold uppercase text-center">{title}</h2>
          <p className="text-sm text-zinc-300">{desc}</p>

          <div>
            <h3 className="font-semibold mb-1">Features:</h3>
            <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1">
              {features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Preview</h4>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  width={200}
                  height={150}
                  className="rounded shadow border border-zinc-800"
                />
              ))}
            </div>
            <h4 className="font-semibold mt-3 mb-1">Tools & Tech</h4>
            <div className="flex flex-wrap gap-1 mt-2 text-center justify-center items-center object-center ">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  className="bg-zinc-800 text-white text-sm hover:bg-zinc-600"
                >
                  {tool}
                </Badge>
              ))}
            </div>
            <div className="pt-3 p-3 cursor-pointer container flex justify-center gap-10 ">
              <Button className="font-bold text-lg text-zinc-900 bg-zinc-300 hover:bg-zinc-600">
                <a href="#">LIVE</a>
              </Button>

              <Button className="font-bold text-lg text-zinc-900 bg-zinc-300 hover:bg-zinc-600">
                <a href="#">REPO</a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
