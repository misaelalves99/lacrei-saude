// src/app/contexts/AuthProvider.test.tsx

import React, { useContext } from "react";
import { render, screen, act } from "@testing-library/react";
import { AuthContext, AuthContextType } from "./AuthContext";
import { AuthProvider } from "./AuthProvider";
import type { UserCredential, Auth, NextOrObserver, User } from "firebase/auth";

// 🔹 Mock completo do Firebase
jest.mock("firebase/auth", () => {
  return {
    getAuth: jest.fn(() => ({})),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(
      (auth: object, callback: (user: any | null) => void) => {
        callback(null); // usuário inicial: null
        return jest.fn(); // unsubscribe mock
      }
    ),
    GoogleAuthProvider: jest.fn(),
    FacebookAuthProvider: jest.fn(),
  };
});

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

describe("AuthProvider", () => {
  const TestComponent = () => {
    const context = useContext(AuthContext);
    if (!context) return null;

    return (
      <div>
        <span data-testid="user">{context.user ? "logged" : "null"}</span>
        <span data-testid="loading">{context.loading ? "true" : "false"}</span>
        <button
          onClick={() => context.login("a@b.com", "123")}
          data-testid="login-btn"
        >
          login
        </button>
        <button onClick={() => context.logout()} data-testid="logout-btn">
          logout
        </button>
      </div>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza filhos com estado inicial correto", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId("user").textContent).toBe("null");
    expect(screen.getByTestId("loading").textContent).toBe("false");
  });

  it("chama login e logout corretamente", async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await act(async () => {
      screen.getByTestId("login-btn").click();
    });
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      "a@b.com",
      "123"
    );

    await act(async () => {
      screen.getByTestId("logout-btn").click();
    });
    expect(signOut).toHaveBeenCalled();
  });

  it("register retorna UserCredential", async () => {
    const userCredentialMock = {} as UserCredential;
    (createUserWithEmailAndPassword as jest.Mock).mockResolvedValue(
      userCredentialMock
    );

    let contextValue: AuthContextType | undefined;
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            contextValue = value;
            return null;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    let result: UserCredential | undefined;
    await act(async () => {
      if (contextValue) {
        result = await contextValue.register("test@example.com", "123456");
      }
    });

    expect(result).toBe(userCredentialMock);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      "test@example.com",
      "123456"
    );
  });

  it("loginWithProvider chama signInWithPopup para Google e Facebook", async () => {
    (signInWithPopup as jest.Mock).mockResolvedValue({});

    let contextValue: AuthContextType | undefined;
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            contextValue = value;
            return null;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    // Google
    await act(async () => {
      if (contextValue) await contextValue.loginWithProvider("Google");
    });
    expect(GoogleAuthProvider).toHaveBeenCalled();
    expect(signInWithPopup).toHaveBeenCalled();

    // Facebook
    await act(async () => {
      if (contextValue) await contextValue.loginWithProvider("Facebook");
    });
    expect(FacebookAuthProvider).toHaveBeenCalled();
    expect(signInWithPopup).toHaveBeenCalledTimes(2);
  });
});
