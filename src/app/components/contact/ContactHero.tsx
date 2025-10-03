// src/components/contact/ContactHero.tsx

"use client";

import React from "react";
import * as S from "./ContactHero.styles";

interface ContactHeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  title = "Fale Conosco",
  subtitle = "Entre em contato com a Lacrei Saúde para dúvidas, sugestões ou agendamento de serviços. Estamos prontos para te atender com atenção, empatia e profissionalismo.",
  imageSrc = "/assets/contact-hero.png",
  imageAlt = "Pessoa utilizando computador para contato",
}) => {
  return (
    <S.HeroWrapper role="region" aria-labelledby="hero-title">
      <S.HeroContent>
        <S.HeroText>
          <S.TitleHero id="hero-title">{title}</S.TitleHero>
          <S.SubtitleHero>{subtitle}</S.SubtitleHero>
        </S.HeroText>
        <S.HeroImage src={imageSrc} alt={imageAlt} width={500} height={400} />
      </S.HeroContent>
    </S.HeroWrapper>
  );
};
