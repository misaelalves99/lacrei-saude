// src/app/servicos/components/ServiceCard.tsx
"use client";

import React from "react";
import * as S from "./ServiceCard.styles";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link = "/" }) => {
  return (
    <S.CardWrapper role="article">
      <div style={{ marginBottom: "1rem" }}>{icon}</div>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
      <Link href={link} passHref legacyBehavior>
        <S.CardButton as="a">Saiba mais</S.CardButton>
      </Link>
    </S.CardWrapper>
  );
};
