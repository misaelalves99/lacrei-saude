// src/app/hooks/useAuth.test.tsx

import React from "react";
import { renderHook } from "@testing-library/react";

// Mock do Firebase antes de qualquer import do AuthProvider
jest.mock("firebase/auth", () => {
  return {
    getAuth: jest.fn(() => ({})), // mock do auth
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn((auth, callback) => {
      callback(null); // usuário não autenticado
      return jest.fn(); // unsubscribe
    }),
    GoogleAuthProvider: jest.fn(),
    FacebookAuthProvider: jest.fn(),
  };
});

// Agora podemos importar normalmente
import { useAuth } from "./useAuth";
import { AuthProvider } from "../contexts/AuthProvider";

describe("useAuth hook", () => {
  it("lança erro se usado fora do AuthProvider", () => {
    expect(() => renderHook(() => useAuth())).toThrow(
      "useAuth deve ser usado dentro de um AuthProvider. Envolva seu componente com <AuthProvider>."
    );
  });

  it("retorna o contexto corretamente dentro do AuthProvider", () => {
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    // Inicialmente user = null e funções definidas
    expect(result.current.user).toBeNull();
    expect(typeof result.current.login).toBe("function");
    expect(typeof result.current.register).toBe("function");
    expect(typeof result.current.loginWithProvider).toBe("function");
    expect(typeof result.current.logout).toBe("function");
  });
});
