// src/components/layout/UserPanelLazy.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserPanelLazy from "./UserPanelLazy";
import '@testing-library/jest-dom';

// 🔹 Mock do next/link
jest.mock("next/link", () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

// 🔹 Mock dos styled-components
jest.mock("./UserPanelLazy.styles", () => ({
  UserPanelContainer: ({ children, ...props }: any) => <div role="menu" {...props}>{children}</div>,
  UserPanelLink: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

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

    const loginLink = screen.getByText("Login");
    fireEvent.click(loginLink);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Cadastrar is clicked", () => {
    render(<UserPanelLazy onClose={onCloseMock} />);

    const registerLink = screen.getByText("Cadastrar");
    fireEvent.click(registerLink);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("has correct ARIA attributes", () => {
    render(<UserPanelLazy onClose={onCloseMock} />);

    const container = screen.getByRole("menu", { name: "Opções do usuário" });
    expect(container).toBeInTheDocument();
  });
});
