import { useRef, useState } from "react";

function HeroSection() {
  const videoPlayerRef = useRef(null);
  const [showOverlay, setshowOverlay] = useState(true);
  const handleClick = () => {
    console.log("flag");
    setshowOverlay(false);

    if (videoPlayerRef.current) {
      const iframe = videoPlayerRef.current;
      if (!iframe.src.includes("autoplay=1")) {
        iframe.src += iframe.src.includes("?") ? "&autoplay=1" : "?autoplay=1";
        console.log(iframe.src);
      }
    }
  };

  return (
    <section className="px-12 md:px-32 py-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Health Japanese Fried Rice
          </h1>

          <div className="flex flex-wrap gap-8 text-lg text-[#181945]">
            <div className="flex items-center gap-3 pr-8 border-r border-gray-300">
              <i className="fa-solid fa-user text-xl"></i>
              <div className="flex flex-col leading-snug">
                <p className="text-base font-bold">John Smith</p>
                <p className="opacity-75 text-sm font-medium">15 March 2022</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pr-8 border-r border-gray-300">
              <i className="fa-solid fa-clock text-xl"></i>
              <div className="flex flex-col leading-snug gap-1">
                <p className="text-xs font-medium">PREP TIME</p>
                <p className="opacity-75 text-sm font-medium">15 Minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pr-8 border-r border-gray-300">
              <i className="fa-solid fa-clock text-xl"></i>
              <div className="flex flex-col leading-snug gap-1">
                <p className="text-xs font-medium">COOK TIME</p>
                <p className="opacity-75 text-sm font-medium">15 Minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-utensils text-xl"></i>
              <p className="text-sm text-[#00000099] font-medium">Chicken</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center gap-8 mt-8 lg:mt-0">
          <div className="flex flex-col items-center gap-4">
            <span className="flex items-center justify-center p-6 rounded-full bg-[#E7FAFE] hover:bg-gray-300 transition-colors cursor-pointer">
              <i className="fa-solid fa-print"></i>
            </span>
            <p className="text-xs font-medium">PRINT</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="flex items-center justify-center p-6 rounded-full bg-[#E7FAFE] hover:bg-gray-300 transition-colors cursor-pointer">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </span>
            <p className="text-xs font-medium">SHARE</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-16">
        <div className="relative md:w-3/4 aspect-video overflow-hidden rounded-4xl group">
          <iframe
            ref={videoPlayerRef}
            id="ytPlayer"
            className="w-full h-full"
            src="https://www.youtube.com/embed/T6V7VI7lx60?start=997"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          {showOverlay && (
            <div
              id="overlay"
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://img.youtube.com/vi/T6V7VI7lx60/hqdefault.jpg')",
              }}
            >
              <span
                onClick={handleClick}
                className="flex items-center justify-center w-24 h-24 rounded-full bg-[#FFFFFFCC]"
              >
                <i className="fa-solid fa-play text-[#181945] text-3xl group-hover:scale-110 transition-transform"></i>
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col bg-[#E7FAFE] p-8 rounded-4xl justify-between md:w-1/4 gap-y-12 md:gap-y-0">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Nutrition Information</h2>
            <span className="flex justify-between items-center border-b-1 pb-2 border-[#0000001A]">
              <p className="text-lg font-medium text-[#00000099]">Calories</p>
              <p className="text-lg font-medium">219.9 kcal</p>
            </span>
            <span className="flex justify-between items-center border-b-1 pb-2 border-[#0000001A]">
              <p className="text-lg font-medium text-[#00000099]">Total Fat</p>
              <p className="text-lg font-medium">10.7 g</p>
            </span>
            <span className="flex justify-between items-center border-b-1 pb-2 border-[#0000001A]">
              <p className="text-lg font-medium text-[#00000099]">Protein</p>
              <p className="text-lg font-medium">7.9 g</p>
            </span>
            <span className="flex justify-between items-center border-b-1 pb-2 border-[#0000001A]">
              <p className="text-lg font-medium text-[#00000099]">
                Carbohydrate
              </p>
              <p className="text-lg font-medium">22.3 g</p>
            </span>
            <span className="flex justify-between items-center border-b-1 pb-2 border-[#0000001A]">
              <p className="text-lg font-medium text-[#00000099]">
                Cholesterol
              </p>
              <p className="text-lg font-medium">37.4 mg</p>
            </span>
          </div>
          <div className="text-center text-[#00000099]">
            <p>
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-[#00000099]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
