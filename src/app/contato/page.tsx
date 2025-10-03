// src/app/contato/page.tsx
"use client";

import React from "react";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactCards } from "../components/contact/ContactCards";
import {
  ContactPageWrapper,
  PageTitle,
  PageSubtitle,
} from "../contato/ContactPageWrapper.styles";

export default function ContatosPage() {
  return (
    <main id="main-content">
      {/* Hero da página */}
      <ContactHero />

      {/* Seção de formulário */}
      <ContactPageWrapper>
        <PageTitle>Fale Conosco</PageTitle>
        <PageSubtitle>
          Preencha o formulário abaixo para enviar sua mensagem, dúvidas ou sugestões. Nossa equipe responderá o mais rápido possível.
        </PageSubtitle>
        <ContactForm />
      </ContactPageWrapper>

      {/* Seção de informações de contato */}
      <ContactPageWrapper>
        <PageTitle>Informações de Contato</PageTitle>
        <PageSubtitle>
          Você também pode nos contatar diretamente através dos canais abaixo.
        </PageSubtitle>
        <ContactCards />
      </ContactPageWrapper>
    </main>
  );
}
