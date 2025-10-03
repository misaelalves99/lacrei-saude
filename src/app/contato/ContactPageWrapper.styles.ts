// src/components/contact/ContactPageWrapper.styles.ts

"use client";

import styled from "styled-components";

export const ContactPageWrapper = styled.section`
  max-width: 900px;
  width: 100%; /* Ocupa 100% do container pai */
  margin: 4rem auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; /* Espaçamento entre títulos, formulário e cards */

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  /* Garantir que formulários e cards ocupem toda a largura disponível */
  & > form,
  & > div {
    width: 100%;
    max-width: 600px; /* Limite máximo para não ficar gigantesco */
  }
`;

// Títulos padronizados
export const PageTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  max-width: 650px;
  line-height: 1.6;
`;
