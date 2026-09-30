import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";

const LearningProgressCard = ({
  progress,
  className,
}: {
  progress: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-55 rounded-2xl bg-white p-5 text-dark shadow-lg",
        className,
      )}
    >
      <p className="text-sm">Learning Progress</p>
      <p className="mt-3 text-4xl font-medium mb-2">{progress}%</p>
      <Progress value={progress} />
    </div>
  );
};

export default LearningProgressCard;
