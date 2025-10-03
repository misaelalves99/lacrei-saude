// src/components/about/AboutSection.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { AboutSection } from "./AboutSection";
import { theme } from "../../styles/theme";
import "@testing-library/jest-dom";

// Helper para renderizar componentes com o ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("AboutSection component", () => {
  it("renders title, subtitle and children correctly", () => {
    renderWithTheme(
      <AboutSection title="Nossos Serviços" subtitle="Veja como podemos ajudar">
        <div>Child Content</div>
      </AboutSection>
    );

    const title = screen.getByRole("heading", { name: /nossos serviços/i });
    const subtitle = screen.getByText(/veja como podemos ajudar/i);
    const child = screen.getByText(/child content/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });

  it("generates correct id and aria-labelledby", () => {
    renderWithTheme(
      <AboutSection title="Serviços Especiais" subtitle="Detalhes">
        <div>Test Child</div>
      </AboutSection>
    );

    const section = screen.getByRole("region");
    const title = screen.getByRole("heading", { name: /serviços especiais/i });

    expect(title).toHaveAttribute("id", "serviços-especiais-title");
    expect(section).toHaveAttribute("aria-labelledby", "serviços-especiais-title");
  });

  it("supports multiple children", () => {
    renderWithTheme(
      <AboutSection title="Exemplo" subtitle="Sub exemplo">
        <p>Primeiro</p>
        <p>Segundo</p>
      </AboutSection>
    );

    expect(screen.getByText("Primeiro")).toBeInTheDocument();
    expect(screen.getByText("Segundo")).toBeInTheDocument();
  });
});
