// src/app/contato/page.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import ContatosPage from "./page";

// Mock dos componentes internos
jest.mock("../components/contact/ContactHero", () => ({
  ContactHero: () => <div data-testid="contact-hero">ContactHero</div>,
}));

jest.mock("../components/contact/ContactForm", () => ({
  ContactForm: () => <div data-testid="contact-form">ContactForm</div>,
}));

jest.mock("../components/contact/ContactCards", () => ({
  ContactCards: () => <div data-testid="contact-cards">ContactCards</div>,
}));

// Mock dos estilos (styled-components)
jest.mock("../contato/ContactPageWrapper.styles", () => ({
  ContactPageWrapper: ({ children }: any) => <section>{children}</section>,
  PageTitle: ({ children }: any) => <h2>{children}</h2>,
  PageSubtitle: ({ children }: any) => <p>{children}</p>,
}));

describe("ContatosPage Component", () => {
  beforeEach(() => {
    render(<ContatosPage />);
  });

  it("renderiza o main com id 'main-content'", () => {
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("id", "main-content");
  });

  it("renderiza o ContactHero", () => {
    expect(screen.getByTestId("contact-hero")).toBeInTheDocument();
  });

  it("renderiza o ContactForm com título e subtítulo", () => {
    expect(screen.getByRole("heading", { name: /fale conosco/i })).toBeInTheDocument();
    expect(
      screen.getByText(/preencha o formulário abaixo para enviar sua mensagem/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("renderiza o ContactCards com título e subtítulo", () => {
    expect(screen.getByRole("heading", { name: /informações de contato/i })).toBeInTheDocument();
    expect(
      screen.getByText(/você também pode nos contatar diretamente através/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId("contact-cards")).toBeInTheDocument();
  });
});
