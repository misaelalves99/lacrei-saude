// src/app/login/page.tsx
"use client";

import React, { useState } from "react";
import * as S from "./Login.styles";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login: ${email}`);
    // Aqui você chamaria API de autenticação real
  };

  return (
    <S.AuthWrapper>
      <S.AuthCard>
        <S.Title>Entrar</S.Title>
        <S.Subtitle>Acesse sua conta Lacrei Saúde</S.Subtitle>

        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <S.Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <S.Button type="submit">Entrar</S.Button>
        </S.Form>

        <S.LinkText>
          Não tem conta? <Link href="/register">Cadastre-se</Link>
        </S.LinkText>
      </S.AuthCard>
    </S.AuthWrapper>
  );
}
