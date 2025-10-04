// src/app/contexts/AuthContext.test.tsx

import { AuthContext, AuthContextType } from "./AuthContext";
import { UserCredential } from "firebase/auth";

describe("AuthContext", () => {
  it("deve ter a tipagem correta", () => {
    const mockUserCredential: UserCredential = {
      user: {} as any, // mock mínimo
      providerId: "signIn",
      operationType: "signIn",
    };

    const value: AuthContextType = {
      user: null,
      loading: true,
      login: async () => {}, // retorna void
      register: async (_email: string, _password: string) => mockUserCredential, // retorna UserCredential
      loginWithProvider: async (_provider: "Google" | "Facebook") => {}, // retorna void
      logout: async () => {},
    };

    // Verifica valores iniciais
    expect(value.user).toBeNull();
    expect(value.loading).toBe(true);

    // Verifica se as funções existem
    expect(typeof value.login).toBe("function");
    expect(typeof value.register).toBe("function");
    expect(typeof value.loginWithProvider).toBe("function");
    expect(typeof value.logout).toBe("function");
  });

  it("AuthContext deve ser criado corretamente", () => {
    expect(AuthContext).toBeDefined();
  });
});
