// src/contato/page.tsx
"use client";

import React from "react";
import { ContactForm } from "../components/contact/ContactForm";
import * as S from "./ContactPage.styles";

export default function ContactPage() {
  return (
    <S.ContactPageWrapper>
      <S.PageTitle>Fale Conosco</S.PageTitle>
      <S.PageSubtitle>
        Preencha o formulário abaixo e nossa equipe entrará em contato o mais
        rápido possível.
      </S.PageSubtitle>
      <ContactForm />
    </S.ContactPageWrapper>
  );
}
