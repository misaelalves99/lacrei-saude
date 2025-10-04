// src/components/services/ServiceCard.test.tsx

import React, { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";
import { render, screen } from "@testing-library/react";
import { ServiceCard } from "./ServiceCard";

// 🔹 Mock dos estilos (styled-components)
interface StyledProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

jest.mock("./ServiceCard.styles", () => {
  const CardWrapper = ({ children, ...props }: StyledProps) => (
    <div role="article" {...props}>{children}</div>
  );
  CardWrapper.displayName = "CardWrapper";

  const CardTitle = ({ children, ...props }: StyledProps) => <h2 {...props}>{children}</h2>;
  CardTitle.displayName = "CardTitle";

  const CardDescription = ({ children, ...props }: StyledProps) => <p {...props}>{children}</p>;
  CardDescription.displayName = "CardDescription";

  const CardButton = ({ children, ...props }: ButtonProps) => <button {...props}>{children}</button>;
  CardButton.displayName = "CardButton";

  return { CardWrapper, CardTitle, CardDescription, CardButton };
});

// 🔹 Mock do Link do Next.js
jest.mock("next/link", () => {
  return ({ children, href }: { children: ReactNode; href: string }) => <a href={href}>{children}</a>;
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
    render(<ServiceCard {...props} link={undefined} />);
    const button = screen.getByRole("button", { name: /saiba mais/i });
    expect(button.closest("a")).toHaveAttribute("href", "/");
  });
});
