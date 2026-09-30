import CourseCategories from "@/components/homepage/CourseCategories";
import FeaturedCourses from "@/components/homepage/FeaturedCourses";
import CareerGrowth from "@/components/homepage/CareerGrowth";
import CreatorCta from "@/components/homepage/CreatorCta";
import Hero from "@/components/homepage/Hero";
import Testimonials from "@/components/homepage/Testimonials";
import LearningPaths from "@/components/homepage/LearningPaths";
import PartnerLogos from "@/components/homepage/PartnerLogos";

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerLogos />
      <CourseCategories />
      <FeaturedCourses />
      <LearningPaths />
      <CareerGrowth />
      <CreatorCta />
      <Testimonials />
    </div>
  );
}
