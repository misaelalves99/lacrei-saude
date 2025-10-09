// src/components/ui/Input.styles.ts
import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    input {
      width: 100%;
      padding: ${theme.spacings.sm};
      padding-right: ${theme.spacings.xxl}; /* Espaço para o ícone à direita */
      border: 1px solid #ccc;
      border-radius: ${theme.borderRadius};
      font-size: ${theme.fonts.sizes.medium};
      color: ${theme.colors.text};
      outline: none;
      transition: border 0.2s;

      &:focus {
        border-color: ${theme.colors.primary};
      }

      &::placeholder {
        color: ${theme.colors.textLight};
      }
    }

    .right-icon {
      position: absolute;
      top: 50%;
      right: ${theme.spacings.sm};
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: ${theme.colors.textLight};
    }
  `}
`;
