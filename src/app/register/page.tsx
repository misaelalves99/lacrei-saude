// src/app/register/page.tsx
"use client";

import React, { useState } from "react";
import * as S from "./Register.styles";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cadastro: ${name} - ${email}`);
    // Aqui você chamaria API de registro real
  };

  return (
    <S.AuthWrapper>
      <S.AuthCard>
        <S.Title>Criar Conta</S.Title>
        <S.Subtitle>Cadastre-se na Lacrei Saúde</S.Subtitle>

        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <S.Button type="submit">Cadastrar</S.Button>
        </S.Form>

        <S.LinkText>
          Já tem conta? <Link href="/login">Entrar</Link>
        </S.LinkText>
      </S.AuthCard>
    </S.AuthWrapper>
  );
}
