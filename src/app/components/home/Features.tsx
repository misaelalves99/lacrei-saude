// src/components/home/Features.tsx

"use client";

import React from "react";
import Image from "next/image";
import {
  FeaturesContainer,
  Title,
  TitleContainer,
  TitleDivider,
  SubTitle,
  CardGrid,
  FeatureCard,
  IconWrapper,
  CardTitle,
  CardDescription,
} from "./Features.styles";

const Features: React.FC = () => {
  const featureData = [
    {
      iconSrc: "/assets/home/handshake-icon.422966a2.svg",
      title: "Inclusão",
      description:
        "Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+.",
    },
    {
      iconSrc: "/assets/home/heart-icon.081c2229.svg",
      title: "Acolhimento",
      description:
        "As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+.",
    },
    {
      iconSrc: "/assets/home/shield-icon.54d509f2.svg",
      title: "Segurança",
      description:
        "Protegemos seus dados e validamos pacientes e profissionais da saúde.",
    },
  ];

  return (
    <FeaturesContainer>
      <TitleContainer>
        <Title>Conheça o jeito Lacrei Saúde de cuidar</Title>
        <TitleDivider />
        <SubTitle>Atendimento de qualidade e inclusivo</SubTitle>
      </TitleContainer>

      <CardGrid>
        {featureData.map(({ iconSrc, title, description }) => (
          <FeatureCard key={title}>
            <IconWrapper>
              <Image
                src={iconSrc}
                alt={title}
                width={80}
                height={80}
                priority
              />
            </IconWrapper>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </FeatureCard>
        ))}
      </CardGrid>
    </FeaturesContainer>
  );
};

export default Features;
