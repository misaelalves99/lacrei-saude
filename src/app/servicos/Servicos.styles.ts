import styled from "styled-components";

// Container geral da seção de serviços
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
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

// Subtítulo ou descrição da seção
export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Grid de serviços responsivo
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Card individual de serviço
export const ServiceCard = styled.article`
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

// Título do serviço
export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

// Descrição do serviço
export const ServiceDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;

/* -------------------------------------------
   Hero da página de Serviços (imagem + texto)
------------------------------------------- */

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 4rem;
    padding: 6rem 2rem;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const HeroText = styled.div`
  max-width: 600px;
`;

export const TitleHero = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`;

export const SubtitleHero = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
