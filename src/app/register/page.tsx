// src/app/register/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import * as S from "./Register.styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";

export default function RegisterPage() {
  const router = useRouter();
  const { register, loginWithProvider, user, loading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle senha
  const [error, setError] = useState("");

  // Redireciona automaticamente se o usuário já estiver logado
  useEffect(() => {
    if (!loading && user) router.push("/");
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await register(email, password);
      const firebaseUser = userCredential.user;

      if (name) await updateProfile(firebaseUser, { displayName: name });

      router.push("/"); // Redireciona após registro
    } catch (err: any) {
      setError(err.message || "Erro ao criar a conta. Tente novamente.");
    }
  };

  const handleSocialLogin = async (provider: "Google" | "Facebook") => {
    setError("");
    try {
      await loginWithProvider(provider);
      router.push("/");
    } catch (err: any) {
      setError(err.message || `Erro ao registrar com ${provider}`);
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
        <S.AuthCard role="form" aria-labelledby="register-title">
          <S.Title id="register-title">Criar Conta</S.Title>
          <S.Subtitle>Cadastre-se para acessar os serviços</S.Subtitle>

          {error && (
            <p style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
              {error}
            </p>
          )}

          <S.Form onSubmit={handleSubmit}>
            <label htmlFor="name" className="sr-only">Nome completo</label>
            <S.Input
              id="name"
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email" className="sr-only">E-mail</label>
            <S.Input
              id="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password" className="sr-only">Senha</label>
            <S.PasswordWrapper>
              <S.Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <S.TogglePasswordButton
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </S.TogglePasswordButton>
            </S.PasswordWrapper>

            <S.Button type="submit" aria-label="Criar conta">
              Cadastrar
            </S.Button>
          </S.Form>

          <S.Divider>ou</S.Divider>

          <S.SocialLogin>
            <S.SocialButton
              type="button"
              onClick={() => handleSocialLogin("Google")}
              aria-label="Registrar com Google"
            >
              <FaGoogle size={20} />
            </S.SocialButton>

            <S.SocialButton
              type="button"
              onClick={() => handleSocialLogin("Facebook")}
              aria-label="Registrar com Facebook"
            >
              <FaFacebookF size={20} />
            </S.SocialButton>
          </S.SocialLogin>

          <S.LinkText>
            Já tem conta?{" "}
            <Link href="/login" aria-label="Ir para página de login">
              Entrar
            </Link>
          </S.LinkText>
        </S.AuthCard>
      </S.AuthWrapper>
    </main>
  );
}
