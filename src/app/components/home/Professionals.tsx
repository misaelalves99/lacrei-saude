// src/components/home/Professionals.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import {
  ProfessionalsContainer,
  TitleContainer,
  Title,
  TitleDivider,
  StepGrid,
  StepCard,
  IconWrapper,
  CardDescription,
} from './Professionals.styles';

/**
 * Seção "Profissionais" na Home.
 */
const Professionals: React.FC = () => {
  const steps = [
    { iconSrc: '/assets/home/mail-icon.7af8d375.svg', description: 'Cadastre-se gratuitamente em nossa plataforma' },
    { iconSrc: '/assets/home/search-icon.53cde487.svg', description: 'Encontre profissionais da saúde qualificados através de uma busca descomplicada.' },
    { iconSrc: '/assets/home/check-circle-icon.7068e49c.svg', description: 'Valide seu contato por SMS, para segurança no atendimento.' },
    { iconSrc: '/assets/home/phone-icon.30750025.svg', description: 'Entre em contato com a pessoa profissional escolhida e marque sua consulta.' },
  ];

  return (
    <ProfessionalsContainer>
      <TitleContainer>
        <Title>Encontre profissionais da saúde com facilidade e segurança</Title>
        <TitleDivider />
      </TitleContainer>

      <StepGrid>
        {steps.map((step, index) => (
          <StepCard key={index}>
            <IconWrapper stepNumber={index + 1}>
              <Image
                src={step.iconSrc}
                alt={`Ícone passo ${index + 1}`}
                width={56}
                height={56}
                priority
              />
            </IconWrapper>
            <CardDescription>{step.description}</CardDescription>
          </StepCard>
        ))}
      </StepGrid>
    </ProfessionalsContainer>
  );
};

export default Professionals;
