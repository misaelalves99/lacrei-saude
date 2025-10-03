// src/components/about/AboutHero.tsx
"use client";

import React from "react";
import * as S from "./AboutHero.styles";

interface AboutHeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  title = "Sobre a Lacrei Saúde",
  subtitle = "Promovendo saúde acessível e inclusiva para todas as pessoas, com atenção, respeito e acolhimento.",
  imageSrc = "/assets/about-hero.png",
  imageAlt = "Profissional de saúde atendendo paciente",
}) => {
  return (
    <S.HeroWrapper role="region" aria-labelledby="hero-title">
      <S.HeroContent>
        <S.HeroText>
          <S.TitleHero id="hero-title">{title}</S.TitleHero>
          <S.SubtitleHero>{subtitle}</S.SubtitleHero>
        </S.HeroText>
        <S.HeroImage src={imageSrc} alt={imageAlt} />
      </S.HeroContent>
    </S.HeroWrapper>
  );
};
