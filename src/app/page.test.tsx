// src/app/page.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

// Mocks dos componentes usados dentro da HomePage
jest.mock("./components/home/Hero", () => ({
  Hero: () => <div data-testid="hero">Hero Component</div>,
}));
jest.mock("./components/home/CTASection", () => ({
  CTASection: () => <div data-testid="cta-section">CTASection Component</div>,
}));

describe("HomePage", () => {
  it("renderiza o Hero e o CTASection", () => {
    render(<HomePage />);

    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("cta-section")).toBeInTheDocument();
  });
});
