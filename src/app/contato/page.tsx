// src/contato/page.tsx

"use client";

import React from "react";
import { ContactForm } from "../components/contact/ContactForm";
import styled from "styled-components";

const ContactPageWrapper = styled.main`
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

export default function ContactPage() {
  return (
    <ContactPageWrapper>
      <PageTitle>Fale Conosco</PageTitle>
      <PageSubtitle>
        Preencha o formulário abaixo e nossa equipe entrará em contato o mais rápido possível.
      </PageSubtitle>
      <ContactForm />
    </ContactPageWrapper>
  );
}
