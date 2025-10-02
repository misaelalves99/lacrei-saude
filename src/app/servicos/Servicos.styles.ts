// src/app/servicos/Servicos.styles.ts
import styled from "styled-components";

// Container geral da seção
export const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

// Título da seção
export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-align: center;
  margin-bottom: 1rem;
`;

// Subtítulo ou descrição da seção
export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
`;

// Grid de serviços
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

// Card individual de serviço
export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundGradient};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(1, 131, 131, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(1, 131, 131, 0.15);
  }
`;

// Título do serviço
export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

// Descrição do serviço
export const ServiceDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;
