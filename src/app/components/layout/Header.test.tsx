// src/components/layout/Header.test.tsx

import React, { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import HeaderComponent from "./Header";
import "@testing-library/jest-dom";

// --------------------
// 🔹 Mocks
// --------------------

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: { children: ReactNode; href: string }) => <a href={href}>{children}</a>,
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

// Mock useAuth
const mockLogout = jest.fn();
jest.mock("../../hooks/useAuth", () => ({
  useAuth: () => ({
    user: { name: "Misael" },
    logout: mockLogout,
  }),
}));

// Mock styled-components
interface StyledProps extends HTMLAttributes<HTMLElement> { children?: ReactNode }
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { children?: ReactNode }
interface MobilePanelProps extends StyledProps { open?: boolean }

jest.mock("./Header.styles", () => ({
  HeaderContainer: (({ children, ...props }: StyledProps) => <div data-testid="header" {...props}>{children}</div>) as React.FC<StyledProps>,
  HeaderInner: (({ children, ...props }: StyledProps) => <div {...props}>{children}</div>) as React.FC<StyledProps>,
  Brand: (({ children, ...props }: StyledProps) => <div {...props}>{children}</div>) as React.FC<StyledProps>,
  Nav: (({ children, ...props }: StyledProps) => <nav {...props}>{children}</nav>) as React.FC<StyledProps>,
  List: (({ children, ...props }: StyledProps) => <ul {...props}>{children}</ul>) as React.FC<StyledProps>,
  Item: (({ children, ...props }: StyledProps) => <li {...props}>{children}</li>) as React.FC<StyledProps>,
  NavLink: (({ children, ...props }: StyledProps) => <span {...props}>{children}</span>) as React.FC<StyledProps>,
  UserButton: (({ children, ...props }: ButtonProps) => <button {...props}>{children}</button>) as React.FC<ButtonProps>,
  UserMenu: (({ children, ...props }: StyledProps) => <div data-testid="user-menu" {...props}>{children}</div>) as React.FC<StyledProps>,
  UserMenuItem: (({ children, ...props }: ButtonProps) => <button {...props}>{children}</button>) as React.FC<ButtonProps>,
  MenuButton: (({ children, ...props }: ButtonProps) => <button {...props}>{children}</button>) as React.FC<ButtonProps>,
  MobilePanel: (({ children, open, ...props }: MobilePanelProps) => (
    <div data-testid="mobile-menu" data-open={open} {...props}>{children}</div>
  )) as React.FC<MobilePanelProps>,
}));

// --------------------
// 🔹 Testes
// --------------------
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
    expect(mobileMenu).toHaveAttribute("data-open", "false");
  });

  it("renders correct ARIA roles", () => {
    render(<HeaderComponent />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByRole("menubar")).toBeInTheDocument();
  });
});
