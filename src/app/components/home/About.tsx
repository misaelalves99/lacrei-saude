// src/components/home/About.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import {
  AboutSection,
  ImageWrapper,
  Content,
  Title,
  Description,
  LinkWrapper,
} from "./About.styles";

/**
 * 💡 Container que centraliza o conteúdo e limita a largura
 * Mantém o layout fluido e consistente em todos os breakpoints.
 */
const SectionContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    }}
  >
    {children}
  </div>
);

/**
 * 🩵 Componente About — Seção "O que é a Lacrei Saúde?"
 * - Design totalmente responsivo (imagem oculta em mobile)
 * - Alta performance e acessibilidade
 */
const About: React.FC = () => {
  return (
    <SectionContent>
      <AboutSection>
        {/* ================== Lado da Imagem ================== */}
        <ImageWrapper aria-hidden="true">
          <Image
            src="/assets/home/people-holding-flag.8d096827.png"
            alt="Duas pessoas segurando uma bandeira arco-íris representando inclusão e diversidade"
            fill
            style={{
              objectFit: "cover",
              borderRadius: "12px",
            }}
            priority={false}
            quality={85}
            sizes="(max-width: 768px) 0px, (max-width: 1200px) 50vw, 700px"
          />
        </ImageWrapper>

        {/* ================== Lado do Conteúdo ================== */}
        <Content>
          <Title>O que é a Lacrei Saúde?</Title>

          <Description>
            O nosso papel é construir a conexão entre as pessoas da comunidade
            LGBTQIAPN+ que precisam de atendimento clínico com profissionais da
            saúde.
          </Description>

          <Description>
            Tudo isso com segurança, inclusão e representatividade. Surgimos da
            esperança de ter um atendimento clínico qualificado, seguro e
            empático para todas as pessoas.
          </Description>

          <LinkWrapper>
            {/* ✅ Link acessível e sem decoração visual extra */}
            <Link href="/sobre" aria-label="Conheça mais sobre a Lacrei Saúde">
              <Button size="medium" variant="outline">
                Conhecer
              </Button>
            </Link>
          </LinkWrapper>
        </Content>
      </AboutSection>
    </SectionContent>
  );
};

export default About;
