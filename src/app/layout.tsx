// src/app/layout.tsx

"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global-styles";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { SkipToContent } from "./components/ui/SkipToContent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Lacrei Saúde</title>
        <meta name="description" content="Plataforma de saúde acessível e inclusiva" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SkipToContent />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
