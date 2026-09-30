import Image from "next/image";
import testimonialsData from "../uiData/testimonials";
import Reveal from "../common/Reveal";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-shuttle-gray-50 py-24 text-dark">
      {/* gradient shapes */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-80 size-240 career-growth-gradient-green opacity-60 blur-[100px]" />
      <div className="absolute -right-142 top-1/2 -translate-y-1/2 size-284 career-growth-gradient-green opacity-40 blur-[120px]" />
      <div className="absolute -left-142 -bottom-142 size-284 career-growth-gradient-blue opacity-30 blur-[120px]" />

      <div className="my-container relative">
        <Reveal className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-md text-3xl font-semibold md:text-[2.75rem] md:leading-tight">
            {testimonialsData.heading}
          </h2>
          <p className="text-shuttle-gray-700 font-normal text-lg">
            {testimonialsData.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-10">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 0.08}
              className="rounded-[24px] bg-white p-6 shadow-sm space-y-6"
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={56}
                height={56}
                className="size-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-persian-blue">{testimonial.role}</p>
              </div>
              <blockquote className="text-shuttle-gray-700 text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
