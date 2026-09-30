import { CircleCheck } from "lucide-react";
import Image from "next/image";
import HappyStudentsCard from "../shared/HappyStudentsCard";
import LearningProgressCard from "../shared/LearningProgressCard";
import coursesData from "../uiData/courses";
import CourseCard from "./CourseCard";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

// Both illustrations are laid out on a fixed 560x550 stage and scaled down on phones
const stageWrapper = "relative h-90 w-full sm:h-137.5";
const stage =
  "absolute left-1/2 top-0 h-137.5 w-140 -translate-x-1/2 origin-top scale-[0.65] sm:scale-100";

const CareerGrowth = () => {
  return (
    <section className="relative overflow-hidden py-24 text-dark">
      {/* soft background glows */}
      <div className="absolute -left-40 -top-110 size-284.25 career-growth-gradient-green opacity-60 blur-[100px]" />
      <div className="absolute -right-142 -top-142 size-284 career-growth-gradient-blue opacity-15 blur-[120px]" />
      <div className="absolute -left-142 top-1/2 -translate-y-1/2 size-284 career-growth-gradient-blue opacity-30 blur-[120px]" />
      <div className="absolute -left-50 -bottom-54 size-168 career-growth-gradient-green opacity-70 blur-[65px]" />
      <div className="absolute -right-120 -bottom-142 size-284 career-growth-gradient-blue opacity-40 blur-[120px]" />

      <div className="my-container relative space-y-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="max-w-md text-3xl font-semibold md:text-[44px]  text-shuttle-gray-950">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="pt-10 max-w-lg text-shuttle-gray-700">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="mt-8 flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-medium text-persian-blue">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-light-gray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={stageWrapper}>
            <div className={stage}>
              <CourseCard
                course={coursesData.courses[0]}
                className="absolute left-0 top-0 w-92.5"
              />
              <Image
                src="/assets/models/model-male.png"
                alt="Student taking an online course"
                width={1000}
                height={700}
                className="absolute top-3 left-5 w-140"
              />
              <Image
                src="/squiggle-shape.png"
                alt=""
                width={366}
                height={487}
                className="absolute right-0 top-30 w-35 rotate-120 z-20"
              />
              <LearningProgressCard
                progress={55}
                className="absolute -right-12 top-52 shadow-none w-58 h-34.5"
              />
            </div>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className={`${stageWrapper} order-last lg:order-first`}>
            <div className={stage}>
              <Image
                src="/squiggle-shape.png"
                alt=""
                width={266}
                height={387}
                className="absolute left-90 top-40 w-35 z-40"
              />
              <Image
                src="/assets/models/model-female.png"
                alt="Course creator working on a tablet"
                width={1000}
                height={1000}
                className="absolute bottom-0 z-30 left-10 w-130 drop-shadow-[0_24px_32px_rgba(4,8,25,0.25)]"
              />
              <div className="absolute left-18 top-10 space-y-3 text-white">
                <div className="rounded-[16px] w-58 bg-persian-blue p-4 shadow-lg">
                  <p className="text-sm">Total Revenue</p>
                  <p className="text-[11px] text-shuttle-gray-100">
                    July 1 - 19
                  </p>
                  <p className="my-2 text-2xl font-bold">$120.29</p>
                  <Progress value={55} />
                </div>
                <div className="rounded-[16px] w-fit bg-persian-blue p-4 shadow-lg">
                  <p className="text-sm">Year to Date</p>
                  <p className="text-[11px] text-shuttle-gray-100">2024</p>
                  <p className="mt-2 text-2xl font-bold">$1,200.38</p>
                  <Button
                    variant="default"
                    size="sm"
                    className="mt-2 rounded-full text-shuttle-gray-950 text-[10px]"
                  >
                    +12$
                  </Button>
                </div>
              </div>
              <HappyStudentsCard className="absolute left-70 bottom-12 z-40" />
            </div>
          </div>

          <div>
            <h2 className="max-w-md text-3xl font-semibold md:text-[2.5rem] md:leading-tight">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-6 max-w-lg text-suttle-gray-700 font-normal">
              <span className="font-bold text-dark">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 space-y-4">
              {creatorBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-shuttle-gray-950 font-medium"
                >
                  <CircleCheck
                    size={20}
                    className="fill-persian-blue text-white"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerGrowth;
