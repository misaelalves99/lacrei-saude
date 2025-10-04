// src/app/register/page.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import RegisterPage from "./page";
import { AuthProvider } from "../contexts/AuthProvider";
import { Auth, User, Unsubscribe } from "firebase/auth";

// Mock do RegisterForm
jest.mock("../components/auth/RegisterForm", () => ({
  RegisterForm: () => <div data-testid="register-form">Register Form Mock</div>,
}));

// Mock do Firebase usado pelo AuthProvider
jest.mock("../lib/firebase", () => ({
  auth: {} as Auth,
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
    onAuthStateChanged: jest.fn(
      (auth: Auth, callback: (user: User | null) => void): Unsubscribe => {
        callback(null); // simula usuário não autenticado
        return () => {}; // unsubscribe
      }
    ),
    GoogleAuthProvider: jest.fn(),
    FacebookAuthProvider: jest.fn(),
  };
});

describe("RegisterPage", () => {
  it("renderiza o RegisterForm corretamente", () => {
    render(
      <AuthProvider>
        <RegisterPage />
      </AuthProvider>
    );

    const registerForm = screen.getByTestId("register-form");
    expect(registerForm).toBeInTheDocument();
  });
});
