// src/components/ui/AccessibleButton.styles.ts

"use client";

import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;

  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;

  transition: background-color 0.3s ease, transform 0.15s ease,
    box-shadow 0.2s ease;

  /* Hover e foco */
  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    outline: none;
  }

  /* Ativo (click pressionado) */
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  /* Desabilitado */
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.grayLight}; /* corrigido */
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* Responsividade mobile-first */
  @media (min-width: 768px) {
    font-size: 1.125rem;
    padding: 1rem 2rem;
  }

  /* Suporte a prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none !important;
  }
`;
