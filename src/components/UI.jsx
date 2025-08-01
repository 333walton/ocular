import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

const pictures = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const videoRef = useRef(null);
  const [hasPlayedInitial, setHasPlayedInitial] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  // Play animation on initial load
  useEffect(() => {
    if (videoRef.current && !hasPlayedInitial) {
      videoRef.current.play();
      setHasPlayedInitial(true);
    }
  }, [hasPlayedInitial]);

  const handleLogoInteraction = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to beginning
      videoRef.current.play();
    }
  };

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <div className="flex justify-between items-start w-full">
          <a
            className="pointer-events-auto mt-10 ml-10"
            href=""
          >
            <video 
              ref={videoRef}
              className="w-32 h-32 cursor-pointer mix-blend-screen opacity-90" 
              src=""
              muted
              playsInline
              onMouseEnter={handleLogoInteraction}
              onClick={handleLogoInteraction}
              onTouchStart={handleLogoInteraction}
            />
          </a>
          
          {/* Remove this - logo is now in top left */}
        </div>

        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-6xl md:text-10xl font-black ">
              Ocular
            </h1>
            <h2 className="shrink-0 text-white text-5xl md:text-8xl italic font-light">
              Mobile            </h2>
            <h2 className="shrink-0 text-white text-7xl md:text-12xl font-bold">
              Digital
            </h2>
            <h2 className="shrink-0 text-transparent text-7xl md:text-12xl font-bold italic outline-text">
              Google Ads
            </h2>
            <h2 className="shrink-0 text-white text-6xl md:text-9xl font-medium">
              Data
            </h2>
            <h2 className="shrink-0 text-white text-6xl md:text-9xl font-extralight italic">
              Performance
            </h2>
            <h2 className="shrink-0 text-white text-8xl md:text-13xl font-bold">
              Ocular Labs
            </h2>
            <h2 className="shrink-0 text-transparent text-8xl md:text-13xl font-bold outline-text italic">
              Display
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-6xl md:text-10xl font-black ">
              Ocular
            </h1>
            <h2 className="shrink-0 text-white text-5xl md:text-8xl italic font-light">
              Ocular Labs 
            </h2>
            <h2 className="shrink-0 text-white text-7xl md:text-12xl font-bold">
              Three.js
            </h2>
            <h2 className="shrink-0 text-transparent text-7xl md:text-12xl font-bold italic outline-text">
              Digital
            </h2>
            <h2 className="shrink-0 text-white text-6xl md:text-9xl font-medium">
              Google Ads
            </h2>
            <h2 className="shrink-0 text-white text-6xl md:text-9xl font-extralight italic">
              Data
            </h2>
            <h2 className="shrink-0 text-white text-8xl md:text-13xl font-bold">
              Growth
            </h2>
            <h2 className="shrink-0 text-transparent text-8xl md:text-13xl font-bold outline-text italic">
              Strategy
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};