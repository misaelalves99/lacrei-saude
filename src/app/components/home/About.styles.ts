// src/components/home/About.styles.ts
import styled, { css } from "styled-components";

// Constantes para consistência de layout
const CARD_WIDTH = "450px";
const IMAGE_WIDTH = "700px";

export const AboutSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: ${theme.spacings.xxl} 0;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    gap: ${theme.spacings.xl};
    font-family: "Nunito", sans-serif;
    background-color: ${theme.colors.white};
    overflow: hidden;

    /* 🧠 Evita layout shift */
    box-sizing: border-box;

    @media (max-width: ${theme.breakpoints.desktop}) {
      gap: ${theme.spacings.lg};
      padding: ${theme.spacings.xl} ${theme.spacings.lg};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      padding: ${theme.spacings.lg} ${theme.spacings.md};
      text-align: center;
    }
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: ${IMAGE_WIDTH};
    min-height: 480px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    z-index: 4;
    transition: opacity 0.3s ease;

    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      loading: lazy;
    }

    /* 💡 Performance + acessibilidade */
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    @media (max-width: ${theme.breakpoints.desktop}) {
      min-height: 400px;
    }

    /* 📱 No mobile, a imagem desaparece completamente */
    @media (max-width: ${theme.breakpoints.tablet}) {
      display: none;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: ${CARD_WIDTH};
    background-color: ${theme.colors.white};
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #ebebeb;
    z-index: 10;
    text-align: left;
    transition: all 0.3s ease;
    font-family: "Nunito", sans-serif;

    /* 🩵 Efeito de leve sobreposição no desktop */
    margin-left: -3.5rem;

    &:hover {
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 1100px) {
      margin-left: -2rem;
      padding: ${theme.spacings.lg};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      position: static;
      transform: none;
      width: 100%;
      max-width: 100%;
      margin: 0;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
      border: 1px solid #f4f4f4;
      text-align: center;
      padding: ${theme.spacings.md} ${theme.spacings.lg};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 1.3;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacings.md};

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 1.75rem;
      line-height: 1.4;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.fonts.sizes.medium};
    line-height: 1.6;
    color: ${theme.colors.textLight};
    margin-bottom: ${theme.spacings.md};
    max-width: 95%;

    &:last-of-type {
      margin-bottom: 0;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.fonts.sizes.small};
      max-width: 100%;
    }
  `}
`;

export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.lg};
    display: flex;
    justify-content: flex-start;

    @media (max-width: ${theme.breakpoints.tablet}) {
      justify-content: center;
      margin-top: ${theme.spacings.md};
    }

    a {
      font-weight: 600;
      text-decoration: none;
    }
  `}
`;
