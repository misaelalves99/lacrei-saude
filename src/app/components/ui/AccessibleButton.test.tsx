// src/components/ui/AccessibleButton.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AccessibleButton } from "./AccessibleButton";
import '@testing-library/jest-dom';

// Mock do ButtonStyled para ignorar styled-components e theme
jest.mock("./AccessibleButton.styles", () => ({
  ButtonStyled: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

describe("AccessibleButton component", () => {
  it("renders button with correct label", () => {
    render(<AccessibleButton label="Click me" />);

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveAttribute("aria-label", "Click me");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<AccessibleButton label="Submit" onClick={handleClick} />);

    const button = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("accepts other native button attributes", () => {
    render(<AccessibleButton label="Disabled" disabled />);

    const button = screen.getByRole("button", { name: "Disabled" });
    expect(button).toBeDisabled();
  });

  it("renders children as label content", () => {
    render(<AccessibleButton label="Save" />);

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveTextContent("Save");
  });
});
