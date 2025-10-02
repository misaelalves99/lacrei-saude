// src/components/ui/AccessibleButton.tsx

"use client";

import React from "react";
import { ButtonStyled } from "./AccessibleButton.styles";

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({ label, ...props }) => {
  return (
    <ButtonStyled aria-label={label} {...props}>
      {label}
    </ButtonStyled>
  );
};
