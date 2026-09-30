import Image from "next/image";
import HappyStudentsCard from "../shared/HappyStudentsCard";
import LearningProgressCard from "../shared/LearningProgressCard";

const HeroShowcase = () => {
  return (
    <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-10 duration-1000 ease-out fill-mode-both delay-300 relative mt-12 h-42 sm:h-72 md:h-96 lg:h-120 w-full overflow-hidden">
      <div className="absolute bottom-0 left-1/2 h-120 w-laptop -translate-x-1/2 origin-bottom scale-[0.35] sm:scale-60 md:scale-80 lg:scale-100 text-dark">
        <div className="absolute left-1/2 -translate-x-1/2 top-7.5 size-287.5 rounded-full bg-primary" />

        <Image
          src="/assets/hero/shape-left-2.png"
          alt=""
          width={177}
          height={176}
          className="absolute left-30 -top-2 size-28"
        />
        <Image
          src="/assets/hero/shape-left-3.png"
          alt=""
          width={344}
          height={343}
          className="absolute -left-4 top-28 size-52"
        />
        <Image
          src="/assets/hero/shape-right-2.png"
          alt=""
          width={190}
          height={189}
          className="absolute right-40 -top-2 size-32"
        />
        <Image
          src="/assets/hero/shape-right-3.png"
          alt=""
          width={317}
          height={332}
          className="absolute right-4 top-36 size-48"
        />

        <Image
          src="/assets/models/model-male.png"
          alt="Student learning online"
          width={516}
          height={483}
          priority
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />

        <div className="motion-safe:animate-float absolute left-67.5 top-28 rounded-xl bg-white px-4 py-3 shadow-lg">
          <p className="font-medium">UI/UX Design</p>
          <p className="mt-0.5 flex items-center gap-2 text-xs text-light-gray">
            200 Courses
            <span className="size-1 rounded-full bg-light-gray" />
            1000+ Students
          </p>
        </div>

        <HappyStudentsCard className="motion-safe:animate-float [animation-delay:-2s] absolute left-50 top-75" />

        <LearningProgressCard progress={55} className="motion-safe:animate-float [animation-delay:-4s] absolute left-172.5 top-32" />
      </div>
    </div>
  );
};

export default HeroShowcase;
