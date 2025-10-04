// src/components/layout/UserPanelLazy.test.tsx

import React, { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserPanelLazy from "./UserPanelLazy";
import "@testing-library/jest-dom";

// 🔹 Mock do next/link corretamente com factory function
jest.mock("next/link", () => {
  const React = require("react");
  const Link = ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  Link.displayName = "Link";
  return Link;
});

// 🔹 Mock dos styled-components
interface StyledProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

jest.mock("./UserPanelLazy.styles", () => {
  const React = require("react");

  const UserPanelContainer = ({ children, ...props }: StyledProps) => (
    <div role="menu" aria-label="Opções do usuário" {...props}>
      {children}
    </div>
  );
  UserPanelContainer.displayName = "UserPanelContainer";

  const UserPanelLink = ({ children, ...props }: ButtonProps) => (
    <button {...props}>{children}</button>
  );
  UserPanelLink.displayName = "UserPanelLink";

  return { UserPanelContainer, UserPanelLink };
});

describe("UserPanelLazy component", () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Login and Cadastrar links", () => {
    render(<UserPanelLazy onClose={onCloseMock} />);

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar")).toBeInTheDocument();

    // Verifica href correto
    expect(screen.getByText("Login").closest("a")).toHaveAttribute("href", "/login");
    expect(screen.getByText("Cadastrar").closest("a")).toHaveAttribute("href", "/register");
  });

  it("calls onClose when Login is clicked", () => {
    render(<UserPanelLazy onClose={onCloseMock} />);
    fireEvent.click(screen.getByText("Login"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Cadastrar is clicked", () => {
    render(<UserPanelLazy onClose={onCloseMock} />);
    fireEvent.click(screen.getByText("Cadastrar"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("has correct ARIA attributes", () => {
    render(<UserPanelLazy onClose={onCloseMock} />);
    const container = screen.getByRole("menu", { name: "Opções do usuário" });
    expect(container).toBeInTheDocument();
  });
});
