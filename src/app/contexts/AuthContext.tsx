// src/app/contexts/AuthContext.tsx

"use client";

import { createContext } from "react";
import { User, UserCredential } from "firebase/auth";

// Tipagem do contexto
export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<UserCredential>;
  loginWithProvider: (provider: "Google" | "Facebook") => Promise<void>;
  logout: () => Promise<void>;
}

// Criação do contexto
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
