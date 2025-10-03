// src/app/servicos/components/ServiceCard.styles.ts
"use client";

import styled from "styled-components";

export const CardWrapper = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const CardDescription = styled.p`
  flex: 1;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const CardButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  text-align: center;
  transition: background 0.25s ease, transform 0.15s ease;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
    outline: none;
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.35);
  }
`;
