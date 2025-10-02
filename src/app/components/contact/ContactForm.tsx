"use client";

import React, { useState } from "react";
import * as S from "./ContactForm.styles";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      {success && <S.SuccessMessage>Mensagem enviada com sucesso!</S.SuccessMessage>}

      <S.Label htmlFor="name">Nome</S.Label>
      <S.Input
        id="name"
        name="name"
        type="text"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
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
      />

      <S.SubmitButton type="submit">Enviar</S.SubmitButton>
    </S.Form>
  );
};
