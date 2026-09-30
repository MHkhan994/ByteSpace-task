import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../ui/avatar";

const studentAvatars = [
  "/assets/avatars/avatar-1.png",
  "/assets/avatars/avatar-2.png",
  "/assets/avatars/avatar-3.png",
  "/assets/avatars/avatar-4.png",
  "/assets/avatars/avatar-5.png",
  "/assets/avatars/avatar-6.png",
];

const HappyStudentsCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn("rounded-2xl bg-white p-4 text-dark shadow-lg", className)}>
      <p className="font-medium">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-xs text-light-gray">
        4.8 (240)
        <Star size={12} className="fill-amber-400 text-amber-400" />
      </p>
      <AvatarGroup className="mt-3">
        {studentAvatars.map((src) => (
          <Avatar key={src} size="lg">
            <AvatarImage src={src} alt="" />
          </Avatar>
        ))}
        <AvatarGroupCount className="bg-primary text-xs font-bold text-dark">
          2K+
        </AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
};

export default HappyStudentsCard;
