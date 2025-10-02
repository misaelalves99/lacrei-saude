// src/app/register/page.tsx
"use client";

import React, { useState } from "react";
import * as S from "../login/Login.styles"; // Reaproveitando estilos
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registro: ${name} - ${email}`);
    // Aqui você chamaria a API real de registro
  };

  return (
    <main id="main-content">
      <S.AuthWrapper>
        <S.AuthCard role="form" aria-labelledby="register-title">
          <S.Title id="register-title">Criar Conta</S.Title>
          <S.Subtitle>Cadastre-se para acessar os serviços</S.Subtitle>

          <S.Form onSubmit={handleSubmit}>
            <label htmlFor="name" className="sr-only">
              Nome completo
            </label>
            <S.Input
              id="name"
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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
            />

            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <S.Input
              id="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <S.Button type="submit" aria-label="Criar conta">
              Cadastrar
            </S.Button>
          </S.Form>

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
