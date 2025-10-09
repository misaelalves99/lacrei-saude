import styled from 'styled-components';
import Link from 'next/link';

// -----------------------------
// Container principal da página
// -----------------------------
export const LoginPageContainer = styled.div`
  min-height: 100vh;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0 16px;
    background-color: #fff;
  }
`;

// -----------------------------
// Header (Logo + botão Ajuda)
// -----------------------------
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 48px;
  padding: 0 16px;
`;

export const HeaderLogo = styled.div`
  position: relative;
  width: 140px;
  height: 32px;
`;

export const HeaderAction = styled.div`
  a {
    border: 1px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: #fff;
    padding: 8px 18px;
    border-radius: 9999px;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    text-decoration: none;
    transition: background 0.2s;

    &:hover {
      background: rgba(0, 163, 157, 0.05);
    }
  }
`;

// -----------------------------
// Card do login
// -----------------------------
export const LoginCard = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 100%;
  max-width: 1100px;
  min-height: 600px;
  overflow: hidden;
  gap: 40px;

  @media (max-width: 1280px) {
    max-width: 900px;
    min-height: 500px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    min-height: auto;
    box-shadow: none;
    padding: 0;
  }
`;

// -----------------------------
// Formulário e container
// -----------------------------
export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

export const IllustrationContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 600px;

  @media (max-width: 1280px) {
    min-height: 500px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  width: 100%;
  align-self: flex-start;
`;

// -----------------------------
// Formulário
// -----------------------------
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fonts.weights.regular};
    margin-bottom: 4px;
    margin-top: 24px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 8px;
  gap: 16px;

  button[type='submit'] {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    padding: 14px 12px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: none;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      opacity: 0.9;
    }
  }
`;

// -----------------------------
// Link de ação (esqueci minha senha)
// -----------------------------
export const LinkAction = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  margin-top: 15px;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;
