// src/app/page.tsx
"use client";

import React from "react";
import styled, { css } from "styled-components";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import About from "./components/home/About";
import Professionals from "./components/home/Professionals";
import Patients from "./components/home/Patients";
import HealthProfessionals from "./components/home/HealthProfessionals";
import ExperienceDetails from "./components/home/ExperienceDetails";

// =====================
// Styled Components
// =====================

const PageContainer = styled.main`
  width: 100%;
`;

const Section = styled.section<{ bg?: "light" | "white"; padding?: string }>`
  ${({ theme, bg = "white", padding }) => css`
    background-color: ${bg === "light" ? theme.colors.backgroundLight : theme.colors.background};
    padding: ${padding || theme.spacings.xxl} 0;

    display: flex;
    justify-content: center;

    /* Limita o conteúdo interno das seções */
    > * {
      width: 100%;
      max-width: 1200px;
      padding: 0 16px;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: ${padding || theme.spacings.xl} 0;
    }
  `}
`;

// =====================
// HomePage Component
// =====================

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      {/* Hero */}
      <Hero />

      {/* Features */}
      <Section bg="white" aria-label="Recursos de Cuidado">
        <Features />
      </Section>

      {/* About */}
      <Section bg="white" aria-label="Sobre a Lacrei Saúde">
        <About />
      </Section>

      {/* Professionals */}
      <Section bg="white" aria-label="Busca por Profissionais">
        <Professionals />
      </Section>

      {/* Patients */}
      <Section bg="light" aria-label="Área para Pacientes">
        <Patients />
      </Section>

      {/* Health Professionals */}
      <Section bg="light" aria-label="Área para Profissionais da Saúde">
        <HealthProfessionals />
      </Section>

      {/* Experience Details */}
      <Section bg="white" aria-label="Detalhes da Experiência">
        <ExperienceDetails />
      </Section>
    </PageContainer>
  );
};

export default HomePage;
