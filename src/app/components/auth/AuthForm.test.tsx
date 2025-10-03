// src/components/auth/AuthForm.test.tsx

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { AuthForm } from "./AuthForm";
import { theme } from "../../styles/theme";
import "@testing-library/jest-dom";

// Helper para renderizar com tema
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("AuthForm Component", () => {
  const mockOnSubmit = jest.fn();
  const mockOnSocialLogin = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders login form by default", () => {
    renderWithTheme(
      <AuthForm
        type="login"
        onSubmit={mockOnSubmit}
        onSocialLogin={mockOnSocialLogin}
      />
    );

    expect(screen.getByRole("heading", { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  it("renders register form with name field", () => {
    renderWithTheme(
      <AuthForm
        type="register"
        onSubmit={mockOnSubmit}
        onSocialLogin={mockOnSocialLogin}
      />
    );

    expect(screen.getByRole("heading", { name: /criar conta/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/nome completo/i)).toBeInTheDocument();
  });

  it("shows error message when error prop is passed", () => {
    renderWithTheme(
      <AuthForm
        type="login"
        onSubmit={mockOnSubmit}
        onSocialLogin={mockOnSocialLogin}
        error="Credenciais inválidas"
      />
    );

    expect(screen.getByText(/credenciais inválidas/i)).toBeInTheDocument();
  });

  it("submits login form with correct data", async () => {
    renderWithTheme(
      <AuthForm
        type="login"
        onSubmit={mockOnSubmit}
        onSocialLogin={mockOnSocialLogin}
      />
    );

    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    await waitFor(() =>
      expect(mockOnSubmit).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "123456",
      })
    );
  });

  it("submits register form with correct data", async () => {
    renderWithTheme(
      <AuthForm
        type="register"
        onSubmit={mockOnSubmit}
        onSocialLogin={mockOnSocialLogin}
      />
    );

    fireEvent.change(screen.getByPlaceholderText(/nome completo/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), {
      target: { value: "secret" },
    });

    fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));

    await waitFor(() =>
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: "John Doe",
        email: "john@example.com",
        password: "secret",
      })
    );
  });

  it("toggles password visibility", () => {
    renderWithTheme(
      <AuthForm
        type="login"
        onSubmit={mockOnSubmit}
        onSocialLogin={mockOnSocialLogin}
      />
    );

    const passwordInput = screen.getByPlaceholderText(/senha/i);
    const toggleButton = screen.getByRole("button", { name: /mostrar senha/i });

    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute("type", "text");
    expect(toggleButton).toHaveAttribute("aria-label", "Ocultar senha");
  });

  it("calls onSocialLogin when social buttons are clicked", () => {
    renderWithTheme(
      <AuthForm
        type="login"
        onSubmit={mockOnSubmit}
        onSocialLogin={mockOnSocialLogin}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /google/i }));
    fireEvent.click(screen.getByRole("button", { name: /facebook/i }));

    expect(mockOnSocialLogin).toHaveBeenCalledTimes(2);
    expect(mockOnSocialLogin).toHaveBeenCalledWith("Google");
    expect(mockOnSocialLogin).toHaveBeenCalledWith("Facebook");
  });

  it("disables submit button when loading is true", () => {
    renderWithTheme(
      <AuthForm
        type="login"
        onSubmit={mockOnSubmit}
        onSocialLogin={mockOnSocialLogin}
        loading={true}
      />
    );

    const button = screen.getByRole("button", { name: /entrar/i });
    expect(button).toBeDisabled();
  });
});
