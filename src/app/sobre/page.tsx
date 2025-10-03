"use client";

import React from "react";
import * as S from "./Sobre.styles";

// Ícones
import { FaHandHoldingMedical, FaHeartbeat, FaUserFriends, FaLaptopMedical } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdOutlineDiversity3, MdOutlinePsychology, MdOutlineVerified } from "react-icons/md";

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <S.HeroWrapper role="region" aria-labelledby="hero-title">
        <S.HeroContent>
          <S.HeroText>
            <S.TitleHero id="hero-title">Sobre a Lacrei Saúde</S.TitleHero>
            <S.SubtitleHero>
              Promovendo saúde acessível e inclusiva para todas as pessoas, com atenção, respeito e acolhimento.
            </S.SubtitleHero>
          </S.HeroText>
          <S.HeroImage
            src="https://cdn.pixabay.com/photo/2017/07/18/23/23/group-2517427_1280.png"
            alt="Profissional de saúde atendendo paciente"
          />
        </S.HeroContent>
      </S.HeroWrapper>

      {/* Seção Missão */}
      <S.Section aria-labelledby="mission-title">
        <S.SectionTitle id="mission-title">Nossa Missão</S.SectionTitle>
        <S.SectionSubtitle>
          Garantir que cada pessoa, independentemente de suas características individuais, tenha acesso a cuidados de saúde de qualidade, com empatia, acolhimento e segurança.
        </S.SectionSubtitle>

        <S.ServicesGrid>
          <S.ServiceCard>
            <FaHandHoldingMedical size={36} color="#018383" />
            <S.ServiceTitle>Acolhimento humano e inclusivo</S.ServiceTitle>
            <S.ServiceDescription>
              Priorizamos a escuta ativa, empatia e atendimento personalizado para todas as pessoas.
            </S.ServiceDescription>
          </S.ServiceCard>
          <S.ServiceCard>
            <FaHeartbeat size={36} color="#018383" />
            <S.ServiceTitle>Promoção do bem-estar integral</S.ServiceTitle>
            <S.ServiceDescription>
              Focamos na prevenção, qualidade de vida e cuidado físico e emocional.
            </S.ServiceDescription>
          </S.ServiceCard>
          <S.ServiceCard>
            <FaUserFriends size={36} color="#018383" />
            <S.ServiceTitle>Atendimento sem discriminação</S.ServiceTitle>
            <S.ServiceDescription>
              Todos são tratados com respeito e igualdade, independente de gênero, idade ou orientação.
            </S.ServiceDescription>
          </S.ServiceCard>
          <S.ServiceCard>
            <FaLaptopMedical size={36} color="#018383" />
            <S.ServiceTitle>Tecnologia acessível a todos</S.ServiceTitle>
            <S.ServiceDescription>
              Utilizamos ferramentas digitais para oferecer atendimento moderno, seguro e prático.
            </S.ServiceDescription>
          </S.ServiceCard>
        </S.ServicesGrid>
      </S.Section>

      {/* Seção Valores */}
      <S.Section aria-labelledby="values-title">
        <S.SectionTitle id="values-title">Nossos Valores</S.SectionTitle>
        <S.SectionSubtitle>
          Princípios que orientam nossas ações e garantem confiança e segurança a todos.
        </S.SectionSubtitle>

        <S.ServicesGrid>
          <S.ServiceCard>
            <MdOutlineDiversity3 size={36} color="#018383" />
            <S.ServiceTitle>Inclusão</S.ServiceTitle>
            <S.ServiceDescription>Respeitamos a diversidade e singularidade de cada pessoa.</S.ServiceDescription>
          </S.ServiceCard>
          <S.ServiceCard>
            <MdOutlinePsychology size={36} color="#018383" />
            <S.ServiceTitle>Empatia</S.ServiceTitle>
            <S.ServiceDescription>Colocamo-nos no lugar do outro para entender suas necessidades.</S.ServiceDescription>
          </S.ServiceCard>
          <S.ServiceCard>
            <MdOutlineHealthAndSafety size={36} color="#018383" />
            <S.ServiceTitle>Excelência</S.ServiceTitle>
            <S.ServiceDescription>Garantimos qualidade, segurança e eficiência em todos os serviços.</S.ServiceDescription>
          </S.ServiceCard>
          <S.ServiceCard>
            <MdOutlineVerified size={36} color="#018383" />
            <S.ServiceTitle>Transparência</S.ServiceTitle>
            <S.ServiceDescription>Agimos com clareza, ética e responsabilidade em todas as nossas ações.</S.ServiceDescription>
          </S.ServiceCard>
        </S.ServicesGrid>
      </S.Section>
    </main>
  );
}
