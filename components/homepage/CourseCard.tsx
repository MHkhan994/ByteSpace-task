import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";
import Image from "next/image";
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../ui/avatar";
import coursesData from "../uiData/courses";

type Course = (typeof coursesData.courses)[number];

const studentAvatars = [
  "/assets/avatars/avatar-1.png",
  "/assets/avatars/avatar-2.png",
  "/assets/avatars/avatar-3.png",
];

const CourseCard = ({ course }: { course: Course }) => {
  const stats = [
    `${course.lessons} Lessons`,
    course.duration,
    `${course.comments} Comments`,
  ];

  return (
    <article className="rounded-2xl border border-shuttle-gray-100 bg-white p-3 transition-shadow hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-2 bottom-2 flex gap-1.5">
          {stats.map((stat) => (
            <span
              key={stat}
              className="rounded-md bg-black/40 px-2 py-1 text-[11px] text-white backdrop-blur-sm"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>

      <div className="px-1 pt-4 pb-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="truncate text-lg font-bold">{course.title}</h3>
          <p className="flex shrink-0 items-center gap-1 pt-1 text-sm">
            {course.rating}
            <Star size={14} className="fill-light-gray text-light-gray" />
          </p>
        </div>
        <p className="text-xs text-persian-blue">by {course.instructor}</p>

        <div className="mt-4 flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-md border border-shuttle-gray-100 px-2 py-1 text-xs text-gray">
            <ChartNoAxesColumnIncreasing size={12} />
            {course.level}
          </span>
          <AvatarGroup>
            {studentAvatars.map((src) => (
              <Avatar key={src}>
                <AvatarImage src={src} alt="" />
              </Avatar>
            ))}
            <AvatarGroupCount className="bg-primary text-[10px] font-bold text-dark">
              {course.students}K+
            </AvatarGroupCount>
          </AvatarGroup>
        </div>

        <p className="mt-4 text-xl font-bold text-persian-blue">
          ${course.price}
          <span className="ml-1 text-xs font-normal text-light-gray">
            /lifetime
          </span>
        </p>
      </div>
    </article>
  );
};

export default CourseCard;
