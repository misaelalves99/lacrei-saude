// src/app/components/home/CTASection.styles.ts

"use client";

import styled, { css } from "styled-components";

export const CTAWrapper = styled.section`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.xxl} ${theme.spacings.md};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.lg};
    margin: ${theme.spacings.xxxl} auto;
    max-width: 960px;
    box-shadow: 0 10px 24px rgba(1, 131, 131, 0.3);
    font-family: 'Nunito', sans-serif;

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
    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: ${theme.spacings.xxxl} ${theme.spacings.lg};
    }

    @media (min-width: ${theme.breakpoints.largeDesktop}) {
      padding: ${theme.spacings.xxxl} ${theme.spacings.xl};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: 'Nunito', sans-serif;
    font-size: ${theme.fonts.sizes.xl};
    font-weight: ${theme.fonts.weights.bold};
    margin-bottom: ${theme.spacings.xl};
    line-height: 1.3;

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.fonts.sizes.xxl};
    }
  `}
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;

  button {
    min-width: 180px;
    font-size: ${props => props.theme.fonts.sizes.large};
    font-family: 'Nunito', sans-serif;
    font-weight: ${props => props.theme.fonts.weights.semibold};
  }
`;
