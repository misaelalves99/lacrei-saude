// src/components/home/Hero.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Hero } from "./Hero";

// 🔹 Mock do next/navigation
const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
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
jest.mock("./Hero.styles", () => ({
  HeroWrapper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="hero-wrapper">{children}</div>
  ),
  Title: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  Subtitle: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
  Actions: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("Hero Component (Home)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza título, subtítulo e botões", () => {
    render(<Hero />);

    const wrapper = screen.getByTestId("hero-wrapper");
    expect(wrapper).toBeInTheDocument();

    const heading = screen.getByRole("heading", { name: /cuidados de saúde para todos/i });
    expect(heading).toBeInTheDocument();

    const subtitle = screen.getByText(
      /garantimos que cada pessoa se sinta segura e acolhida ao buscar cuidado/i
    );
    expect(subtitle).toBeInTheDocument();

    // Verifica os três botões
    expect(screen.getByRole("button", { name: /começar agora/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /saiba mais/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /contato/i })).toBeInTheDocument();
  });

  it("navega corretamente ao clicar nos botões", () => {
    render(<Hero />);

    fireEvent.click(screen.getByRole("button", { name: /começar agora/i }));
    expect(pushMock).toHaveBeenCalledWith("/servicos");

    fireEvent.click(screen.getByRole("button", { name: /saiba mais/i }));
    expect(pushMock).toHaveBeenCalledWith("/sobre");

    fireEvent.click(screen.getByRole("button", { name: /contato/i }));
    expect(pushMock).toHaveBeenCalledWith("/contato");

    expect(pushMock).toHaveBeenCalledTimes(3);
  });
});
