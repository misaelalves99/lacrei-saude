// src/components/sections/Hero.tsx

"use client";
import React from "react";
import { HeroWrapper, Title, Subtitle, Actions } from "./Hero.styles";
import { AccessibleButton } from "../ui/AccessibleButton";

export const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <Title>Cuidados de saúde para todos</Title>
      <Subtitle>
        Garantimos que cada pessoa se sinta segura e acolhida ao buscar cuidado.
      </Subtitle>
      <Actions>
        <AccessibleButton label="Saiba mais" />
        <AccessibleButton label="Começar agora" />
      </Actions>
    </HeroWrapper>
  );
};
