// src/app/components/services/ServicesHero.ts

"use client";

import React from "react";
import Image from "next/image";
import * as S from "./ServicesHero.styles";

export const ServicesHero: React.FC = () => (
  <S.HeroWrapper role="region" aria-labelledby="hero-title">
    <S.HeroContent>
      <S.HeroText>
        <S.TitleHero id="hero-title">Nossos Serviços</S.TitleHero>
        <S.SubtitleHero>
          Oferecemos soluções de saúde inclusivas, seguras e acessíveis, pensadas para cada pessoa.
        </S.SubtitleHero>
      </S.HeroText>

      <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
        <Image
          src="/assets/services-hero.png"
          alt="Profissional de saúde atendendo paciente"
          width={500}
          height={400}
          style={{ borderRadius: "12px", objectFit: "cover", maxWidth: "100%", height: "auto" }}
          loading="lazy"
        />
      </div>
    </S.HeroContent>
  </S.HeroWrapper>
);
