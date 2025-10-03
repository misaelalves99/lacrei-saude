// src/app/sobre/page.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPage from "./page";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

// Mocks dos componentes internos
jest.mock("../components/about/AboutHero", () => ({
  AboutHero: () => <div data-testid="about-hero">AboutHero Mock</div>,
}));

jest.mock("../components/about/AboutSection", () => ({
  AboutSection: ({ title, subtitle, children }: any) => (
    <div data-testid={`about-section-${title}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {children}
    </div>
  ),
}));

describe("AboutPage", () => {
  it("renderiza AboutHero e AboutSections corretamente", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutPage />
      </ThemeProvider>
    );

    // Verifica se o Hero está renderizado
    expect(screen.getByTestId("about-hero")).toBeInTheDocument();

    // Verifica se as seções estão renderizadas
    expect(screen.getByTestId("about-section-Nossa Missão")).toBeInTheDocument();
    expect(screen.getByTestId("about-section-Nossos Valores")).toBeInTheDocument();

    // Verifica títulos e subtítulos
    expect(screen.getByText("Nossa Missão")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Garantir que cada pessoa tenha acesso a cuidados de saúde de qualidade, com empatia, acolhimento e segurança."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Nossos Valores")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Princípios que orientam nossas ações e garantem confiança e segurança a todos."
      )
    ).toBeInTheDocument();
  });
});
