"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import FormInput from "@/components/auth/FormInput";
import { useDebouncedValidation } from "@/hooks/useDebouncedValidation";
import { signupSchema, type SignupValues } from "@/lib/validations/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "../ui/toast";
import { Loader } from "lucide-react";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { fullName: "", email: "", password: "" },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  useDebouncedValidation(form);

  const onSubmit = async (values: SignupValues) => {
    console.log("Signup values:", values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.add({
        title: `Account created successfully, welcome ${values.fullName}!`,
        type: "success",
      });
      router.push("/");
    }, 1000);
  };

  return (
    <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <FormInput
          control={form.control}
          name="fullName"
          label="Full Name"
          placeholder="Jamie Davis"
          autoComplete="name"
        />
        <FormInput
          control={form.control}
          name="email"
          label="Email"
          type="email"
          placeholder="designer@example.com"
          autoComplete="email"
        />
        <FormInput
          control={form.control}
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
        />
      </FieldGroup>
      <div className="flex justify-end pt-7">
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="h-11.5 rounded-full px-6"
        >
          {loading && <Loader className="mr-1 h-4 w-4 animate-spin" />}
          {loading ? "Creating Account..." : "Continue"}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
