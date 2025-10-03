// src/components/auth/AuthForm.tsx
"use client";
import React, { useState } from "react";
import * as S from "./Auth.styles";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

export type AuthFormType = "login" | "register";

interface AuthFormProps {
  type: AuthFormType;
  onSubmit: (data: { name?: string; email: string; password: string }) => Promise<void>;
  onSocialLogin: (provider: "Google" | "Facebook") => Promise<void>;
  error?: string;
  loading?: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  type,
  onSubmit,
  onSocialLogin,
  error,
  loading,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ name, email, password });
  };

  const Divider: React.FC<{ children?: React.ReactNode }> = ({ children = "ou" }) => (
    <S.Divider>{children}</S.Divider>
  );

  const SocialLoginButtons: React.FC = () => (
    <S.SocialLogin>
      <S.SocialButton type="button" onClick={() => onSocialLogin("Google")} aria-label="Google">
        <FaGoogle size={20} />
      </S.SocialButton>
      <S.SocialButton type="button" onClick={() => onSocialLogin("Facebook")} aria-label="Facebook">
        <FaFacebookF size={20} />
      </S.SocialButton>
    </S.SocialLogin>
  );

  return (
    <S.AuthWrapper>
      <S.AuthCard role="form" aria-labelledby={`${type}-title`}>
        <S.Title id={`${type}-title`}>{type === "login" ? "Entrar" : "Criar Conta"}</S.Title>
        <S.Subtitle>
          {type === "login"
            ? "Acesse sua conta Lacrei Saúde"
            : "Cadastre-se para acessar os serviços"}
        </S.Subtitle>

        {error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>{error}</p>
        )}

        <S.Form onSubmit={handleSubmit}>
          {type === "register" && (
            <>
              <label htmlFor="name" className="sr-only">Nome completo</label>
              <S.Input
                id="name"
                type="text"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </>
          )}

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

          <S.Button type="submit" disabled={loading}>
            {type === "login" ? "Entrar" : "Cadastrar"}
          </S.Button>
        </S.Form>

        <Divider />
        <SocialLoginButtons />

        <S.LinkText>
          {type === "login" ? (
            <>Não tem conta? <a href="/register">Cadastre-se</a></>
          ) : (
            <>Já tem conta? <a href="/login">Entrar</a></>
          )}
        </S.LinkText>
      </S.AuthCard>
    </S.AuthWrapper>
  );
};
