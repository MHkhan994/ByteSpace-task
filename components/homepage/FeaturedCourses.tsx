import coursesData from "../uiData/courses";
import CourseCard from "./CourseCard";
import Reveal from "../common/Reveal";

const FeaturedCourses = () => {
  return (
    <section className="bg-white pb-24 text-dark">
      <div className="my-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coursesData.courses.map((course, index) => (
          <Reveal key={course.id} delay={(index % 3) * 0.08}>
            <CourseCard course={course} className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
