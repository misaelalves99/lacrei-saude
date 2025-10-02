// src/styles/theme.ts
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#018383", // verde-água principal
    primaryDark: "#014687", // azul profundo secundário
    background: "#FFFFFF",
    backgroundGradient: "linear-gradient(180deg, #F0FDFD 0%, #E6F4F1 100%)",
    text: "#1F2937", // cinza escuro, acessível
    white: "#FFFFFF",
    gray: "#6B7280",
    grayLight: "#F9FAFB",
  },
  radius: {
    sm: "4px",
    md: "6px",
    lg: "12px",
    full: "9999px",
  },
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Inter", system-ui, sans-serif',
  },
};
