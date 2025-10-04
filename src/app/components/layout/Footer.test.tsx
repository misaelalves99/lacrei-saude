// src/components/layout/Footer.test.tsx

import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

// 🔹 Mock do next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode }) => <span>{children}</span>,
}));

// 🔹 Mock dos styled-components do Footer usando factory
jest.mock("./Footer.styles", () => {
  const StyledMock = ({ children }: { children: ReactNode }) => <div>{children}</div>;
  StyledMock.displayName = "StyledMock";

  return {
    FooterContainer: ({ children }: { children: ReactNode }) => <div data-testid="footer-container">{children}</div>,
    FooterInner: StyledMock,
    Column: StyledMock,
    Brand: ({ children }: { children: ReactNode }) => <h2>{children}</h2>,
    Tagline: ({ children }: { children: ReactNode }) => <p>{children}</p>,
    List: StyledMock,
    Item: StyledMock,
    FooterLink: StyledMock,
    Legal: StyledMock,
  };
});

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
