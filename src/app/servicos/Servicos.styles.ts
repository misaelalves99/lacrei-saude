"use client";

import styled from "styled-components";

// ---------- SEÇÃO DE SERVIÇOS ----------
export const Section = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
