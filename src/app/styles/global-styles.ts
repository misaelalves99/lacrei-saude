// src/styles/global-styles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    font-size: 100%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  main {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  /* Melhor foco visível */
  :focus {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  /* Respeita prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
`;
