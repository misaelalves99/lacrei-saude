// src/app/styles/theme.ts

export const theme = {
  colors: {
    // 🎨 Cores principais
    primary: 'rgb(1, 135, 98)',
    primaryDark: 'rgba(0, 122, 88, 1)', // hover do primary
    secondary: '#FFFFFF',
    secondaryDark: '#5b2d83', // hover do secondary

    // 🌈 Cores de fundo
    background: "#FFFFFF",
    backgroundLight: "rgb(249, 243, 255);",
    backgroundGradient: "linear-gradient(135deg, #F3F8F7 0%, #EEF7F6 100%)",

    // 🖌️ Cores adicionais e bordas
    border: "#DDDDDD",
    grayLight: "#F5F5F5",
    gray: "#9E9E9E",

    // 🕶️ Cores de texto
    text: "#333333",
    textLight: "#666666",

    // ⚫️ Branco e preto
    white: "#FFFFFF",
    black: "#000000",

    // 🌊 Cores extras para gradientes e contrastes
    darkBlue: "#014041",
    lightBlue: "#00837D",

    lightPurple: "#F9F3FF",

    accent: '#00A39D',  
  },

  fonts: {
    // 🖋️ Fonte principal global
    family: `'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
    sizes: {
      xs: "0.75rem",
      small: "0.875rem",
      medium: "1rem",
      large: "1.125rem",
      xl: "1.5rem",
      xxl: "2.5rem",
      xxxl: "3rem",
    },

    weights: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },
  },

  spacings: {
    xxs: "0.25rem",
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
    xxxl: "6rem",
  },

  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
    largeDesktop: "1200px",
  },

  containerWidth: "1140px",

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "20px",
    full: "9999px",
  },

  shadows: {
    soft: "0 2px 8px rgba(0, 0, 0, 0.08)",
    medium: "0 6px 18px rgba(0, 0, 0, 0.12)",
    strong: "0 8px 24px rgba(0, 0, 0, 0.15)",
  },

  transition: "all 0.2s ease-in-out",
} as const;

export type Theme = typeof theme;
export default theme;
