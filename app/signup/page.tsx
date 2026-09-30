import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import SignupForm from "@/components/auth/SignupForm";

export default function Signup() {
  return (
    <AuthShell
      introTitle="Sign up and come in"
      introText="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      eyebrow="Create an Account"
      title="Welcome to ByteSpace"
    >
      <div className="mt-10">
        <SignupForm />
      </div>

      <p className="mt-16 text-center text-sm text-light-gray">
        Already have an account?{" "}
        <Link href="/login" className="text-persian-blue hover:underline">
          Login
        </Link>
      </p>
    </AuthShell>
  );
}
