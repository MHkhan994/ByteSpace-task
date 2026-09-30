import CourseCategories from "@/components/homepage/CourseCategories";
import FeaturedCourses from "@/components/homepage/FeaturedCourses";
import CareerGrowth from "@/components/homepage/CareerGrowth";
import CreatorCta from "@/components/homepage/CreatorCta";
import Hero from "@/components/homepage/Hero";
import Testimonials from "@/components/homepage/Testimonials";
import LearningPaths from "@/components/homepage/LearningPaths";
import PartnerLogos from "@/components/homepage/PartnerLogos";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";

export default function Home() {
  return (
    <div>
      <ScrollProgressBar />
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
