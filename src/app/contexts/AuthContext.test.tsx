// src/app/contexts/AuthContext.test.tsx

import { AuthContext, AuthContextType } from "./AuthContext";
import { UserCredential, User } from "firebase/auth";

describe("AuthContext", () => {
  it("deve ter a tipagem correta", () => {
    const mockUserCredential: UserCredential = {
      user: {} as Partial<User> as User, // mock mínimo
      providerId: "signIn",
      operationType: "signIn",
    };

    const value: AuthContextType = {
      user: null,
      loading: true,
      login: async () => {},
      register: async (_email: string, _password: string) => {
        void _email;
        void _password;
        return mockUserCredential;
      },
      loginWithProvider: async (_provider: "Google" | "Facebook") => {
        void _provider;
      },
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
