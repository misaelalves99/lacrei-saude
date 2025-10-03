// src/app/servicos/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as S from "./Servicos.styles";

// Ícones da react-icons
import { FaStethoscope, FaFlask, FaLaptopMedical, FaUserNurse, FaSyringe, FaBookOpen } from "react-icons/fa";

const SERVICES = [
  {
    title: "Consulta Médica",
    description: "Atendimento personalizado com profissionais qualificados para cuidar da sua saúde.",
    icon: <FaStethoscope size={36} color="#018383" />,
  },
  {
    title: "Exames Laboratoriais",
    description: "Realização de exames com segurança, agilidade e resultados confiáveis.",
    icon: <FaFlask size={36} color="#018383" />,
  },
  {
    title: "Telemedicina",
    description: "Consultas online para maior comodidade, mantendo qualidade e segurança.",
    icon: <FaLaptopMedical size={36} color="#018383" />,
  },
  {
    title: "Acolhimento Psicológico",
    description: "Suporte emocional e acompanhamento psicológico acessível a todos.",
    icon: <FaUserNurse size={36} color="#018383" />,
  },
  {
    title: "Vacinação",
    description: "Campanhas de vacinação para prevenção e promoção da saúde comunitária.",
    icon: <FaSyringe size={36} color="#018383" />,
  },
  {
    title: "Educação em Saúde",
    description: "Programas educativos e workshops para promover bem-estar e prevenção.",
    icon: <FaBookOpen size={36} color="#018383" />,
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <S.HeroWrapper role="region" aria-labelledby="hero-title">
        <S.HeroContent>
          {/* Texto */}
          <S.HeroText>
            <S.TitleHero id="hero-title">Nossos Serviços</S.TitleHero>
            <S.SubtitleHero>
              Oferecemos soluções de saúde inclusivas, seguras e acessíveis, pensadas para cada pessoa.
            </S.SubtitleHero>
          </S.HeroText>

          {/* Imagem */}
          <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
            <Image
              src="/assets/nossos-servicos.png"
              alt="Profissional de saúde atendendo paciente"
              width={500}
              height={400}
              style={{ borderRadius: "12px", objectFit: "cover", maxWidth: "100%", height: "auto" }}
              loading="lazy"
            />
          </div>
        </S.HeroContent>
      </S.HeroWrapper>

      {/* Seção de Serviços */}
      <S.Section aria-labelledby="services-title">
        <S.SectionTitle id="services-title">Serviços Disponíveis</S.SectionTitle>
        <S.SectionSubtitle>
          Descubra como podemos apoiar sua saúde com cuidado e profissionalismo.
        </S.SectionSubtitle>

        <S.ServicesGrid>
          {SERVICES.map((service) => (
            <S.ServiceCard key={service.title} role="article">
              <div style={{ marginBottom: "1rem" }}>{service.icon}</div>
              <S.ServiceTitle>{service.title}</S.ServiceTitle>
              <S.ServiceDescription>{service.description}</S.ServiceDescription>
              <Link href="/" passHref legacyBehavior>
                <S.CardButton as="a">Saiba mais</S.CardButton>
              </Link>
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>
      </S.Section>
    </main>
  );
}
