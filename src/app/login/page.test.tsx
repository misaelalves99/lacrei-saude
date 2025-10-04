// src/app/login/page.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from "./page";
import { AuthProvider } from "../contexts/AuthProvider";
import { Auth, User, Unsubscribe } from "firebase/auth";

// Mock do LoginForm
jest.mock("../components/auth/LoginForm", () => ({
  LoginForm: () => <div data-testid="login-form">Login Form Mock</div>,
}));

// Mock do Firebase usado pelo AuthProvider
jest.mock("../lib/firebase", () => ({
  auth: {} as Auth,
  googleProvider: {},
  facebookProvider: {},
}));

// Mock dos métodos do Firebase
jest.mock("firebase/auth", () => {
  const originalModule = jest.requireActual("firebase/auth");
  return {
    ...originalModule,
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(
      (auth: Auth, callback: (user: User | null) => void): Unsubscribe => {
        callback(null); // usuário não autenticado
        return () => {}; // unsubscribe
      }
    ),
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
