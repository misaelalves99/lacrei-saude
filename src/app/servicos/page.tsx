// src/app/servicos/page.tsx
"use client";

import React from "react";
import { ServicesHero } from "../components/services/ServicesHero";
import { ServicesGrid } from "../components/services/ServicesGrid";
import * as S from "./Servicos.styles";

export default function ServicesPage() {
  return (
    <main id="main-content">
      <ServicesHero />

      <S.Section aria-labelledby="services-title">
        <S.SectionTitle id="services-title">Serviços Disponíveis</S.SectionTitle>
        <S.SectionSubtitle>
          Descubra como podemos apoiar sua saúde com cuidado e profissionalismo.
        </S.SectionSubtitle>

        <ServicesGrid />
      </S.Section>
    </main>
  );
}
