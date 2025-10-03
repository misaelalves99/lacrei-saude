// src/components/about/AboutHero.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { AboutHero } from "./AboutHero";
import { theme } from "../../styles/theme";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("AboutHero component", () => {
  it("renders with default props", () => {
    renderWithTheme(<AboutHero />);

    const title = screen.getByRole("heading", { name: /sobre a lacrei saúde/i });
    const subtitle = screen.getByText(
      /Promovendo saúde acessível e inclusiva para todas as pessoas/i
    );
    const image = screen.getByRole("img", {
      name: /profissional de saúde atendendo paciente/i,
    });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/assets/about-hero.png");
  });

  it("renders with custom props", () => {
    renderWithTheme(
      <AboutHero
        title="Custom Title"
        subtitle="Custom Subtitle"
        imageSrc="/custom-image.png"
        imageAlt="Custom alt text"
      />
    );

    const title = screen.getByRole("heading", { name: /custom title/i });
    const subtitle = screen.getByText(/custom subtitle/i);
    const image = screen.getByRole("img", { name: /custom alt text/i });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/custom-image.png");
    expect(image).toHaveAttribute("alt", "Custom alt text");
  });

  it("has correct accessibility attributes", () => {
    renderWithTheme(<AboutHero />);

    const region = screen.getByRole("region");
    expect(region).toHaveAttribute("aria-labelledby", "hero-title");

    const title = screen.getByRole("heading", { name: /sobre a lacrei saúde/i });
    expect(title).toHaveAttribute("id", "hero-title");
  });
});
