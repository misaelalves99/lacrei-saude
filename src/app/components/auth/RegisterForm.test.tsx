// src/components/auth/RegisterForm.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RegisterForm } from "./RegisterForm";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme"; // ajuste o caminho
import "@testing-library/jest-dom";

// 🔹 Mock do next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// 🔹 Mock do hook useAuth
jest.mock("../../hooks/useAuth");

// 🔹 Mock do Firebase updateProfile
jest.mock("firebase/auth", () => ({
  updateProfile: jest.fn(),
}));

// 🔹 Helper para renderizar com tema
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("RegisterForm Component", () => {
  const mockPush = jest.fn();
  const mockRegister = jest.fn();
  const mockLoginWithProvider = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useAuth as jest.Mock).mockReturnValue({
      register: mockRegister,
      loginWithProvider: mockLoginWithProvider,
      user: null,
      loading: false,
    });
  });

  it("renders the AuthForm with register type", () => {
    renderWithTheme(<RegisterForm />);

    expect(
      screen.getByRole("heading", { name: /criar conta/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cadastrar/i })).toBeInTheDocument();
  });

  it("calls register, updateProfile and redirects on form submit", async () => {
    mockRegister.mockResolvedValueOnce({ user: { uid: "123" } });

    renderWithTheme(<RegisterForm />);

    fireEvent.change(screen.getByPlaceholderText(/nome completo/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith("test@example.com", "123456");
      expect(updateProfile).toHaveBeenCalledWith({ uid: "123" }, { displayName: "John Doe" });
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  it("calls loginWithProvider and redirects on Google login", async () => {
    renderWithTheme(<RegisterForm />);
    fireEvent.click(screen.getByRole("button", { name: /google/i }));

    await waitFor(() => {
      expect(mockLoginWithProvider).toHaveBeenCalledWith("Google");
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  it("calls loginWithProvider and redirects on Facebook login", async () => {
    renderWithTheme(<RegisterForm />);
    fireEvent.click(screen.getByRole("button", { name: /facebook/i }));

    await waitFor(() => {
      expect(mockLoginWithProvider).toHaveBeenCalledWith("Facebook");
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  it("disables submit button when loading is true", () => {
    (useAuth as jest.Mock).mockReturnValue({
      register: mockRegister,
      loginWithProvider: mockLoginWithProvider,
      user: null,
      loading: true,
    });

    renderWithTheme(<RegisterForm />);
    expect(screen.getByRole("button", { name: /cadastrar/i })).toBeDisabled();
  });
});
