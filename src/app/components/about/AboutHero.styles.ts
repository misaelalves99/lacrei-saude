// src/components/about/AboutHero.styles.ts
"use client";

import styled, { css } from "styled-components";

export const HeroWrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.backgroundGradient};
    color: ${theme.colors.text};
    padding: ${theme.spacings.xxxl} ${theme.spacings.md};
    border-radius: 0;
  `}
`;

export const HeroContent = styled.div`
  ${({ theme }) => css`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xl};

    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  `}
`;

export const HeroText = styled.div`
  ${({ theme }) => css`
    flex: 1;
    max-width: 600px;
  `}
`;

export const TitleHero = styled.h1`
  ${({ theme }) => css`
    font-size: 2.5rem;
    font-weight: ${theme.fonts.weights.bold};
    margin-bottom: ${theme.spacings.md};
    color: ${theme.colors.primaryDark};

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  `}
`;

export const SubtitleHero = styled.p`
  ${({ theme }) => css`
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${theme.colors.text};
    opacity: 0.9;

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  `}
`;

export const HeroImage = styled.img`
  ${({ theme }) => css`
    border-radius: 12px;
    object-fit: cover;
    width: 100%;
    max-width: 500px;
    height: auto;
  `}
`;

export const ButtonHero = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.sm};
    width: 14rem;
    height: 3rem;
    background-color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    border-radius: 8px;
    color: ${theme.colors.white};
    font-size: 1.125rem;
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 0.02rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
    }
  `}
`;
