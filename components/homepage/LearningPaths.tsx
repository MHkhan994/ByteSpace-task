import learningPathsData from "../uiData/learningPaths";

const LearningPaths = () => {
  return (
    <section className="pb-24">
      <div className="my-container">
        <h2 className="text-center text-3xl font-semibold md:text-[2.5rem] md:leading-tight text-dark">
          {learningPathsData.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-4xl text-center text-shuttle-gray-400">
          {learningPathsData.subtitle}
        </p>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 xl:gap-10">
          {learningPathsData.categories.map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              className="flex aspect-square flex-col items-center justify-center gap-4 rounded-[24px] border border-shuttle-gray-100 transition-colors hover:border-primary"
            >
              <span className="flex size-15 items-center justify-center rounded-full bg-primary">
                <Icon />
              </span>
              <span className="text-lg font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
