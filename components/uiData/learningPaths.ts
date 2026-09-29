import BriefcaseIcon from "../svgs/learningPaths/BriefcaseIcon";
import DesignIcon from "../svgs/learningPaths/DesignIcon";
import DevelopmentIcon from "../svgs/learningPaths/DevelopmentIcon";
import MegaphoneIcon from "../svgs/learningPaths/MegaphoneIcon";
import MonitorIcon from "../svgs/learningPaths/MonitorIcon";
import PhotographyIcon from "../svgs/learningPaths/PhotographyIcon";

const learningPathsData = {
  heading: "Explore Diverse Learning Paths at Bytespace",
  subtitle:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  categories: [
    {
      id: "design",
      label: "Design",
      icon: DesignIcon,
    },
    {
      id: "development",
      label: "Development",
      icon: DevelopmentIcon,
    },
    {
      id: "it-software",
      label: "IT & Software",
      icon: MonitorIcon,
    },
    {
      id: "business",
      label: "Business",
      icon: BriefcaseIcon,
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: MegaphoneIcon,
    },
    {
      id: "photography",
      label: "Photography",
      icon: PhotographyIcon,
    },
  ],
};

export default learningPathsData;
