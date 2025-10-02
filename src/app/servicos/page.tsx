// src/app/servicos/page.tsx
"use client";

import React from "react";
import { HeroWrapper, Title, Subtitle } from "../components/sections/Hero.styles";
import { CTASection } from "../components/sections/CTASection";
import * as S from "./Servicos.styles";

const SERVICES = [
  {
    title: "Consulta Médica",
    description: "Atendimento personalizado com profissionais qualificados para cuidar da sua saúde.",
  },
  {
    title: "Exames Laboratoriais",
    description: "Realização de exames com segurança, agilidade e resultados confiáveis.",
  },
  {
    title: "Telemedicina",
    description: "Consultas online para maior comodidade, mantendo qualidade e segurança.",
  },
  {
    title: "Acolhimento Psicológico",
    description: "Suporte emocional e acompanhamento psicológico acessível a todos.",
  },
  {
    title: "Vacinação",
    description: "Campanhas de vacinação para prevenção e promoção da saúde comunitária.",
  },
  {
    title: "Educação em Saúde",
    description: "Programas educativos e workshops para promover bem-estar e prevenção.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroWrapper>
        <Title>Nossos Serviços</Title>
        <Subtitle>
          Oferecemos soluções de saúde inclusivas, seguras e acessíveis, pensadas para cada pessoa.
        </Subtitle>
      </HeroWrapper>

      <S.Section>
        <S.ServicesGrid>
          {SERVICES.map((service) => (
            <S.ServiceCard key={service.title}>
              <S.ServiceTitle>{service.title}</S.ServiceTitle>
              <S.ServiceDescription>{service.description}</S.ServiceDescription>
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>
      </S.Section>

      <CTASection />
    </>
  );
}
