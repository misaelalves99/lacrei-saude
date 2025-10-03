// src/components/contact/ContactCards.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactCards } from "./ContactCards";

// Mock dos estilos (styled-components)
jest.mock("./ContactCards.styles", () => ({
  ContactGrid: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="contact-grid">{children}</div>
  ),
  ContactCard: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="contact-card">{children}</div>
  ),
  ContactCardTitle: ({ children }: { children: React.ReactNode }) => (
    <h3>{children}</h3>
  ),
  ContactCardText: ({ children }: { children: React.ReactNode }) => (
    <p>{children}</p>
  ),
}));

describe("ContactCards Component", () => {
  it("renderiza o grid de contatos", () => {
    render(<ContactCards />);
    expect(screen.getByTestId("contact-grid")).toBeInTheDocument();
  });

  it("renderiza exatamente 3 cards de contato", () => {
    render(<ContactCards />);
    const cards = screen.getAllByTestId("contact-card");
    expect(cards).toHaveLength(3);
  });

  it("renderiza corretamente o título e o texto de cada contato", () => {
    render(<ContactCards />);

    // Telefone
    expect(screen.getByText("Telefone")).toBeInTheDocument();
    expect(screen.getByText("(11) 99999-9999")).toBeInTheDocument();

    // E-mail
    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByText("contato@lacrei.com")).toBeInTheDocument();

    // Endereço
    expect(screen.getByText("Endereço")).toBeInTheDocument();
    expect(
      screen.getByText("Rua Exemplo, 123 - São Paulo, SP")
    ).toBeInTheDocument();
  });

  it("renderiza os ícones de contato", () => {
    render(<ContactCards />);
    const icons = screen.getAllByTestId("contact-icon");
    expect(icons).toHaveLength(3);
  });
});
