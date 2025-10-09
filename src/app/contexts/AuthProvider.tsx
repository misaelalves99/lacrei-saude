// src/app/contexts/AuthProvider.tsx
"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { auth } from "../lib/firebase";
import {
  User,
  UserCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { AuthContext, AuthContextType } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Persistência do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login: AuthContextType["login"] = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  const register: AuthContextType["register"] = async (email, password) => {
    setLoading(true);
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } finally {
      setLoading(false);
    }
  };

  const loginWithProvider: AuthContextType["loginWithProvider"] = async (providerName) => {
    setLoading(true);
    try {
      let provider: GoogleAuthProvider | FacebookAuthProvider | null = null;
      if (providerName === "Google") provider = new GoogleAuthProvider();
      if (providerName === "Facebook") provider = new FacebookAuthProvider();
      if (provider) await signInWithPopup(auth, provider);
    } finally {
      setLoading(false);
    }
  };

  const logout: AuthContextType["logout"] = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, loginWithProvider, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
