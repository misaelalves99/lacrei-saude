// src/app/styles/global-styles.ts
import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    /* ===============================
       RESET BÁSICO E BOX-SIZING
    =============================== */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 16px;
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.fonts.family};
      font-weight: ${theme.fonts.weights.regular};
      font-size: ${theme.fonts.sizes.medium};
      color: ${theme.colors.text};
      background-color: ${theme.colors.background};
      line-height: 1.5;
      transition: background-color ${theme.transition}, color ${theme.transition};
    }

    h1,h2,h3,h4,h5,h6 {
      font-weight: ${theme.fonts.weights.bold};
      margin-bottom: ${theme.spacings.sm};
      line-height: 1.2;
      color: ${theme.colors.text};
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
      transition: color ${theme.transition};
      &:hover, &:focus { color: ${theme.colors.secondary}; }
    }

    button, input, textarea, select {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      transition: ${theme.transition};
    }

    input, textarea, select {
      border-radius: ${theme.borderRadius.md};
      border: 1px solid ${theme.colors.border};
      &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(1, 163, 157, 0.25);
      }
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* ===============================
       ACCESSIBILITY
    =============================== */
    :focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 4px;
    }

    #skip-to-content {
      position: absolute;
      left: -9999px;
      z-index: 1000;
      padding: ${theme.spacings.sm};
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
      font-weight: ${theme.fonts.weights.bold};
      border-radius: ${theme.borderRadius.sm};
      transition: ${theme.transition};
      &:focus {
        left: ${theme.spacings.sm};
        top: ${theme.spacings.sm};
      }
    }

    /* ===============================
       SCROLLBAR PERSONALIZADO
    =============================== */
    ::-webkit-scrollbar { width: 10px; }
    ::-webkit-scrollbar-thumb { background: ${theme.colors.primary}; border-radius: ${theme.borderRadius.sm}; }
    ::-webkit-scrollbar-track { background: ${theme.colors.background}; }

    /* ===============================
       REMOVER PADDING AUTOMÁTICO DE SECTIONS
    =============================== */
    section {
      padding: 0 !important;
    }

    /* ===============================
       IDs DE CONTEÚDO
    =============================== */
    #main-content {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `}
`;
