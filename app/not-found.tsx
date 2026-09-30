import Link from "next/link";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid-background flex flex-1 items-center overflow-hidden bg-persian-blue pt-30 pb-24 text-white">
      <div className="my-container flex flex-col items-center text-center">
        <p
          aria-hidden="true"
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 bg-linear-to-b from-primary from-30% to-primary/10 bg-clip-text font-poppins text-[9rem] leading-none font-semibold text-transparent duration-700 ease-out fill-mode-both sm:text-[13rem] lg:text-[18rem]"
        >
          404
        </p>
        <h1 className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 -mt-6 max-w-4xl text-3xl font-semibold delay-150 duration-700 ease-out fill-mode-both sm:-mt-10 md:text-5xl lg:-mt-16 lg:text-6xl">
          The page you are looking <br className="hidden md:block" />
          for doesn&apos;t exist
        </h1>
        <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 mt-6 text-shuttle-gray-100 delay-200 duration-700 ease-out fill-mode-both">
          Try to use a correct url or go back to homepage to start again.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "motion-safe:animate-in motion-safe:fade-in mt-8 h-11.5 rounded-full px-6 delay-300 duration-700 ease-out fill-mode-both",
          )}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
