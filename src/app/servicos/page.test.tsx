// src/app/servicos/page.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import ServicesPage from "./page";
import { ThemeProvider } from "styled-components";
import { theme }  from "../styles/theme";

// Mocks dos componentes internos
jest.mock("../components/services/ServicesHero", () => ({
  ServicesHero: () => <div data-testid="services-hero">ServicesHero Mock</div>,
}));

jest.mock("../components/services/ServicesGrid", () => ({
  ServicesGrid: () => <div data-testid="services-grid">ServicesGrid Mock</div>,
}));

describe("ServicesPage", () => {
  it("renderiza o ServicesHero, ServicesGrid e títulos corretamente", () => {
    render(
      <ThemeProvider theme={theme}>
        <ServicesPage />
      </ThemeProvider>
    );

    // Verifica os mocks
    expect(screen.getByTestId("services-hero")).toBeInTheDocument();
    expect(screen.getByTestId("services-grid")).toBeInTheDocument();

    // Verifica títulos reais
    expect(screen.getByText("Serviços Disponíveis")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Descubra como podemos apoiar sua saúde com cuidado e profissionalismo."
      )
    ).toBeInTheDocument();
  });
});
