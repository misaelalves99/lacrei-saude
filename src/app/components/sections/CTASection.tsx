// src/components/sections/CTASection.tsx

"use client";

import React from "react";
import { CTAWrapper, Title, Action } from "./CTASection.styles";
import { AccessibleButton } from "../ui/AccessibleButton";

export const CTASection: React.FC = () => {
  return (
    <CTAWrapper>
      <Title>Pronto para dar o próximo passo?</Title>
      <Action>
        <AccessibleButton label="Criar conta" />
      </Action>
    </CTAWrapper>
  );
};
