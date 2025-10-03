// src/components/services/ServiceCard.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { ServiceCard } from "./ServiceCard";

// Mock dos estilos (styled-components)
jest.mock("./ServiceCard.styles", () => ({
  CardWrapper: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardTitle: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  CardDescription: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  CardButton: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

// Mock do Link do Next.js
jest.mock("next/link", () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe("ServiceCard Component", () => {
  const props = {
    title: "Consultas Online",
    description: "Atendimento médico remoto com segurança e comodidade.",
    icon: <span data-testid="icon">🌐</span>,
    link: "/servicos/online",
  };

  it("renderiza título, descrição e ícone", () => {
    render(<ServiceCard {...props} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /consultas online/i })).toBeInTheDocument();
    expect(screen.getByText(/atendimento médico remoto/i)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renderiza o botão com link correto", () => {
    render(<ServiceCard {...props} />);

    const button = screen.getByRole("button", { name: /saiba mais/i });
    expect(button).toBeInTheDocument();
    expect(button.closest("a")).toHaveAttribute("href", "/servicos/online");
  });

  it("usa link padrão '/' quando não fornecido", () => {
    const { rerender } = render(<ServiceCard {...props} link={undefined} />);
    const button = screen.getByRole("button", { name: /saiba mais/i });
    expect(button.closest("a")).toHaveAttribute("href", "/");
  });
});
