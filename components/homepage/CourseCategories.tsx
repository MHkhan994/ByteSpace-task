import categoryData from "../uiData/category";
import CategoryFilter from "./CategoryFilter";
import Reveal from "../common/Reveal";

const CourseCategories = () => {
  return (
    <section className="bg-white pt-24 pb-12 text-dark">
      <Reveal className="my-container">
        <h2 className="mx-auto max-w-xl text-center text-3xl font-semibold md:text-[2.5rem] md:leading-tight">
          {categoryData.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-light-gray">
          {categoryData.subtitle}
        </p>

        <CategoryFilter categories={categoryData.categories} />
      </Reveal>
    </section>
  );
};

export default CourseCategories;
