// src/app/servicos/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { CTASection } from "../components/sections/CTASection";
import * as S from "./Servicos.styles";

// IMPORTAR AQUI OS ESTILOS DO HERO DA PÁGINA DE SERVIÇOS
import {
  HeroWrapper,
  HeroContent,
  HeroText,
  TitleHero as Title,
  SubtitleHero as Subtitle,
} from "./Servicos.styles";

const SERVICES = [
  {
    title: "Consulta Médica",
    description:
      "Atendimento personalizado com profissionais qualificados para cuidar da sua saúde.",
  },
  {
    title: "Exames Laboratoriais",
    description:
      "Realização de exames com segurança, agilidade e resultados confiáveis.",
  },
  {
    title: "Telemedicina",
    description:
      "Consultas online para maior comodidade, mantendo qualidade e segurança.",
  },
  {
    title: "Acolhimento Psicológico",
    description:
      "Suporte emocional e acompanhamento psicológico acessível a todos.",
  },
  {
    title: "Vacinação",
    description:
      "Campanhas de vacinação para prevenção e promoção da saúde comunitária.",
  },
  {
    title: "Educação em Saúde",
    description:
      "Programas educativos e workshops para promover bem-estar e prevenção.",
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      {/* Hero com imagem à esquerda e texto à direita */}
      <HeroWrapper role="region" aria-labelledby="hero-title">
        <Image
          src="https://cdn.pixabay.com/photo/2024/02/16/06/26/dentist-8576790_1280.png"
          alt="Profissional de saúde atendendo paciente"
          width={500}
          height={400}
          style={{ borderRadius: "12px", objectFit: "cover" }}
          loading="lazy"
        />

        <HeroContent>
          <HeroText>
            <Title id="hero-title">Nossos Serviços</Title>
            <Subtitle>
              Oferecemos soluções de saúde inclusivas, seguras e acessíveis,
              pensadas para cada pessoa.
            </Subtitle>
          </HeroText>
        </HeroContent>
      </HeroWrapper>

      <S.Section aria-labelledby="services-title">
        <S.SectionTitle id="services-title">Serviços Disponíveis</S.SectionTitle>
        <S.SectionSubtitle>
          Descubra como podemos apoiar sua saúde com cuidado e profissionalismo.
        </S.SectionSubtitle>

        <S.ServicesGrid>
          {SERVICES.map((service) => (
            <S.ServiceCard key={service.title} role="article">
              <S.ServiceTitle>{service.title}</S.ServiceTitle>
              <S.ServiceDescription>{service.description}</S.ServiceDescription>
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>
      </S.Section>

      <CTASection />
    </main>
  );
}
