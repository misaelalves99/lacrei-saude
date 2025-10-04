// src/app/components/contact/ContactHero.tsx

"use client";

import React from "react";
import Image from "next/image";
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

        {/* Usando Image do Next.js */}
        <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={400}
            style={{
              borderRadius: "12px",
              objectFit: "cover",
              maxWidth: "100%",
              height: "auto",
            }}
            priority={false} // lazy loading por padrão
          />
        </div>
      </S.HeroContent>
    </S.HeroWrapper>
  );
};
