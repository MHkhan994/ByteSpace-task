import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogins from "@/components/auth/SocialLogins";

export default function Login() {
  return (
    <AuthShell
      introTitle="Sign in with ease"
      introText="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
    >
      <div className="mt-10">
        <LoginForm />
      </div>

      <div className="my-10 flex items-center gap-4 text-sm text-light-gray">
        <span className="h-px flex-1 bg-shuttle-gray-100" />
        or
        <span className="h-px flex-1 bg-shuttle-gray-100" />
      </div>

      <SocialLogins />

      <p className="mt-16 text-center text-sm text-light-gray">
        New user?{" "}
        <Link href="/signup" className="text-persian-blue hover:underline">
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
