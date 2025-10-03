// src/components/home/Hero.styles.ts

"use client";

import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 6rem 2rem;

  background: ${({ theme }) => theme.colors.backgroundGradient};
  color: ${({ theme }) => theme.colors.text};

  /* Responsividade */
  @media (min-width: 768px) {
    padding: 8rem 3rem;
  }

  @media (min-width: 1200px) {
    padding: 10rem 4rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  /* Botões responsivos */
  button {
    min-width: 160px;
  }
`;
