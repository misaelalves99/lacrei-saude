// src/app/sobre/Sobre.styles.ts
import styled from "styled-components";

// Container de seções
export const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

// Títulos de seção
export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 1rem;
  text-align: center;
`;

// Texto de seção
export const SectionText = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
`;

// Grid de valores
export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

// Card individual de valor
export const ValueCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundGradient};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(1, 131, 131, 0.1);
`;

export const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const ValueText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;
