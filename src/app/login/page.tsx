// src/app/login/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import * as S from "./Login.styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();
  const { login, loginWithProvider, user, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle senha
  const [error, setError] = useState("");

  // Redireciona automaticamente se o usuário já estiver logado
  useEffect(() => {
    if (!loading && user) {
      router.push("/"); // Home ou dashboard
    }
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      router.push("/"); // Redireciona após login
    } catch (err: any) {
      setError(err.message || "Erro ao entrar. Tente novamente.");
    }
  };

  const handleSocialLogin = async (provider: "Google" | "Facebook") => {
    setError("");
    try {
      await loginWithProvider(provider);
      router.push("/"); // Redireciona após login
    } catch (err: any) {
      setError(err.message || `Erro ao entrar com ${provider}`);
    }
  };

  if (loading) {
    return (
      <S.AuthWrapper>
        <p>Carregando...</p>
      </S.AuthWrapper>
    );
  }

  return (
    <main id="main-content">
      <S.AuthWrapper>
        <S.AuthCard role="form" aria-labelledby="login-title">
          <S.Title id="login-title">Entrar</S.Title>
          <S.Subtitle>Acesse sua conta Lacrei Saúde</S.Subtitle>

          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              {error}
            </p>
          )}

          <S.Form onSubmit={handleSubmit}>
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <S.Input
              id="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />

            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <S.PasswordWrapper>
              <S.Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-required="true"
                hasToggle
              />
              <S.TogglePasswordButton
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </S.TogglePasswordButton>
            </S.PasswordWrapper>

            <S.Button type="submit" aria-label="Entrar na conta">
              Entrar
            </S.Button>
          </S.Form>

          <S.Divider>ou</S.Divider>

          <S.SocialLogin>
            <S.SocialButton
              type="button"
              onClick={() => handleSocialLogin("Google")}
              aria-label="Entrar com Google"
            >
              <FaGoogle size={20} />
            </S.SocialButton>

            <S.SocialButton
              type="button"
              onClick={() => handleSocialLogin("Facebook")}
              aria-label="Entrar com Facebook"
            >
              <FaFacebookF size={20} />
            </S.SocialButton>
          </S.SocialLogin>

          <S.LinkText>
            Não tem conta?{" "}
            <Link href="/register" aria-label="Ir para página de cadastro">
              Cadastre-se
            </Link>
          </S.LinkText>
        </S.AuthCard>
      </S.AuthWrapper>
    </main>
  );
}
