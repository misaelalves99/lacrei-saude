// src/styles/theme.ts
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#018383",
    primaryDark: "#014687",
    background: "#FFFFFF",
    backgroundGradient: "linear-gradient(180deg, #F0FDFD 0%, #E6F4F1 100%)",
    text: "#1F2937",
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
    body: "'Nunito', system-ui, sans-serif",
    heading: "'Nunito', system-ui, sans-serif",
  },
};
