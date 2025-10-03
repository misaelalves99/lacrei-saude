// src/components/contact/ContactForm.test.tsx

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

// Mock dos estilos (styled-components)
jest.mock("./ContactForm.styles", () => ({
  Form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
  Label: ({ children, ...props }: any) => <label {...props}>{children}</label>,
  Input: (props: any) => <input {...props} />,
  TextArea: (props: any) => <textarea {...props} />,
  SubmitButton: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
  SuccessMessage: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
  ErrorMessage: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
}));

describe("ContactForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza os campos do formulário", () => {
    render(<ContactForm />);

    expect(
      screen.getByRole("form", { name: /formulário de contato da lacrei saúde/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("envia o formulário com sucesso", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    );

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: "Misael", name: "name" },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "teste@teste.com", name: "email" },
    });
    fireEvent.change(screen.getByLabelText(/mensagem/i), {
      target: { value: "Olá, mensagem de teste!", name: "message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() =>
      expect(
        screen.getByText(/✅ mensagem enviada com sucesso!/i)
      ).toBeInTheDocument()
    );

    // Verifica se os campos foram limpos
    expect((screen.getByLabelText(/nome/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/e-mail/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/mensagem/i) as HTMLTextAreaElement).value).toBe("");
  });

  it("exibe mensagem de erro quando a API falha", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false }),
      })
    );

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: "Misael", name: "name" },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "teste@teste.com", name: "email" },
    });
    fireEvent.change(screen.getByLabelText(/mensagem/i), {
      target: { value: "Erro teste", name: "message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() =>
      expect(
        screen.getByText(/❌ ocorreu um erro. tente novamente mais tarde./i)
      ).toBeInTheDocument()
    );
  });

  it("exibe mensagem de erro quando ocorre exceção no fetch", async () => {
    (global as any).fetch = jest.fn(() => Promise.reject("API offline"));

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: "Misael", name: "name" },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "teste@teste.com", name: "email" },
    });
    fireEvent.change(screen.getByLabelText(/mensagem/i), {
      target: { value: "Mensagem erro", name: "message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() =>
      expect(
        screen.getByText(/❌ ocorreu um erro. tente novamente mais tarde./i)
      ).toBeInTheDocument()
    );
  });

  it("desabilita o botão durante o envio", async () => {
    let resolveFetch: Function;
    (global as any).fetch = jest.fn(
      () =>
        new Promise((resolve) => {
          resolveFetch = () =>
            resolve({ json: () => Promise.resolve({ success: true }) });
        })
    );

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: "Teste", name: "name" },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "teste@teste.com", name: "email" },
    });
    fireEvent.change(screen.getByLabelText(/mensagem/i), {
      target: { value: "Teste mensagem", name: "message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    // Botão deve estar desabilitado enquanto o fetch não resolve
    expect(screen.getByRole("button")).toBeDisabled();

    // Resolve manualmente o fetch
    resolveFetch!();

    await waitFor(() =>
      expect(
        screen.getByText(/✅ mensagem enviada com sucesso!/i)
      ).toBeInTheDocument()
    );
  });
});
