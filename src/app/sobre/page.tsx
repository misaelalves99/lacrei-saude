// src/app/sobre/page.tsx
"use client";

import React from "react";
import { HeroWrapper, Title, Subtitle } from "../components/sections/Hero.styles";
import { CTASection } from "../components/sections/CTASection";
import * as S from "./Sobre.styles";

// Ícones
import { FaHandHoldingMedical, FaHeartbeat, FaUserFriends, FaLaptopMedical } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdOutlineDiversity3, MdOutlinePsychology, MdOutlineVerified } from "react-icons/md";

export default function AboutPage() {
  return (
    <main id="main-content">
      <HeroWrapper>
        <Title>Sobre a Lacrei Saúde</Title>
        <Subtitle>
          Promovendo saúde acessível e inclusiva para todas as pessoas, com atenção, respeito e acolhimento.
        </Subtitle>
      </HeroWrapper>

      {/* Seção Missão */}
      <S.Section aria-labelledby="mission-title">
        <S.SectionTitle id="mission-title">Nossa Missão</S.SectionTitle>
        <S.SectionText>
          Garantir que cada pessoa, independentemente de suas características individuais, 
          tenha acesso a cuidados de saúde de qualidade, com empatia, acolhimento e segurança.
        </S.SectionText>

        <S.MissionGrid>
          <S.MissionCard>
            <FaHandHoldingMedical size={40} color="#018383" />
            <S.MissionText>Acolhimento humano e inclusivo</S.MissionText>
          </S.MissionCard>
          <S.MissionCard>
            <FaHeartbeat size={40} color="#018383" />
            <S.MissionText>Promoção do bem-estar integral</S.MissionText>
          </S.MissionCard>
          <S.MissionCard>
            <FaUserFriends size={40} color="#018383" />
            <S.MissionText>Atendimento sem discriminação</S.MissionText>
          </S.MissionCard>
          <S.MissionCard>
            <FaLaptopMedical size={40} color="#018383" />
            <S.MissionText>Tecnologia acessível a todos</S.MissionText>
          </S.MissionCard>
        </S.MissionGrid>
      </S.Section>

      {/* Seção Valores */}
      <S.Section aria-labelledby="values-title">
        <S.SectionTitle id="values-title">Nossos Valores</S.SectionTitle>
        <S.ValuesGrid>
          <S.ValueCard role="article">
            <MdOutlineDiversity3 size={36} color="#018383" />
            <S.ValueTitle>Inclusão</S.ValueTitle>
            <S.ValueText>Todos são bem-vindos, respeitando diversidade e singularidade.</S.ValueText>
          </S.ValueCard>
          <S.ValueCard role="article">
            <MdOutlinePsychology size={36} color="#018383" />
            <S.ValueTitle>Empatia</S.ValueTitle>
            <S.ValueText>Colocamo-nos no lugar do outro para compreender necessidades reais.</S.ValueText>
          </S.ValueCard>
          <S.ValueCard role="article">
            <MdOutlineHealthAndSafety size={36} color="#018383" />
            <S.ValueTitle>Excelência</S.ValueTitle>
            <S.ValueText>Priorizamos qualidade, segurança e eficiência em todos os serviços.</S.ValueText>
          </S.ValueCard>
          <S.ValueCard role="article">
            <MdOutlineVerified size={36} color="#018383" />
            <S.ValueTitle>Transparência</S.ValueTitle>
            <S.ValueText>Agimos com clareza e responsabilidade em todas as nossas ações.</S.ValueText>
          </S.ValueCard>
        </S.ValuesGrid>
      </S.Section>

      <CTASection />
    </main>
  );
}
