// src/components/services/ServicesGrid.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { ServicesGrid } from "./ServicesGrid";

// Mock do ServiceCard para simplificar o teste
jest.mock("./ServiceCard", () => ({
  ServiceCard: ({ title, description, icon }: any) => (
    <div data-testid="service-card">
      <span data-testid="icon">{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  ),
}));

// Mock dos estilos (styled-components)
jest.mock("./ServicesGrid.styles", () => ({
  GridWrapper: ({ children }: any) => <div>{children}</div>,
}));

describe("ServicesGrid Component", () => {
  const expectedServices = [
    "Consulta Médica",
    "Exames Laboratoriais",
    "Telemedicina",
    "Acolhimento Psicológico",
    "Vacinação",
    "Educação em Saúde",
  ];

  it("renderiza todos os cards de serviço com os títulos corretos", () => {
    render(<ServicesGrid />);

    const cards = screen.getAllByTestId("service-card");
    expect(cards).toHaveLength(expectedServices.length); // 6 serviços

    cards.forEach((card, index) => {
      const title = card.querySelector("h2");
      expect(title).toBeInTheDocument();
      expect(title?.textContent).toBe(expectedServices[index]);

      const description = card.querySelector("p");
      expect(description).toBeInTheDocument();
      expect(description?.textContent).not.toBe(""); // garante que tem descrição
    });
  });

  it("cada card possui um ícone", () => {
    render(<ServicesGrid />);
    const cards = screen.getAllByTestId("service-card");

    cards.forEach((card) => {
      const icon = card.querySelector("[data-testid='icon']");
      expect(icon).toBeInTheDocument();
    });
  });
});
