// src/components/about/AboutSection.tsx
"use client";

import React, { ReactNode } from "react";
import * as S from "./AboutSection.styles";

interface AboutSectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ title, subtitle, children }) => {
  const id = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <S.Section aria-labelledby={`${id}-title`}>
      <S.SectionTitle id={`${id}-title`}>{title}</S.SectionTitle>
      <S.SectionSubtitle>{subtitle}</S.SectionSubtitle>
      <S.ServicesGrid>{children}</S.ServicesGrid>
    </S.Section>
  );
};
