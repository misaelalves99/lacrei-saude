// src/app/components/contact/ContactForm.test.tsx

import React, { ReactNode, createElement } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

// --------------------
// Mock dos estilos (styled-components) usando ESModules
// --------------------
jest.mock("./ContactForm.styles", () => ({
  Form: (props: React.FormHTMLAttributes<HTMLFormElement> & { children?: ReactNode }) =>
    createElement("form", props, props.children),

  Label: (props: React.LabelHTMLAttributes<HTMLLabelElement> & { children?: ReactNode }) =>
    createElement("label", props, props.children),

  Input: (props: React.InputHTMLAttributes<HTMLInputElement>) =>
    createElement("input", props),

  TextArea: (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) =>
    createElement("textarea", props),

  SubmitButton: (props: React.ButtonHTMLAttributes<HTMLButtonElement> & { children?: ReactNode }) =>
    createElement("button", props, props.children),

  SuccessMessage: (props: React.HTMLAttributes<HTMLDivElement> & { children?: ReactNode }) =>
    createElement("div", props, props.children),

  ErrorMessage: (props: React.HTMLAttributes<HTMLDivElement> & { children?: ReactNode }) =>
    createElement("div", props, props.children),
}));

// --------------------
// Helper para mockar fetch como Response válido
// --------------------
const mockResponse = (success: boolean): Response =>
  ({
    ok: success,
    status: success ? 200 : 400,
    json: async () => ({ success }),
    headers: new Headers(),
    redirected: false,
    type: "basic",
    url: "",
    clone() { return this; },
    body: null,
    bodyUsed: false,
    arrayBuffer: async () => new ArrayBuffer(0),
    blob: async () => new Blob(),
    formData: async () => new FormData(),
    text: async () => "",
  } as Response);

// --------------------
// Testes do ContactForm
// --------------------
describe("ContactForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza os campos do formulário", () => {
    render(<ContactForm />);

    expect(screen.getByRole("form", { name: /formulário de contato da lacrei saúde/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("envia o formulário com sucesso", async () => {
    global.fetch = jest.fn(() => Promise.resolve(mockResponse(true))) as jest.Mock;

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: "Misael" } });
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: "teste@teste.com" } });
    fireEvent.change(screen.getByLabelText(/mensagem/i), { target: { value: "Olá, mensagem de teste!" } });

    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() =>
      expect(screen.getByText(/✅ mensagem enviada com sucesso!/i)).toBeInTheDocument()
    );

    // Valida se os campos foram limpos
    expect((screen.getByLabelText(/nome/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/e-mail/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/mensagem/i) as HTMLTextAreaElement).value).toBe("");
  });

  it("exibe mensagem de erro quando a API falha", async () => {
    global.fetch = jest.fn(() => Promise.resolve(mockResponse(false))) as jest.Mock;

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: "Misael" } });
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: "teste@teste.com" } });
    fireEvent.change(screen.getByLabelText(/mensagem/i), { target: { value: "Erro teste" } });

    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() =>
      expect(screen.getByText(/❌ ocorreu um erro. tente novamente mais tarde./i)).toBeInTheDocument()
    );
  });

  it("exibe mensagem de erro quando ocorre exceção no fetch", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("API offline"))) as jest.Mock;

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: "Misael" } });
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: "teste@teste.com" } });
    fireEvent.change(screen.getByLabelText(/mensagem/i), { target: { value: "Mensagem erro" } });

    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() =>
      expect(screen.getByText(/❌ ocorreu um erro. tente novamente mais tarde./i)).toBeInTheDocument()
    );
  });

  it("desabilita o botão durante o envio e reabilita após resposta", async () => {
    let resolveFetch: (() => void) | undefined;

    global.fetch = jest.fn(
      () =>
        new Promise<Response>((resolve) => {
          resolveFetch = () => resolve(mockResponse(true));
        })
    ) as jest.Mock;

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: "Teste" } });
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: "teste@teste.com" } });
    fireEvent.change(screen.getByLabelText(/mensagem/i), { target: { value: "Teste mensagem" } });

    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    // Botão deve estar desabilitado
    expect(screen.getByRole("button")).toBeDisabled();

    // Simula resposta da API
    if (resolveFetch) resolveFetch();

    await waitFor(() =>
      expect(screen.getByText(/✅ mensagem enviada com sucesso!/i)).toBeInTheDocument()
    );

    // Botão volta a habilitar
    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
