import { Search } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import HeroShowcase from "./HeroShowcase";

const Hero = () => {
  return (
    <div className="bg-persian-blue text-white relative pt-30 overflow-hidden grid-background">
      <div className="my-container pt-12">
        <h1 className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 duration-700 ease-out fill-mode-both xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-semibold text-center lg:px-10">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 duration-700 ease-out fill-mode-both delay-100 text-shuttle-gray-100 text-center text-lg mt-6 font-normal">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 duration-700 ease-out fill-mode-both delay-200 flex items-center gap-4 justify-center w-full mt-8">
          <div className="relative flex-1 bg-white w-full max-w-115 rounded-full flex px-5 items-center gap-3 h-13">
            <Search size={16} className="text-shuttle-gray-400" />
            <input
              className="bg-transparent border-none focus:outline-none  placeholder-shuttle-gray-400 w-full text-shuttle-gray-400 "
              type="text"
              placeholder="Course, topic, creator"
            />
          </div>
          <Button
            variant="default"
            size="lg"
            className="rounded-full h-11.5 px-6"
          >
            Search
          </Button>
        </div>

        <HeroShowcase />
      </div>

      {/* background shapes */}
      <Image
        className="absolute left-0 top-54 hidden lg:block motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-6 duration-1000 ease-out fill-mode-both delay-300"
        src="/assets/hero/shape-left.png"
        alt=""
        width={266}
        height={387}
      />
      <Image
        className="absolute right-0 top-56 hidden lg:block motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-6 duration-1000 ease-out fill-mode-both delay-300"
        src="/assets/hero/shape-right.png"
        alt=""
        width={213}
        height={372}
      />
    </div>
  );
};

export default Hero;
