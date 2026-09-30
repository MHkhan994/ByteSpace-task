import coursesData from "../uiData/courses";
import CourseCard from "./CourseCard";

const FeaturedCourses = () => {
  return (
    <section className="bg-white pb-24 text-dark">
      <div className="my-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coursesData.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
