import { Star } from "lucide-react";
import Image from "next/image";

const studentAvatars = [
  "/assets/avatars/avatar-1.png",
  "/assets/avatars/avatar-2.png",
  "/assets/avatars/avatar-3.png",
  "/assets/avatars/avatar-4.png",
  "/assets/avatars/avatar-5.png",
  "/assets/avatars/avatar-6.png",
];

const progress = 55;

const HeroShowcase = () => {
  return (
    <div className="relative mt-12 h-42 sm:h-72 md:h-96 lg:h-120 w-full overflow-hidden">
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

        <div className="absolute left-67.5 top-28 rounded-xl bg-white px-4 py-3 shadow-lg">
          <p className="font-medium">UI/UX Design</p>
          <p className="mt-0.5 flex items-center gap-2 text-xs text-light-gray">
            200 Courses
            <span className="size-1 rounded-full bg-light-gray" />
            1000+ Students
          </p>
        </div>

        <div className="absolute left-50 top-75 rounded-2xl bg-white p-4 shadow-lg">
          <p className="font-medium">Happy Students</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-light-gray">
            4.8 (240)
            <Star size={12} className="fill-amber-400 text-amber-400" />
          </p>
          <div className="mt-3 flex items-center">
            {studentAvatars.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={40}
                height={40}
                className="-ml-2 first:ml-0 size-10 rounded-full border-2 border-white object-cover"
              />
            ))}
            <span className="-ml-2 flex size-10 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-bold">
              2K+
            </span>
          </div>
        </div>

        <div className="absolute left-172.5 top-32 w-55 rounded-2xl bg-white p-5 shadow-lg">
          <p className="text-sm">Learning Progress</p>
          <p className="mt-3 text-4xl font-medium">{progress}%</p>
          <div className="mt-4 h-1.5 w-full rounded-full bg-shuttle-gray-100">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
