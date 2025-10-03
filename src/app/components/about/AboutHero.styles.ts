// src/components/about/AboutHero.styles.ts
"use client";

import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundGradient};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0;
  padding: 3rem 1rem;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  max-width: 600px;
  flex: 1;
`;

export const TitleHero = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubtitleHero = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroImage = styled.img`
  border-radius: 12px;
  object-fit: cover;
  width: 100%;
  max-width: 500px;
  height: auto;
`;
