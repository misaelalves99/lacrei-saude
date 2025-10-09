// src/components/ui/Button.tsx
import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: React.ElementType; // Permite usar como 'a' ou Next Link
  href?: string;
  disabled?: boolean;
}

interface ButtonContainerProps {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  disabled?: boolean;
}

const buttonVariants = {
  primary: (theme: any) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
    }

    &:active:not(:disabled) {
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
      background-color: ${theme.colors.primary}10;
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

const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, $variant = 'primary', $size = 'medium', disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.fonts.weights.bold};
    border-radius: 8px;
    cursor: pointer;
    transition: all ${theme.transition};
    letter-spacing: 0.5px;
    white-space: nowrap;

    ${buttonVariants[$variant](theme)};
    ${buttonSizes[$size](theme)};

    ${disabled && css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
  `}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled,
  ...props
}) => {
  return (
    <ButtonContainer $variant={variant} $size={size} disabled={disabled} {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
