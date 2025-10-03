// src/app/hooks/useAuth.tsx

"use client";

import { useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthContext";

/**
 * Hook para consumir o contexto de autenticação Firebase.
 * 
 * @throws Se usado fora do AuthProvider.
 * @returns {AuthContextType} user, loading e métodos de autenticação
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth deve ser usado dentro de um AuthProvider. Envolva seu componente com <AuthProvider>."
    );
  }
  return context;
};
