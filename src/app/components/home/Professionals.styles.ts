// src/components/home/Professionals.styles.ts
import styled, { css } from 'styled-components';

const GRADIENT_START = '#018383';
const GRADIENT_END = '#014A87';
const DARK_TEXT = '#333333';

/* Container geral da seção */
export const ProfessionalsContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin: 3rem 0;
    padding: ${theme.spacings.xxxl} ${theme.spacings.md} ${theme.spacings.xxl};
    text-align: center;
    font-family: 'Nunito', sans-serif;

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: ${theme.spacings.xxl} ${theme.spacings.sm} ${theme.spacings.lg};
    }
  `}
`;

/* Título da seção */
export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${theme.spacings.xxl};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xxl};
    color: ${DARK_TEXT};
    font-weight: ${theme.fonts.weights.bold};
    margin-bottom: 0;

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.fonts.sizes.xl};
    }

    @media (max-width: 480px) {
      font-size: ${theme.fonts.sizes.large};
    }
  `}
`;

export const TitleDivider = styled.div`
  ${({ theme }) => css`
    width: 150px;
    height: 3px;
    background: ${GRADIENT_START};
    margin-top: ${theme.spacings.sm};
    border-radius: ${theme.borderRadius.sm};
  `}
`;

/* Grid dos passos */
export const StepGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacings.lg};
    margin: 0 auto;
    padding: 0 ${theme.spacings.md};

    @media (max-width: ${theme.breakpoints.desktop}) {
      gap: ${theme.spacings.xl};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      gap: ${theme.spacings.xxl};
    }
  `}
`;

/* Card individual */
export const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

/* Ícone com número do passo */
export const IconWrapper = styled.div<{ stepNumber: number }>`
  ${({ theme, stepNumber }) => css`
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 50%, ${GRADIENT_START} 0%, ${GRADIENT_END} 100%);
    box-shadow: 0 6px 15px rgba(0, 131, 125, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacings.md};

    img {
      width: 48px;
      height: 48px;
      filter: brightness(0) invert(1);
    }

    &::after {
      content: '${stepNumber}';
      position: absolute;
      bottom: -5px;
      left: 10px;
      width: 28px;
      height: 28px;
      background: ${GRADIENT_START};
      color: ${theme.colors.white};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: ${theme.fonts.weights.bold};
      font-size: ${theme.fonts.sizes.small};
      border: 3px solid ${theme.colors.white};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      width: 100px;
      height: 100px;
      img {
        width: 40px;
        height: 40px;
      }
      &::after {
        width: 24px;
        height: 24px;
        font-size: ${theme.fonts.sizes.xs};
      }
    }
  `}
`;

/* Descrição do passo */
export const CardDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${DARK_TEXT};
    margin-top: ${theme.spacings.sm};
    line-height: 1.5;
    max-width: 220px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Nunito', sans-serif;

    @media (max-width: ${theme.breakpoints.tablet}) {
      max-width: 100%;
      font-size: ${theme.fonts.sizes.small};
      line-height: 1.4;
    }
  `}
`;
