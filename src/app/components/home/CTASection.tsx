// src/app/components/home/CTASection.tsx

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CTAWrapper, Title, Action } from "./CTASection.styles";
import { AccessibleButton } from "../ui/AccessibleButton";

export const CTASection: React.FC = () => {
  const router = useRouter();

  return (
    <CTAWrapper role="region" aria-labelledby="cta-title">
      <Title id="cta-title">Pronto para dar o próximo passo?</Title>
      <Action>
        <AccessibleButton
          label="Criar conta"
          onClick={() => router.push("/register")}
        />
      </Action>
    </CTAWrapper>
  );
};
