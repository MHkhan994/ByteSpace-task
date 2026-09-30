"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import FormInput from "@/components/auth/FormInput";
import { useDebouncedValidation } from "@/hooks/useDebouncedValidation";
import { loginSchema, type LoginValues } from "@/lib/validations/auth";
import { toast } from "../ui/toast";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  useDebouncedValidation(form);

  const onSubmit = async (values: LoginValues) => {
    console.log("Login values:", values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.add({ title: "Login successful, welcome back!", type: "success" });
      router.push("/");
    }, 1000);
  };

  return (
    <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
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
          autoComplete="current-password"
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
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
