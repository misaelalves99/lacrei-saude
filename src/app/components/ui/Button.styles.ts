import styled, { css } from "styled-components";

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonContainerProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  disabled?: boolean;
}

const buttonVariants = {
  primary: (theme: any) => css`
    background-color: ${theme.colors.primary}; /* rgb(1, 135, 98) */
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primaryDark}; /* hover */
      border-color: ${theme.colors.primaryDark};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      transform: translateY(1px);
    }
  `,
  secondary: (theme: any) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.secondary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.secondaryDark};
      border-color: ${theme.colors.secondaryDark};
    }
  `,
  outline: (theme: any) => css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primary}10; /* 10% opacity */
    }
  `,
  text: (theme: any) => css`
    background-color: transparent;
    color: ${theme.colors.primary};
    border: none;
    padding: 0;

    &:hover:not(:disabled) {
      text-decoration: underline;
    }
  `,
};

const buttonSizes = {
  small: (theme: any) => css`
    font-size: ${theme.fonts.sizes.small};
    padding: 0.5rem 1rem;
    height: 36px;
  `,
  medium: (theme: any) => css`
    font-size: ${theme.fonts.sizes.medium};
    padding: 0.75rem 1.5rem;
    height: 48px;
  `,
  large: (theme: any) => css`
    font-size: ${theme.fonts.sizes.large};
    padding: 1rem 2rem;
    height: 60px;
  `,
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, $variant, $size, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.fonts.weights.bold};
    border-radius: 8px;
    cursor: pointer;
    transition: all ${theme.transition};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;

    /* Aplicações de Variantes e Tamanhos */
    ${buttonVariants[$variant](theme)};
    ${buttonSizes[$size](theme)};

    /* Estilo para botão desabilitado */
    ${disabled && css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
  `}
`;
