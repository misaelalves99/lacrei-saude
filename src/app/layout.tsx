// src/app/layout.tsx
"use client";

import React from "react";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global-styles";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { SkipToContent } from "./components/ui/SkipToContent";
import { AuthProvider } from "./contexts/AuthProvider";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="A Lacrei Saúde conecta pessoas LGBTQIA+ a profissionais de saúde que oferecem atendimento acolhedor, inclusivo e sem julgamentos."
        />
        <meta
          name="keywords"
          content="LGBTQIA+, saúde inclusiva, acolhimento, diversidade, acessibilidade"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.colors.primary} />
        <title>Lacrei Saúde</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SkipToContent />

          <AuthProvider>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
