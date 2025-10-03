// src/components/auth/RegisterForm.tsx
"use client";
import React from "react";
import { AuthForm } from "./AuthForm";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const { register, loginWithProvider, user, loading } = useAuth();

  const handleRegister = async (name: string, email: string, password: string) => {
    const userCredential = await register(email, password);
    if (name) await updateProfile(userCredential.user, { displayName: name });
    router.push("/");
  };

  const handleSocialLogin = async (provider: "Google" | "Facebook") => {
    await loginWithProvider(provider);
    router.push("/");
  };

  return (
    <AuthForm
      type="register"
      onSubmit={({ name, email, password }) => handleRegister(name!, email, password)}
      onSocialLogin={handleSocialLogin}
      loading={loading}
      error={user ? undefined : undefined}
    />
  );
};
