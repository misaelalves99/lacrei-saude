// src/components/layout/Header.test.tsx

import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import HeaderComponent from "./Header";
import '@testing-library/jest-dom';

// 🔹 Mock next/link
jest.mock("next/link", () => ({ children, href }: any) => <a href={href}>{children}</a>);

// 🔹 Mock next/image
jest.mock("next/image", () => (props: any) => <img {...props} alt={props.alt} />);

// 🔹 Mock useAuth
const mockLogout = jest.fn();
jest.mock("../../hooks/useAuth", () => ({
  useAuth: () => ({
    user: { name: "Misael" },
    logout: mockLogout,
  }),
}));

// 🔹 Mock styled-components
jest.mock("./Header.styles", () => ({
  HeaderContainer: ({ children, ...props }: any) => <div data-testid="header" {...props}>{children}</div>,
  HeaderInner: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Brand: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
  List: ({ children, ...props }: any) => <ul {...props}>{children}</ul>,
  Item: ({ children, ...props }: any) => <li {...props}>{children}</li>,
  NavLink: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  UserButton: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  UserMenu: ({ children, ...props }: any) => <div data-testid="user-menu" {...props}>{children}</div>,
  UserMenuItem: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  MenuButton: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  MobilePanel: ({ children, open, ...props }: any) => <div data-testid="mobile-menu" data-open={open} {...props}>{children}</div>,
}));

describe("HeaderComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders brand/logo and main navigation links", () => {
    render(<HeaderComponent />);
    expect(screen.getByAltText("Lacrei Saúde")).toBeInTheDocument();

    const mainNav = screen.getByRole("menubar");
    const navLinks = ["Home", "Serviços", "Sobre", "Contato"];
    navLinks.forEach((text) => {
      expect(within(mainNav).getByText(text)).toBeInTheDocument();
    });
  });

  it("renders user menu button", () => {
    render(<HeaderComponent />);
    const userButton = screen.getByLabelText("Menu do usuário");
    expect(userButton).toBeInTheDocument();
  });

  it("opens and closes user menu on click", () => {
    render(<HeaderComponent />);
    const userButton = screen.getByLabelText("Menu do usuário");

    fireEvent.click(userButton);

    const userMenu = screen.getByTestId("user-menu");
    expect(within(userMenu).getByText("Sair")).toBeInTheDocument();

    fireEvent.click(userButton);
    // Aqui você pode checar se o menu foi escondido via data-open ou estilo
    expect(userMenu).not.toBeVisible();
  });

  it("calls logout when clicking 'Sair'", () => {
    render(<HeaderComponent />);
    const userButton = screen.getByLabelText("Menu do usuário");
    fireEvent.click(userButton);

    const userMenu = screen.getByTestId("user-menu");
    const logoutItem = within(userMenu).getByText("Sair");
    fireEvent.click(logoutItem);

    expect(mockLogout).toHaveBeenCalled();
  });

  it("toggles mobile menu", () => {
    render(<HeaderComponent />);
    const menuButton = screen.getByLabelText("Abrir menu");
    fireEvent.click(menuButton);

    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(within(mobileMenu).getByText("Home")).toBeInTheDocument();
    expect(within(mobileMenu).getByText("Serviços")).toBeInTheDocument();

    fireEvent.click(menuButton);
    // ainda renderiza, mas o open deve estar false
    expect(mobileMenu).toHaveAttribute("data-open", "false");
  });

  it("renders correct ARIA roles", () => {
    render(<HeaderComponent />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByRole("menubar")).toBeInTheDocument();
  });
});
