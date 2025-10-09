// src/app/components/home/Hero.styles.ts
import styled, { css } from "styled-components";

/* Seção principal */
export const HeroSection = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    overflow: hidden;
    font-family: "Nunito", sans-serif;
    padding: ${theme.spacings.xxl} ${theme.spacings.md};

    @media (max-width: ${theme.breakpoints.desktop}) {
      min-height: 520px;
      padding: ${theme.spacings.xl} ${theme.spacings.sm};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      text-align: center;
      min-height: 480px;
      padding: ${theme.spacings.lg} ${theme.spacings.sm};
    }

    @media (max-width: 480px) {
      min-height: auto;
      padding: ${theme.spacings.md} 1rem;
    }
  `}
`;

/* Imagem de fundo */
export const HeroImageBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url("/assets/home/greetings-banner-image.3ec83257.png");
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.85) 25%,
      rgba(255, 255, 255, 0.1) 65%
    );
    z-index: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-position: center bottom;
    &::after {
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.9) 15%,
        rgba(255, 255, 255, 0.1) 50%
      );
    }
  }

  @media (max-width: 480px) {
    background-position: center;
  }
`;

/* Conteúdo principal */
export const ContentWrapper = styled.div`
  position: relative;
  z-index: 5;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Nunito", sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const HeroInner = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 32rem;
    gap: ${theme.spacings.md};
    z-index: 10;

    @media (max-width: ${theme.breakpoints.tablet}) {
      max-width: 100%;
      align-items: center;
      gap: ${theme.spacings.sm};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.text};
    font-family: "Nunito", sans-serif;
  `}
`;

/* Título */
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    color: ${theme.colors.primary};
    margin: 0 0 1rem;

    @media (min-width: ${theme.breakpoints.desktop}) {
      font-size: 3.5rem;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
      line-height: 1.3;
    }
  `}
`;

/* Descrição */
export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 1.25rem;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacings.md};
    line-height: 1.6;

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 1.125rem;
      margin-bottom: ${theme.spacings.sm};
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      line-height: 1.5;
    }
  `}
`;

/* Botões de ação */
export const Actions = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    gap: 1.5rem;
    margin-top: ${theme.spacings.lg};
    flex-wrap: wrap;

    @media (max-width: ${theme.breakpoints.tablet}) {
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 1rem;

      button,
      a {
        width: 100%;
      }
    }
  `}
`;

/* Estilo dos botões principais */
export const ActionButton = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
    background-color: ${theme.colors.primary};
    color: #fff;
    width: 14rem;
    height: 3rem;
    border: 2px solid ${theme.colors.primary};
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: 0.02rem;
    line-height: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.15) 4px 4px 4px;

    &:hover {
      background-color: transparent;
      color: ${theme.colors.primary};
      transform: translateY(-2px);
      box-shadow: rgba(0, 0, 0, 0.12) 6px 6px 6px;
    }

    &:active {
      transform: translateY(0);
      box-shadow: rgba(0, 0, 0, 0.08) 2px 2px 2px;
    }

    @media (max-width: 480px) {
      width: 100%;
      font-size: 1rem;
      height: 2.75rem;
    }
  `}
`;
