import styled from "styled-components";

// Container de seção
export const Section = styled.section`
  padding: 4rem 1rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

// Título da seção
export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

// Texto da seção
export const SectionText = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Grid responsivo de valores
export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Card individual de valor
export const ValueCard = styled.article`
  background: ${({ theme }) => theme.colors.backgroundGradient};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(1, 131, 131, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(1, 131, 131, 0.15);
    outline: none;
  }
`;

// Título do valor
export const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

// Texto do valor
export const ValueText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;
