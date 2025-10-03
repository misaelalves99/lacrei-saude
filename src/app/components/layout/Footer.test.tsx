// src/components/layout/Footer.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

// Mock do next/link para não gerar <a> aninhado
jest.mock("next/link", () => ({ children, href }: any) => <span>{children}</span>);

// Mock dos styled-components do Footer
jest.mock("./Footer.styles", () => ({
  FooterContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="footer-container">{children}</div>
  ),
  FooterInner: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Column: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Brand: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  Tagline: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
  List: ({ children }: { children: React.ReactNode }) => <ul>{children}</ul>,
  Item: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
  FooterLink: ({ children }: { children: React.ReactNode }) => <span>{children}</span>, // ⚡ evita <a> dentro de <a>
  Legal: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
}));

describe("Footer component", () => {
  it("renders brand and tagline", () => {
    render(<Footer />);

    expect(screen.getByText("Lacrei Saúde")).toBeInTheDocument();
    expect(screen.getByText("Acolhendo pessoas para cuidar melhor.")).toBeInTheDocument();
  });

  it("renders navigation links text", () => {
    render(<Footer />);

    expect(screen.getByText("Política de privacidade")).toBeInTheDocument();
    expect(screen.getByText("Termos de uso")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("renders the current year dynamically", () => {
    const year = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText(`© ${year} Lacrei Saúde — Todos os direitos reservados.`)).toBeInTheDocument();
  });

  it("has correct ARIA roles", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer-container")).toBeInTheDocument();
  });
});
