// src/components/home/CTASection.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CTASection } from "./CTASection";

// 🔹 Mock do next/navigation com jest
const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

// 🔹 Mock do AccessibleButton
jest.mock("../ui/AccessibleButton", () => ({
  AccessibleButton: ({ label, onClick }: { label: string; onClick: () => void }) => (
    <button aria-label={label} onClick={onClick}>
      {label}
    </button>
  ),
}));

// 🔹 Mock dos estilos (styled-components)
jest.mock("./CTASection.styles", () => ({
  CTAWrapper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="cta-wrapper">{children}</div>
  ),
  Title: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  Action: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("CTASection Component (Home)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza título e botão corretamente", () => {
    render(<CTASection />);

    const wrapper = screen.getByTestId("cta-wrapper");
    expect(wrapper).toBeInTheDocument();

    const heading = screen.getByRole("heading", { name: /pronto para dar o próximo passo\?/i });
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /criar conta/i });
    expect(button).toBeInTheDocument();
  });

  it("navega para /register ao clicar no botão", () => {
    render(<CTASection />);

    const button = screen.getByRole("button", { name: /criar conta/i });
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenCalledWith("/register");
  });
});
