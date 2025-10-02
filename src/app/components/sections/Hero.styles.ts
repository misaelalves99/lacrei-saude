// src/components/sections/Hero.styles.ts
"use client";

import styled from "styled-components";

export const HeroWrapper = styled.section`
  text-align: center;
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundGradient};
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
