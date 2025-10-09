// src/app/auth/RegisterProfessionals.styles.ts

import styled from 'styled-components';

const TEAL_PRIMARY = '#018383';
const LIGHT_BACKGROUND = '#F9F3FF';
const ACCENT_GREEN = '#00A39D';
const BORDER_RADIUS = '8px';
const FONT_WEIGHTS = { regular: 400, medium: 500, bold: 700 };
const TEXT_DARK = '#333333';
const TEXT_MUTED = '#666666';

// --- Container global da página ---
export const RegisterPageContainer = styled.div`
  min-height: 100vh;
  background-color: ${LIGHT_BACKGROUND};
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0 16px;
    background-color: #fff;
  }
`;

// --- Header (logo + ação) ---
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
    border: 1px solid ${ACCENT_GREEN};
    color: ${ACCENT_GREEN};
    background: #fff;
    padding: 8px 18px;
    border-radius: 9999px;
    font-size: 16px;
    font-weight: ${FONT_WEIGHTS.medium};
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      background: ${ACCENT_GREEN};
      color: #fff;
    }
  }
`;

// --- Card principal do formulário ---
export const RegisterCard = styled.div`
  display: flex;
  border-radius: ${BORDER_RADIUS};
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

// --- Container do formulário ---
export const FormContainer = styled.div`
  flex: 1;
  padding: 64px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

// --- Container da ilustração ---
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

// --- Tipografia ---
export const Title = styled.h2`
  font-size: 32px;
  color: ${TEXT_DARK};
  margin-bottom: 8px;
  font-weight: ${FONT_WEIGHTS.bold};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${TEXT_MUTED};
  margin-bottom: 32px;
  line-height: 1.5;
`;

// --- Formulário ---
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${TEXT_DARK};
    font-weight: ${FONT_WEIGHTS.regular};
    margin-bottom: 4px;
    margin-top: 24px;
  }

  > div {
    margin-top: 20px; /* espaçamento para checkboxes */
  }
`;

// --- Inputs lado a lado ---
export const HalfInputs = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;

    div:nth-child(2) label {
      margin-top: 24px;
    }
  }
`;

// --- Critérios de senha ---
export const PasswordCriteria = styled.div`
  background: #fff;
  border-radius: ${BORDER_RADIUS};
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
  border: 1px solid #f0f0f0;

  p {
    font-size: 12px;
    color: ${TEXT_MUTED};
    margin-bottom: 8px;
    font-weight: ${FONT_WEIGHTS.medium};
  }
`;

export const PasswordItem = styled.span<{ passed: boolean }>`
  display: block;
  font-size: 12px;
  color: ${({ passed }) => (passed ? ACCENT_GREEN : TEXT_MUTED)};
  margin-bottom: 4px;
  font-weight: ${FONT_WEIGHTS.regular};

  &::first-letter {
    color: ${({ passed }) => (passed ? ACCENT_GREEN : TEXT_MUTED)};
    margin-right: 5px;
    font-weight: ${FONT_WEIGHTS.bold};
  }
`;

// --- Container para botão ---
export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 8px;

  button[type='submit'] {
    background-color: ${TEAL_PRIMARY};
    color: #fff;
    font-weight: ${FONT_WEIGHTS.bold};
    padding: 14px 12px;
    border-radius: ${BORDER_RADIUS};
    border: none;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      opacity: 0.9;
    }
  }
`;
