// src/components/ui/IconButton.tsx

"use client";

import React from "react";
import { IconWrapper, ButtonStyled } from "./IconButton.styles";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, label, ...props }) => {
  return (
    <ButtonStyled aria-label={label} {...props}>
      <IconWrapper>{icon}</IconWrapper>
    </ButtonStyled>
  );
};
