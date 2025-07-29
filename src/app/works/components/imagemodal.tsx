// "use client";

// import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
// import Image from "next/image";
// import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";


// type Props = {
//   src: string;
//   alt?: string;
//   width?: number;
//   height?: number;
//   thumbnailClassName?: string;
// };

// export default function ZoomableImageModal({
//   src,
//   alt = "preview",
//   width = 300,
//   height = 200,
//   thumbnailClassName = "rounded shadow cursor-zoom-in",
// }: Props) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Image
//           src={src}
//           alt={alt}
//           width={width}
//           height={height}
//           className={thumbnailClassName}
//         />
//       </DialogTrigger>

//       <DialogContent className="max-w-5xl bg-black border-none text-white p-6 overflow-hidden">
//         <InnerImageZoom
//           src={src}
//           zoomSrc={src}
       
//           zoomType="hover"
//           zoomPreload={true}
//           className="rounded"
//         />
//       </DialogContent>
//     </Dialog>
//   );
// }
