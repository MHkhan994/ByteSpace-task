import Image from "next/image";
import Reveal from "@/components/common/Reveal";

type AuthShellProps = {
  introTitle: string;
  introText: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

// Shared two-column layout for the login and signup pages
const AuthShell = ({
  introTitle,
  introText,
  eyebrow,
  title,
  children,
}: AuthShellProps) => {
  return (
    <main className="grid-background flex min-h-screen bg-persian-blue pt-30 pb-16 text-white">
      <div className="my-container grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="hidden lg:block">
          <h1 className="text-xl font-semibold text-shuttle-gray-50">
            {introTitle}
          </h1>
          <p className="mt-4 max-w-md font-normal text-shuttle-gray-50">
            {introText}
          </p>
          <Image
            src="/assets/auth/authbg.png"
            alt="Course cards and happy student reviews"
            width={552}
            height={586}
            priority
            className="mt-10 w-full max-w-120"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto w-full max-w-145 rounded-3xl bg-white px-6 py-12 text-dark sm:px-12 lg:py-16"
        >
          <p className="text-sm text-persian-blue">{eyebrow}</p>
          <h2 className="mt-1 text-4xl font-semibold md:text-5xl">{title}</h2>
          {children}
        </Reveal>
      </div>
    </main>
  );
};

export default AuthShell;
