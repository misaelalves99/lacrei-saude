// src/app/contexts/AuthContext.test.tsx

import { AuthContext, AuthContextType } from "./AuthContext";

describe("AuthContext", () => {
  it("deve ter a tipagem correta", () => {
    const value: AuthContextType = {
      user: null,
      loading: true,
      login: async () => {},
      register: async () => {
        return {} as any;
      },
      loginWithProvider: async () => {},
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
