// src/app/components/contact/ContactHero.test.tsx

/* eslint-disable @next/next/no-img-element */
import React, { ReactNode, HTMLAttributes } from "react";
import { render, screen } from "@testing-library/react";
import { ContactHero } from "./ContactHero";

// Tipagem helper para children
interface StyledProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

// 🔹 Mock do next/image
jest.mock("next/image", () => {
  const NextImage: React.FC<{ src: string; alt: string; [key: string]: unknown }> = ({
    src,
    alt,
    ...props
  }) => <img src={src} alt={alt} {...props} />;
  NextImage.displayName = "NextImage";
  return { __esModule: true, default: NextImage };
});

// 🔹 Mock dos estilos (styled-components)
jest.mock("./ContactHero.styles", () => {
  const HeroWrapper: React.FC<StyledProps> = ({ children, ...props }) => <div {...props}>{children}</div>;
  HeroWrapper.displayName = "HeroWrapper";

  const HeroContent: React.FC<StyledProps> = ({ children, ...props }) => <div {...props}>{children}</div>;
  HeroContent.displayName = "HeroContent";

  const HeroText: React.FC<StyledProps> = ({ children, ...props }) => <div {...props}>{children}</div>;
  HeroText.displayName = "HeroText";

  const TitleHero: React.FC<StyledProps> = ({ children, ...props }) => <h1 {...props}>{children}</h1>;
  TitleHero.displayName = "TitleHero";

  const SubtitleHero: React.FC<StyledProps> = ({ children, ...props }) => <p {...props}>{children}</p>;
  SubtitleHero.displayName = "SubtitleHero";

  const HeroImage: React.FC<{ src: string; alt: string } & StyledProps> = ({ src, alt, ...props }) => (
    <img src={src} alt={alt} {...props} />
  );
  HeroImage.displayName = "HeroImage";

  return { HeroWrapper, HeroContent, HeroText, TitleHero, SubtitleHero, HeroImage };
});

describe("ContactHero Component", () => {
  it("renderiza com valores padrão", () => {
    render(<ContactHero />);

    expect(screen.getByRole("region", { name: /fale conosco/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /fale conosco/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /entre em contato com a lacrei saúde para dúvidas, sugestões ou agendamento de serviços/i
      )
    ).toBeInTheDocument();

    const img = screen.getByRole("img", { name: /pessoa utilizando computador para contato/i });
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

    expect(screen.getByRole("heading", { name: /suporte ao cliente/i })).toBeInTheDocument();
    expect(screen.getByText(/estamos aqui para ajudar você!/i)).toBeInTheDocument();

    const img = screen.getByRole("img", { name: /imagem personalizada/i });
    expect(img).toHaveAttribute("src", "/custom-image.png");
  });
});
