// src/app/contato/page.tsx
"use client";

import React from "react";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactCards } from "../components/contact/ContactCards";
import { ContactPageWrapper } from "./ContactPageWrapper.styles";

export default function ContatosPage() {
  return (
    <main id="main-content">
      {/* Hero da página */}
      <ContactHero />

      {/* Seção de formulário */}
      <ContactPageWrapper>
        <ContactForm />
      </ContactPageWrapper>

      {/* Seção de informações de contato */}
      <ContactPageWrapper>
        <ContactCards />
      </ContactPageWrapper>
    </main>
  );
}
