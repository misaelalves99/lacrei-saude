import styled from 'styled-components';
import Link from 'next/link';

const PRIMARY = '#018762';
const TEXT_COLOR = '#333';
const TEXT_LIGHT = '#666';
const BORDER_RADIUS = '12px';
const FONT_WEIGHTS = { regular: 400, semibold: 600, bold: 700 };

// --- Container global ---
export const RegisterPageContainer = styled.div`
  min-height: 100vh;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;

  @media (max-width: 768px) {
    padding: 24px 12px;
  }
`;

// --- Card principal ---
export const RegisterCard = styled.div`
  display: flex;
  border-radius: ${BORDER_RADIUS};
  width: 100%;
  max-width: 1100px;
  min-height: 600px;
  overflow: hidden;
  gap: 40px;

  @media (max-width: 1280px) { max-width: 900px; min-height: 500px; }
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    min-height: auto;
    gap: 24px;
    padding: 0;
  }
`;

// --- FormContainer ---
export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 32px;

  @media (max-width: 768px) { padding: 24px 16px; }
`;

// --- Illustration ---
export const IllustrationContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 600px;

  @media (max-width: 1280px) { min-height: 500px; }
  @media (max-width: 768px) { display: none; }
`;

// --- Tipografia ---
export const Title = styled.h2`
  font-size: clamp(22px, 4vw, 32px);
  color: ${TEXT_COLOR};
  font-weight: ${FONT_WEIGHTS.bold};
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: clamp(14px, 2.5vw, 16px);
  color: ${TEXT_LIGHT};
  width: 100%;
  margin-bottom: 24px;
`;

// --- Form ---
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: clamp(12px, 2vw, 14px);
    color: ${TEXT_COLOR};
    font-weight: ${FONT_WEIGHTS.regular};
    margin-bottom: 4px;
    margin-top: 24px;
  }
`;

// --- Botões e ações ---
export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;

  button[type='submit'] {
    background-color: ${PRIMARY};
    color: #fff;
    font-weight: ${FONT_WEIGHTS.bold};
    padding: 14px 12px;
    border-radius: ${BORDER_RADIUS};
    border: none;
    cursor: pointer;
    font-size: clamp(16px, 2vw, 18px);
    transition: all 0.2s ease;

    &:hover { opacity: 0.9; }
  }
`;

export const LinkAction = styled(Link)`
  font-size: clamp(12px, 2vw, 14px);
  color: ${PRIMARY};
  font-weight: ${FONT_WEIGHTS.semibold};
  margin-top: 15px;
  text-decoration: none;
  align-self: flex-start;

  &:hover { text-decoration: underline; }
`;

export const HalfInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  > div { flex: 1; display: flex; flex-direction: column; min-width: 150px; }

  @media (max-width: 768px) { flex-direction: column; gap: 16px; }
`;

export const PasswordCriteria = styled.div`
  background: #fff;
  border-radius: ${BORDER_RADIUS};
  padding: 16px;
  margin-top: 16px;
  border: 1px solid #f0f0f0;

  p { font-size: 12px; color: ${TEXT_LIGHT}; margin-bottom: 8px; font-weight: ${FONT_WEIGHTS.semibold}; }
`;

export const PasswordItem = styled.span<{ passed: boolean }>`
  display: block;
  font-size: 12px;
  color: ${({ passed }) => (passed ? PRIMARY : TEXT_LIGHT)};
  margin-bottom: 4px;
`;

// --- Container checkboxes ---
export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 480px) {
    gap: 12px;
    margin-top: 16px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    flex-shrink: 0;
  }

  label {
    font-size: clamp(12px, 2vw, 14px);
    color: ${TEXT_COLOR};
    font-weight: ${FONT_WEIGHTS.regular};
    line-height: 1.4;
  }

  a {
    color: ${PRIMARY};
    text-decoration: none;
    margin-left: 4px;

    &:hover { text-decoration: underline; }
  }

  @media (max-width: 768px) {
    gap: 8px;
    flex-direction: column;
  }
`;
