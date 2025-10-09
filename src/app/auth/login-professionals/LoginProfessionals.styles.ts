// src/app/auth/LoginProfessionals.styles.ts
import styled from 'styled-components';
import Link from 'next/link';

const TEAL_PRIMARY = '#018383';
const LIGHT_BACKGROUND = '#F8F7FA';
const ACCENT_GREEN = '#00A39D';
const BORDER_RADIUS = '12px'; // Substituindo theme.border.radius
const FONT_WEIGHTS = { regular: 400, medium: 600, bold: 700 }; // Substituindo theme.fonts.weights

export const LoginPageContainer = styled.div`
  min-height: 100vh;
  background-color: ${LIGHT_BACKGROUND};
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 32px 16px;
    background-color: #fff;
  }
`;

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
  width: 120px;
  height: 32px;
`;

export const HeaderAction = styled.div`
  a {
    border: 1px solid ${ACCENT_GREEN};
    color: ${ACCENT_GREEN};
    background: #fff;
    padding: 8px 16px;
    border-radius: ${BORDER_RADIUS};
    font-size: 16px;
    font-weight: ${FONT_WEIGHTS.medium};
    text-decoration: none;
    transition: background 0.2s;

    &:hover {
      background: rgba(0, 163, 157, 0.05);
    }
  }
`;

export const LoginCard = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: ${BORDER_RADIUS};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1100px;
  min-height: 600px;
  overflow: hidden;

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

export const FormContainer = styled.div`
  flex: 1;
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

export const IllustrationContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: #e6f8f7;
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
  color: #333333;
  margin-bottom: 8px;
  font-weight: ${FONT_WEIGHTS.bold};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: #666666;
  margin-bottom: 32px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${TEAL_PRIMARY};
  width: 100%;
  max-width: 250px;
  align-self: flex-start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 16px;
    color: #333333;
    font-weight: ${FONT_WEIGHTS.medium};
    margin-bottom: 4px;
    margin-top: 16px;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: ${BORDER_RADIUS};
    font-size: 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 16px;
  gap: 16px;

  button[type="submit"] {
    background-color: ${TEAL_PRIMARY};
    color: #fff;
    font-weight: ${FONT_WEIGHTS.bold};
    padding: 12px;
    border-radius: ${BORDER_RADIUS};
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const LinkAction = styled(Link)`
  font-size: 16px;
  color: ${TEAL_PRIMARY};
  text-decoration: none;
  font-weight: ${FONT_WEIGHTS.medium};
  margin-top: 12px;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;
