// src/components/ui/SkipToContent.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { SkipToContent } from "./SkipToContent";
import '@testing-library/jest-dom';

// Mock do styled-components para ignorar theme
jest.mock("./SkipToContent.styles", () => ({
  SkipLink: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

describe("SkipToContent component", () => {
  it("renders the skip link with correct text", () => {
    render(<SkipToContent />);
    const link = screen.getByRole("link", { name: /pular para o conteúdo principal/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("Pular para o conteúdo principal");
  });

  it("has the correct href attribute", () => {
    render(<SkipToContent />);
    const link = screen.getByRole("link", { name: /pular para o conteúdo principal/i });
    expect(link).toHaveAttribute("href", "#main-content");
  });

  it("is focusable (keyboard accessibility)", () => {
    render(<SkipToContent />);
    const link = screen.getByRole("link", { name: /pular para o conteúdo principal/i });
    link.focus();
    expect(link).toHaveFocus();
  });
});
