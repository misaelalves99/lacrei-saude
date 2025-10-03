// src/components/ui/IconButton.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { IconButton } from "./IconButton";
import '@testing-library/jest-dom';

// Mock do styled-components para ignorar theme
jest.mock("./IconButton.styles", () => ({
  ButtonStyled: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  IconWrapper: ({ children }: any) => <span>{children}</span>,
}));

describe("IconButton component", () => {
  const TestIcon = () => <svg data-testid="test-icon" />;

  it("renders button with correct aria-label", () => {
    render(<IconButton label="Search" icon={<TestIcon />} />);
    const button = screen.getByRole("button", { name: "Search" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "Search");
  });

  it("renders the icon inside the button", () => {
    render(<IconButton label="Search" icon={<TestIcon />} />);
    const icon = screen.getByTestId("test-icon");
    expect(icon).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<IconButton label="ClickMe" icon={<TestIcon />} onClick={handleClick} />);
    const button = screen.getByRole("button", { name: "ClickMe" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("accepts native button attributes like disabled", () => {
    render(<IconButton label="Disabled" icon={<TestIcon />} disabled />);
    const button = screen.getByRole("button", { name: "Disabled" });
    expect(button).toBeDisabled();
  });
});
