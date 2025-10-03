// src/components/contact/ContactHero.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactHero } from "./ContactHero";

// Mock dos estilos (styled-components + next/image)
jest.mock("./ContactHero.styles", () => ({
  HeroWrapper: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  HeroContent: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  HeroText: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  TitleHero: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  SubtitleHero: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  HeroImage: (props: any) => <img {...props} />,
}));

describe("ContactHero Component", () => {
  it("renderiza com valores padrão", () => {
    render(<ContactHero />);

    expect(
      screen.getByRole("region", { name: /fale conosco/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /fale conosco/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /entre em contato com a lacrei saúde para dúvidas, sugestões ou agendamento de serviços/i
      )
    ).toBeInTheDocument();

    const img = screen.getByRole("img", {
      name: /pessoa utilizando computador para contato/i,
    });
    expect(img).toHaveAttribute("src", "/assets/contact-hero.png");
    expect(img).toHaveAttribute("alt", "Pessoa utilizando computador para contato");
  });

  it("renderiza com props customizadas", () => {
    render(
      <ContactHero
        title="Suporte ao Cliente"
        subtitle="Estamos aqui para ajudar você!"
        imageSrc="/custom-image.png"
        imageAlt="Imagem personalizada"
      />
    );

    expect(
      screen.getByRole("heading", { name: /suporte ao cliente/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/estamos aqui para ajudar você!/i)).toBeInTheDocument();

    const img = screen.getByRole("img", { name: /imagem personalizada/i });
    expect(img).toHaveAttribute("src", "/custom-image.png");
  });
});
