// src/lib/msw/handlers.ts

import { rest } from "msw";

export const handlers = [
  rest.get("/api/health", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ status: "ok", message: "API mockada está funcionando 🚀" })
    );
  }),

  rest.post("/api/login", async (req, res, ctx) => {
    const { email, password } = await req.json();
    if (email === "test@lacrei.com" && password === "123456") {
      return res(
        ctx.status(200),
        ctx.json({ token: "fake-jwt-token", user: { email } })
      );
    }
    return res(ctx.status(401), ctx.json({ error: "Credenciais inválidas" }));
  }),
];
