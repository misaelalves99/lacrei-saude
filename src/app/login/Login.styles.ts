import styled from "styled-components";

/* ----------------------------
   Wrapper e Card
---------------------------- */
export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  min-height: calc(100vh - 160px);
  background: ${({ theme }) => theme.colors.backgroundGradient};
`;

export const AuthCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 28px rgba(2, 6, 23, 0.1);

  @media (max-width: 480px) {
    padding: 2rem 1.25rem;
  }
`;

/* ----------------------------
   Título e subtítulo
---------------------------- */
export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 2rem;
`;

/* ----------------------------
   Formulário
---------------------------- */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.3);
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ----------------------------
   Link
---------------------------- */
export const LinkText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }
`;

/* ----------------------------
   Login Social (somente ícones redondos)
---------------------------- */
export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:first-child {
    background: #db4437; /* Google Red */
    color: #fff;

    &:hover,
    &:focus-visible {
      background: #c33d2e;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  &:last-child {
    background: #1877f2; /* Facebook Blue */
    color: #fff;

    &:hover,
    &:focus-visible {
      background: #155dbf;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

/* ----------------------------
   Divider
---------------------------- */
export const Divider = styled.div`
  text-align: center;
  margin: 1rem 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  &::before,
  &::after {
    content: "";
    height: 1px;
    width: 40%;
    background: ${({ theme }) => theme.colors.text};
    position: absolute;
    top: 50%;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

/* ----------------------------
   Acessibilidade
---------------------------- */
export const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
