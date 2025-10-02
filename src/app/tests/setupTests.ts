// src/tests/setupTests.ts

import "@testing-library/jest-dom";
import { server } from "../lib/mws/server";

// Configuração global para Jest + Testing Library + MSW

beforeAll(() => {
  if (server) {
    server.listen();
  }
});

afterEach(() => {
  if (server) {
    server.resetHandlers();
  }
});

afterAll(() => {
  if (server) {
    server.close();
  }
});
