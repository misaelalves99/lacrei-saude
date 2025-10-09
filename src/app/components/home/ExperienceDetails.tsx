// src/app/components/home/ExperienceDetails.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import {
  DetailsContainer,
  Title,
  Grid,
  DetailCard,
  IconWrapper,
  CardTitle,
  CardDescription,
  CardButton,
} from './ExperienceDetails.styles';

interface Detail {
  iconSrc: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
}

const ExperienceDetails: React.FC = () => {
  const details: Detail[] = [
    {
      iconSrc: '/assets/home/security-icon.a2112088.svg',
      alt: 'Segurança',
      title: 'Segurança',
      description:
        'Entenda como validamos pacientes e profissionais da saúde.',
      buttonText: 'Entenda',
    },
    {
      iconSrc: '/assets/home/acessibility-icon.4920104b.svg',
      alt: 'Acessibilidade',
      title: 'Acessibilidade',
      description:
        'Conheça nossos recursos que tornam a plataforma Lacrei Saúde acessível.',
      buttonText: 'Conheça',
    },
    {
      iconSrc: '/assets/home/questions-icon.e29fe960.svg',
      alt: 'Dúvidas Frequentes',
      title: 'Dúvidas Frequentes',
      description:
        'Acesse nossa lista de perguntas frequentes e tire suas dúvidas.',
      buttonText: 'Acesse',
    },
  ];

  return (
    <DetailsContainer>
      <Title>Nos preocupamos com cada detalhe de sua experiência</Title>

      <Grid>
        {details.map((detail) => (
          <DetailCard key={detail.title}>
            <IconWrapper>
              <Image
                src={detail.iconSrc}
                alt={detail.alt}
                width={84}
                height={84}
                priority
              />
            </IconWrapper>
            <CardTitle>{detail.title}</CardTitle>
            <CardDescription>{detail.description}</CardDescription>
            <CardButton>{detail.buttonText}</CardButton>
          </DetailCard>
        ))}
      </Grid>
    </DetailsContainer>
  );
};

export default ExperienceDetails;
