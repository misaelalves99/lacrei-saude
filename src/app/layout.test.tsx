// src/app/layout.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";

// --------------------
// Mocks necessários
// --------------------

// Mock Google Fonts
jest.mock("next/font/google", () => ({
  Nunito: () => ({ variable: "mock-nunito" }),
}));

// Mock Header
jest.mock("./components/layout/Header", () => ({
  __esModule: true,
  default: () => <header data-testid="header" />,
}));

// Mock Footer
jest.mock("./components/layout/Footer", () => ({
  __esModule: true,
  default: () => <footer data-testid="footer" />,
}));

// Mock SkipToContent
jest.mock("./components/ui/SkipToContent", () => ({
  __esModule: true,
  SkipToContent: () => <a data-testid="skip-link">Skip</a>,
}));

// Mock AuthProvider
jest.mock("./contexts/AuthProvider", () => ({
  __esModule: true,
  AuthProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="auth-provider">{children}</div>
  ),
}));

// Mock GlobalStyle (styled-components)
jest.mock("./styles/global-styles", () => ({
  __esModule: true,
  GlobalStyle: () => null,
}));

// Mock theme
jest.mock("./styles/theme", () => ({
  theme: {},
}));

// --------------------
// Testes
// --------------------
describe("RootLayout", () => {
  it("renderiza Header, Footer, SkipToContent e children dentro do AuthProvider", () => {
    render(
      <RootLayout>
        <div data-testid="children">Conteúdo principal</div>
      </RootLayout>
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("skip-link")).toBeInTheDocument();
    expect(screen.getByTestId("auth-provider")).toBeInTheDocument();
    expect(screen.getByTestId("children")).toBeInTheDocument();
  });

  it("renderiza o main com id 'main-content'", () => {
    render(
      <RootLayout>
        <div data-testid="main-child">Conteúdo do main</div>
      </RootLayout>
    );

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(screen.getByTestId("main-child")).toBeInTheDocument();
  });

  it("aplica a classe da fonte Nunito e lang pt-BR no html", () => {
    render(
      <RootLayout>
        <div>Teste</div>
      </RootLayout>
    );

    const html = document.querySelector("html");
    expect(html).toHaveClass("mock-nunito");
    expect(html).toHaveAttribute("lang", "pt-BR");
  });
});
