"use client";

import React, { useState } from "react";
import * as S from "./Login.styles";
import Link from "next/link";

// Ícones para login social
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login: ${email}`);
  };

  const handleSocialLogin = (provider: string) => {
    alert(`Login com ${provider}`);
  };

  return (
    <main id="main-content">
      <S.AuthWrapper>
        <S.AuthCard role="form" aria-labelledby="login-title">
          <S.Title id="login-title">Entrar</S.Title>
          <S.Subtitle>Acesse sua conta Lacrei Saúde</S.Subtitle>

          {/* Formulário */}
          <S.Form onSubmit={handleSubmit}>
            <label htmlFor="email" className="sr-only">E-mail</label>
            <S.Input
              id="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />

            <label htmlFor="password" className="sr-only">Senha</label>
            <S.Input
              id="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
            />

            <S.Button type="submit" aria-label="Entrar na conta">
              Entrar
            </S.Button>
          </S.Form>

          <S.Divider>ou</S.Divider>

          {/* Login Social apenas ícones redondos */}
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
