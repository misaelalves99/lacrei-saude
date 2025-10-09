// src/app/components/home/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import {
  HeroSection,
  HeroInner,
  Content,
  Title,
  Description,
  Actions,
  HeroImageBackground,
  ContentWrapper,
} from "./Hero.styles";

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroImageBackground />

      <ContentWrapper>
        <HeroInner>
          <Content>
            <Title>Olá, você está na Lacrei Saúde!</Title>
            <Description>
              Conectamos pessoas LGBTQIAPN+ com profissionais de saúde
              qualificados, proporcionando experiências de cuidado
              seguras e inclusivas.
            </Description>
            <Actions>
              <Link href="/auth/login-patient" passHref legacyBehavior>
                <Button as="a" size="medium" variant="primary">
                  Para pacientes
                </Button>
              </Link>
              <Link href="/auth/login-professionals" passHref legacyBehavior>
                <Button as="a" size="medium" variant="primary">
                  Para profissionais
                </Button>
              </Link>
            </Actions>
          </Content>
        </HeroInner>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
