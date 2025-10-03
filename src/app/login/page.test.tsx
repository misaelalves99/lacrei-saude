// src/app/login/page.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from "./page";
import { AuthProvider } from "../contexts/AuthProvider";

// Mock do LoginForm para não depender do formulário real
jest.mock("../components/auth/LoginForm", () => ({
  LoginForm: () => <div data-testid="login-form">Login Form Mock</div>,
}));

// Mock do Firebase e métodos usados pelo AuthProvider
jest.mock("../lib/firebase", () => ({
  auth: {},
  googleProvider: {},
  facebookProvider: {},
}));

jest.mock("firebase/auth", () => {
  const originalModule = jest.requireActual("firebase/auth");
  return {
    ...originalModule,
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn((auth, callback) => {
      callback(null); // simula usuário não autenticado
      return jest.fn(); // unsubscribe
    }),
    GoogleAuthProvider: jest.fn(),
    FacebookAuthProvider: jest.fn(),
  };
});

describe("LoginPage", () => {
  it("renderiza o LoginForm corretamente", () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    const loginForm = screen.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();
  });
});
