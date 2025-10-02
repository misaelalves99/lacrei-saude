// src/components/sections/Hero.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { HeroWrapper, Title, Subtitle, Actions } from "./Hero.styles";
import { AccessibleButton } from "../ui/AccessibleButton";

export const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <HeroWrapper>
      <Title>Cuidados de saúde para todos</Title>
      <Subtitle>
        Garantimos que cada pessoa se sinta segura e acolhida ao buscar cuidado.
      </Subtitle>
      <Actions>
        <AccessibleButton 
          label="Saiba mais" 
          onClick={() => router.push("/sobre")} 
        />
        <AccessibleButton 
          label="Começar agora" 
          onClick={() => router.push("/servicos")} 
        />
      </Actions>
    </HeroWrapper>
  );
};
