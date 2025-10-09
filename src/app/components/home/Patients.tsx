// src/components/home/Patients.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  PatientsContainer,
  CardWrapper,
  ImageWrapper,
  ContentWrapper,
} from './Patients.styles';

/**
 * Seção "Pacientes" na Home.
 */
const Patients: React.FC = () => {
  return (
    <PatientsContainer>
      <CardWrapper>
        {/* Imagem - lado esquerdo */}
        <ImageWrapper>
          <Image
            src="/assets/home/person-with-flag-around.5a804bf9.png"
            alt="Pessoa sorrindo com cabelo colorido e bandeira LGBTQIAPN+ sobre os ombros"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>

        {/* Conteúdo - lado direito */}
        <ContentWrapper>
          <h2>Pacientes</h2>
          <p>
            Conecte-se a profissionais da saúde que estudam as necessidades da
            comunidade LGBTQIAPN+.
          </p>

          <Link href="/busca-atendimento" className="button-description">
            Buscar atendimento
          </Link>
        </ContentWrapper>
      </CardWrapper>
    </PatientsContainer>
  );
};

export default Patients;
