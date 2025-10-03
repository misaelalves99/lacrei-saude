// src/components/home/CTASection.styles.ts

"use client";

import styled from "styled-components";

export const CTAWrapper = styled.section`
  text-align: center;
  padding: 3.5rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin: 4rem auto;
  max-width: 960px;
  box-shadow: 0 10px 24px rgba(1, 131, 131, 0.3);

  /* Animação suave de entrada */
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.8s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsividade */
  @media (min-width: 768px) {
    padding: 4.5rem 3rem;
  }

  @media (min-width: 1200px) {
    padding: 5rem 4rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;

  button {
    min-width: 180px;
    font-size: 1.125rem;
  }
`;
