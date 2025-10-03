// src/components/auth/LoginForm.tsx
"use client";
import React from "react";
import { AuthForm } from "./AuthForm";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { login, loginWithProvider, user, loading } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
    router.push("/");
  };

  const handleSocialLogin = async (provider: "Google" | "Facebook") => {
    await loginWithProvider(provider);
    router.push("/");
  };

  return (
    <AuthForm
      type="login"
      onSubmit={({ email, password }) => handleLogin(email, password)}
      onSocialLogin={handleSocialLogin}
      loading={loading}
      error={user ? undefined : undefined} // opcional: mostrar erro global
    />
  );
};
