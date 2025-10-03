import styled from "styled-components";

/* Wrapper centralizado */
export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  min-height: calc(100vh - 160px); // header + footer
  background: ${({ theme }) => theme.colors.backgroundGradient};
`;

/* Card do formulário */
export const AuthCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 3rem 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 8px 28px rgba(2, 6, 23, 0.1);
  transition: box-shadow 0.3s ease;

  &:focus-within {
    box-shadow: 0 8px 28px rgba(1, 131, 131, 0.3);
    outline: none;
  }
`;

/* Título do formulário */
export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-align: center;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

/* Subtítulo do formulário */
export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

/* Formulário */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

/* Input */
export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  outline: none;
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.2);
  }
`;

/* Botão principal */
export const Button = styled.button`
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: background 0.3s ease, transform 0.15s ease;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* Link abaixo do formulário */
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
    &:focus {
      text-decoration: underline;
      outline: none;
    }
  }
`;

/* ----------------------------
   Login Social (apenas ícones redondos)
---------------------------- */
export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

/* Botão social */
export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    outline: none;
  }

  &:first-child {
    background: #db4437; /* Google Red */
    color: #fff;
  }

  &:last-child {
    background: #1877f2; /* Facebook Blue */
    color: #fff;
  }
`;

/* Divider entre formulário e login social */
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

/* Classe utilitária para acessibilidade */
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
