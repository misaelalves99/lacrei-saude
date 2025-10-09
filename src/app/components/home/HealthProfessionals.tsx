'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ProfessionalsContainer,
  CardWrapperProfessionals,
  ImageWrapper,
  ContentWrapper,
} from './HealthProfessionals.styles';
import Button from '../ui/Button';

const HealthProfessionals: React.FC = () => {
  return (
    <ProfessionalsContainer>
      <CardWrapperProfessionals>
        {/* Imagem - lado esquerdo no desktop */}
        <ImageWrapper>
          <Image
            src="/assets/home/person-professional.e0f3da65.png"
            alt="Profissional da saúde conversando com empatia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ImageWrapper>

        {/* Conteúdo - lado direito no desktop */}
        <ContentWrapper>
          <h2>Sou Profissional</h2>
          <p>
            Amplie sua rede de pacientes e ofereça um atendimento que valoriza a
            diversidade. Junte-se à Lacrei Saúde e seja parte de uma comunidade de
            cuidado inclusivo.
          </p>

          <Link href="/profissional/cadastro" passHref legacyBehavior>
            <Button as="a" size="large" variant="primary">
              Cadastrar como Profissional
            </Button>
          </Link>
        </ContentWrapper>
      </CardWrapperProfessionals>
    </ProfessionalsContainer>
  );
};

export default HealthProfessionals;
