// src/components/contact/ContactForm.tsx

"use client";

import React, { useState } from "react";
import * as S from "./ContactForm.styles";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", botcheck: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "201c8178-2960-4e7d-9fff-26f182359dcc", // ✅ sua chave pública
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: formData.botcheck, // 👈 campo honeypot
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "", botcheck: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit} aria-label="Formulário de contato da Lacrei Saúde">
      {/* Honeypot invisível para bots */}
      <input
        type="checkbox"
        name="botcheck"
        value={formData.botcheck}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      {success && (
        <S.SuccessMessage role="status" aria-live="polite">
          ✅ Mensagem enviada com sucesso!
        </S.SuccessMessage>
      )}
      {error && (
        <S.ErrorMessage role="alert">
          ❌ Ocorreu um erro. Tente novamente mais tarde.
        </S.ErrorMessage>
      )}

      <S.Label htmlFor="name">Nome</S.Label>
      <S.Input
        id="name"
        name="name"
        type="text"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
        aria-required="true"
      />

      <S.Label htmlFor="email">E-mail</S.Label>
      <S.Input
        id="email"
        name="email"
        type="email"
        placeholder="seu@email.com"
        value={formData.email}
        onChange={handleChange}
        required
        aria-required="true"
      />

      <S.Label htmlFor="message">Mensagem</S.Label>
      <S.TextArea
        id="message"
        name="message"
        placeholder="Escreva sua mensagem..."
        value={formData.message}
        onChange={handleChange}
        required
        rows={6}
        aria-required="true"
      />

      <S.SubmitButton type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </S.SubmitButton>
    </S.Form>
  );
};
