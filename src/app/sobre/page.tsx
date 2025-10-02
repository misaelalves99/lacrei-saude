// src/app/sobre/page.tsx
"use client";

import React from "react";
import { HeroWrapper, Title, Subtitle } from "../components/sections/Hero.styles";
import { CTASection } from "../components/sections/CTASection";
import * as S from "./Sobre.styles";

export default function AboutPage() {
  return (
    <main id="main-content">
      <HeroWrapper>
        <Title>Sobre a Lacrei Saúde</Title>
        <Subtitle>
          Promovendo saúde acessível e inclusiva para todas as pessoas, com atenção, respeito e acolhimento.
        </Subtitle>
      </HeroWrapper>

      <S.Section aria-labelledby="mission-title">
        <S.SectionTitle id="mission-title">Nossa Missão</S.SectionTitle>
        <S.SectionText>
          Garantir que cada pessoa, independentemente de suas características individuais, tenha acesso a cuidados de saúde de qualidade, com empatia, acolhimento e segurança.
        </S.SectionText>
      </S.Section>

      <S.Section aria-labelledby="values-title">
        <S.SectionTitle id="values-title">Nossos Valores</S.SectionTitle>
        <S.ValuesGrid>
          <S.ValueCard role="article">
            <S.ValueTitle>Inclusão</S.ValueTitle>
            <S.ValueText>Todos são bem-vindos, respeitando diversidade e singularidade.</S.ValueText>
          </S.ValueCard>
          <S.ValueCard role="article">
            <S.ValueTitle>Empatia</S.ValueTitle>
            <S.ValueText>Colocamo-nos no lugar do outro para compreender necessidades reais.</S.ValueText>
          </S.ValueCard>
          <S.ValueCard role="article">
            <S.ValueTitle>Excelência</S.ValueTitle>
            <S.ValueText>Priorizamos qualidade, segurança e eficiência em todos os serviços.</S.ValueText>
          </S.ValueCard>
          <S.ValueCard role="article">
            <S.ValueTitle>Transparência</S.ValueTitle>
            <S.ValueText>Agimos com clareza e responsabilidade em todas as nossas ações.</S.ValueText>
          </S.ValueCard>
        </S.ValuesGrid>
      </S.Section>

      <CTASection />
    </main>
  );
}
