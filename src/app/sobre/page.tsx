// src/app/sobre/page.tsx
"use client";

import React from "react";
import { AboutHero } from "../components/about/AboutHero";
import { AboutSection } from "../components/about/AboutSection";
import { FaHandHoldingMedical, FaHeartbeat, FaUserFriends, FaLaptopMedical } from "react-icons/fa";
import { MdOutlineDiversity3, MdOutlinePsychology, MdOutlineHealthAndSafety, MdOutlineVerified } from "react-icons/md";
import * as S from "../components/about/AboutSection.styles";
import * as P from "./Sobre.styles";

export default function AboutPage() {
  return (
    <P.MainContent id="main-content">
      <AboutHero />

      <AboutSection
        title="Nossa Missão"
        subtitle="Garantir que cada pessoa tenha acesso a cuidados de saúde de qualidade, com empatia, acolhimento e segurança."
      >
        <S.ServiceCard>
          <FaHandHoldingMedical size={36} color="#018383" />
          <S.ServiceTitle>Acolhimento humano e inclusivo</S.ServiceTitle>
          <S.ServiceDescription>Priorizamos a escuta ativa, empatia e atendimento personalizado.</S.ServiceDescription>
        </S.ServiceCard>
        <S.ServiceCard>
          <FaHeartbeat size={36} color="#018383" />
          <S.ServiceTitle>Promoção do bem-estar integral</S.ServiceTitle>
          <S.ServiceDescription>Focamos na prevenção, qualidade de vida e cuidado físico e emocional.</S.ServiceDescription>
        </S.ServiceCard>
        <S.ServiceCard>
          <FaUserFriends size={36} color="#018383" />
          <S.ServiceTitle>Atendimento sem discriminação</S.ServiceTitle>
          <S.ServiceDescription>Todos são tratados com respeito e igualdade.</S.ServiceDescription>
        </S.ServiceCard>
        <S.ServiceCard>
          <FaLaptopMedical size={36} color="#018383" />
          <S.ServiceTitle>Tecnologia acessível a todos</S.ServiceTitle>
          <S.ServiceDescription>Utilizamos ferramentas digitais para oferecer atendimento moderno e seguro.</S.ServiceDescription>
        </S.ServiceCard>
      </AboutSection>

      <AboutSection
        title="Nossos Valores"
        subtitle="Princípios que orientam nossas ações e garantem confiança e segurança a todos."
      >
        <S.ServiceCard>
          <MdOutlineDiversity3 size={36} color="#018383" />
          <S.ServiceTitle>Inclusão</S.ServiceTitle>
          <S.ServiceDescription>Respeitamos a diversidade e singularidade de cada pessoa.</S.ServiceDescription>
        </S.ServiceCard>
        <S.ServiceCard>
          <MdOutlinePsychology size={36} color="#018383" />
          <S.ServiceTitle>Empatia</S.ServiceTitle>
          <S.ServiceDescription>Colocamo-nos no lugar do outro para entender necessidades.</S.ServiceDescription>
        </S.ServiceCard>
        <S.ServiceCard>
          <MdOutlineHealthAndSafety size={36} color="#018383" />
          <S.ServiceTitle>Excelência</S.ServiceTitle>
          <S.ServiceDescription>Garantimos qualidade, segurança e eficiência em todos os serviços.</S.ServiceDescription>
        </S.ServiceCard>
        <S.ServiceCard>
          <MdOutlineVerified size={36} color="#018383" />
          <S.ServiceTitle>Transparência</S.ServiceTitle>
          <S.ServiceDescription>Agimos com clareza, ética e responsabilidade em todas as ações.</S.ServiceDescription>
        </S.ServiceCard>
      </AboutSection>
    </P.MainContent>
  );
}
