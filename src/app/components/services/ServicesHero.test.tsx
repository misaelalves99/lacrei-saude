// src/components/services/ServicesHero.test.tsx

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { render, screen } from "@testing-library/react";
import { ServicesHero } from "./ServicesHero";

// 🔹 Mock do next/image
jest.mock("next/image", () => {
  const NextImage = ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...props} />;
  NextImage.displayName = "Image";
  return { __esModule: true, default: NextImage };
});

// 🔹 Mock dos estilos (styled-components)
jest.mock("./ServicesHero.styles", () => ({
  HeroWrapper: ({ children, ...props }: { children?: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
  HeroContent: ({ children, ...props }: { children?: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
  HeroText: ({ children, ...props }: { children?: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
  TitleHero: ({ children, ...props }: { children?: React.ReactNode }) => (
    <h1 {...props}>{children}</h1>
  ),
  SubtitleHero: ({ children, ...props }: { children?: React.ReactNode }) => (
    <p {...props}>{children}</p>
  ),
}));

describe("ServicesHero Component", () => {
  it("renderiza título, subtítulo e imagem corretamente", () => {
    render(<ServicesHero />);

    // Verifica região e heading
    const region = screen.getByRole("region", { name: /nossos serviços/i });
    expect(region).toBeInTheDocument();

    const heading = screen.getByRole("heading", { name: /nossos serviços/i });
    expect(heading).toBeInTheDocument();

    const subtitle = screen.getByText(
      /oferecemos soluções de saúde inclusivas, seguras e acessíveis/i
    );
    expect(subtitle).toBeInTheDocument();

    const image = screen.getByAltText(/profissional de saúde atendendo paciente/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/assets/services-hero.png");
  });
});
