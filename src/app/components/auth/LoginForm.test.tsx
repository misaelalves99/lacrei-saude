// src/components/auth/LoginForm.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import "@testing-library/jest-dom";

// 🔹 Mock do useRouter do Next.js
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// 🔹 Mock do hook useAuth
jest.mock("../../hooks/useAuth");

// 🔹 Helper para renderizar com tema
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("LoginForm Component", () => {
  const mockPush = jest.fn();
  const mockLogin = jest.fn();
  const mockLoginWithProvider = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
      loginWithProvider: mockLoginWithProvider,
      user: null,
      loading: false,
    });
  });

  it("renders the AuthForm with login type", () => {
    renderWithTheme(<LoginForm />); // ✅ usar renderWithTheme

    expect(
      screen.getByRole("heading", { name: /entrar/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  it("calls login and redirects on form submit", async () => {
    renderWithTheme(<LoginForm />);

    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("test@example.com", "123456");
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  it("calls loginWithProvider and redirects on Google login", async () => {
    renderWithTheme(<LoginForm />);
    fireEvent.click(screen.getByRole("button", { name: /google/i }));

    await waitFor(() => {
      expect(mockLoginWithProvider).toHaveBeenCalledWith("Google");
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  it("calls loginWithProvider and redirects on Facebook login", async () => {
    renderWithTheme(<LoginForm />);
    fireEvent.click(screen.getByRole("button", { name: /facebook/i }));

    await waitFor(() => {
      expect(mockLoginWithProvider).toHaveBeenCalledWith("Facebook");
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  it("disables submit button when loading is true", () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
      loginWithProvider: mockLoginWithProvider,
      user: null,
      loading: true,
    });

    renderWithTheme(<LoginForm />);
    expect(screen.getByRole("button", { name: /entrar/i })).toBeDisabled();
  });
});
