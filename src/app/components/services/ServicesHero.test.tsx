// src/components/services/ServicesHero.test.tsx

import React, { ReactNode, HTMLAttributes } from "react";
import { render, screen } from "@testing-library/react";
import { ServicesHero } from "./ServicesHero";

// 🔹 Mock do next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

// 🔹 Mock dos estilos (styled-components)
interface StyledProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

jest.mock("./ServicesHero.styles", () => ({
  HeroWrapper: ({ children, ...props }: StyledProps) => <div {...props}>{children}</div>,
  HeroContent: ({ children, ...props }: StyledProps) => <div {...props}>{children}</div>,
  HeroText: ({ children, ...props }: StyledProps) => <div {...props}>{children}</div>,
  TitleHero: ({ children, ...props }: StyledProps) => <h1 {...props}>{children}</h1>,
  SubtitleHero: ({ children, ...props }: StyledProps) => <p {...props}>{children}</p>,
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
