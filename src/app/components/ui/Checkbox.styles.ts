import styled, { css } from 'styled-components';

// Cor principal para o checkmark
export const TEAL_PRIMARY = '#018383';

// Wrapper que contém o input e o label
export const CheckboxWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${theme.spacings.sm};
    
    a {
      color: ${TEAL_PRIMARY};
      text-decoration: none;
      font-weight: ${theme.fonts.weights.semibold}; /* Usando semibold que existe */
      margin-left: 4px;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

// Input escondido
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

// Checkbox visual
export const StyledCheckbox = styled.div<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid ${TEAL_PRIMARY};
    border-radius: 4px;
    transition: all 150ms;
    margin-right: ${theme.spacings.sm};
    flex-shrink: 0;
    background: ${checked ? TEAL_PRIMARY : theme.colors.white};

    &::after {
      content: '';
      display: ${checked ? 'block' : 'none'};
      width: 4px;
      height: 9px;
      border: solid ${theme.colors.white};
      border-width: 0 2px 2px 0;
      transform: translate(6px, 1px) rotate(45deg);
    }

    ${HiddenCheckbox}:focus + & {
      box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.4);
    }
  `}
`;

// Label
export const CheckboxLabel = styled.label`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.text};
    line-height: 1.5;
    cursor: pointer;
    user-select: none;

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 14px;
    }
  `}
`;
