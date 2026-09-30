"use client";

import { MotionConfig } from "motion/react";

// Skips transform animations for users who prefer reduced motion
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
