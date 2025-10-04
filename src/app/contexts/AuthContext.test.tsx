// src/app/contexts/AuthContext.test.tsx

import { AuthContext, AuthContextType } from "./AuthContext";
import { UserCredential, User } from "firebase/auth";

describe("AuthContext", () => {
  it("deve ter a tipagem correta", () => {
    const mockUserCredential: UserCredential = {
      user: {} as Partial<User> as User,
      providerId: "signIn",
      operationType: "signIn",
    };

    const value: AuthContextType = {
      user: null,
      loading: true,
      login: async () => {},
      register: async (_email: string, _password: string) => mockUserCredential,
      loginWithProvider: async (_provider: "Google" | "Facebook") => {},
      logout: async () => {},
    };

    expect(value.user).toBeNull();
    expect(value.loading).toBe(true);
    expect(typeof value.login).toBe("function");
    expect(typeof value.register).toBe("function");
    expect(typeof value.loginWithProvider).toBe("function");
    expect(typeof value.logout).toBe("function");
  });

  it("AuthContext deve ser criado corretamente", () => {
    expect(AuthContext).toBeDefined();
  });
});
